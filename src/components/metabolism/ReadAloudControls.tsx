import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

export interface ReadAloudControlsProps {
  segmentContainerId: string;
  segmentId: string;
  sectionTitle?: string;
}

type PlaybackState = 'idle' | 'reading' | 'paused' | 'completed';

const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5] as const;
type SpeedOption = (typeof SPEED_OPTIONS)[number];

/**
 * Extracts meaningful visible text from a DOM element, adhering strictly to:
 * - Headings, paragraphs, lists, table text, figure captions, diagnostic notes, quiz questions/explanations
 * - Excludes buttons (except quiz questions/accordions), hidden content, SVG icons, video iframes, etc.
 */
function extractReadableText(container: HTMLElement): string {
  const parts: string[] = [];

  const BLOCK_TAGS = new Set([
    'P',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'LI',
    'TR',
    'FIGCAPTION',
    'BLOCKQUOTE',
    'SECTION',
    'ARTICLE',
    'HEADER',
    'DIV',
    'DT',
    'DD',
    'BUTTON',
  ]);

  const FORBIDDEN_TAGS = new Set([
    'SCRIPT',
    'STYLE',
    'SVG',
    'NOSCRIPT',
    'TEMPLATE',
    'CANVAS',
    'VIDEO',
    'AUDIO',
    'IFRAME',
  ]);

  function isVisible(el: HTMLElement): boolean {
    if (el.hidden) return false;
    if (el.getAttribute('aria-hidden') === 'true') return false;
    if (typeof window !== 'undefined' && window.getComputedStyle) {
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') {
        return false;
      }
    }
    return true;
  }

  function isIgnoredButton(btn: HTMLElement): boolean {
    const aria = (btn.getAttribute('aria-label') || '').trim().toLowerCase();
    const text = (btn.textContent || '').trim().toLowerCase();

    // Ignore lightbox / modal / enlarge buttons
    if (
      aria.includes('enlarge') ||
      aria.includes('close') ||
      aria.includes('dismiss')
    ) {
      return true;
    }
    if (text === 'enlarge' || text === 'close') {
      return true;
    }

    // Ignore navigation buttons (e.g., "Study Fatty Change", "DICM Curriculum")
    if (text.startsWith('study ') || text.includes('curriculum')) {
      return true;
    }

    return false;
  }

  function addSentenceBreak() {
    if (parts.length === 0) return;
    const last = parts[parts.length - 1];
    if (!last) return;
    const trimmed = last.trim();
    if (!trimmed) return;
    if (/[.,;]$/.test(trimmed)) {
      parts[parts.length - 1] = trimmed.slice(0, -1) + '.';
    } else if (!/[.!?:]$/.test(trimmed)) {
      parts[parts.length - 1] = trimmed + '.';
    }
  }

  function walk(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const rawText = (node.textContent || '').replace(/\s+/g, ' ');
      // Filter out isolated bullet symbols or decorative markers
      const clean = rawText.replace(/^[•·\s]+$/, '');
      if (clean.trim()) {
        parts.push(clean);
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as HTMLElement;

    if (!isVisible(el)) return;

    const tagName = el.tagName.toUpperCase();
    if (FORBIDDEN_TAGS.has(tagName)) return;

    if (tagName === 'BUTTON' && isIgnoredButton(el)) {
      return;
    }

    const isBlock = BLOCK_TAGS.has(tagName);
    if (isBlock) {
      addSentenceBreak();
    }

    for (let i = 0; i < el.childNodes.length; i++) {
      walk(el.childNodes[i]);
    }

    // Between table cells (TH/TD), ensure a comma or clean separation
    if (tagName === 'TD' || tagName === 'TH') {
      const last = parts[parts.length - 1];
      if (last && !/[.,!?:;]$/.test(last.trim())) {
        parts[parts.length - 1] = last.trim() + ',';
      }
    }

    if (isBlock) {
      addSentenceBreak();
    }
  }

  walk(container);

  // Clean and normalize final speech string
  let result = parts.join(' ');
  result = result
    .replace(/\s+([.,!?:;])/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/\.{2,}/g, '.')
    .replace(/\s*•\s*/g, '. ')
    .trim();

  return result;
}

/**
 * Safe fallback chunker that preserves 100% of tokens without omission.
 */
function safeFallbackChunking(text: string, maxLen: number = 200): string[] {
  const words = text.split(' ').filter(Boolean);
  if (words.length === 0) return text ? [text] : [];

  const chunks: string[] = [];
  let currentChunk = '';

  for (const word of words) {
    if (!currentChunk) {
      currentChunk = word;
    } else if (currentChunk.length + 1 + word.length <= maxLen) {
      currentChunk += ' ' + word;
    } else {
      chunks.push(currentChunk);
      currentChunk = word;
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks.length > 0 ? chunks : [text];
}

/**
 * Splits extracted segment text into manageable sentence chunks (around 100-200 characters).
 * Preserves punctuation so speech synthesizer pauses naturally.
 * Performs integrity check to guarantee every single token and character remains represented.
 */
function splitTextIntoSentences(text: string): string[] {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (!clean) return [];

  const MAX_CHUNK_LEN = 200;
  const MIN_CHUNK_LEN = 25;

  const chunks: string[] = [];
  let remaining = clean;

  while (remaining.length > 0) {
    if (remaining.length <= MAX_CHUNK_LEN) {
      chunks.push(remaining);
      break;
    }

    const maxIndex = Math.min(MAX_CHUNK_LEN, remaining.length);
    let splitPos = -1;

    // Priority 1: Sentence end (. ! ? : ;) followed by space
    for (let i = maxIndex - 1; i >= MIN_CHUNK_LEN; i--) {
      const ch = remaining[i];
      if (
        (ch === '.' || ch === '!' || ch === '?' || ch === ':' || ch === ';') &&
        remaining[i + 1] === ' '
      ) {
        splitPos = i + 1;
        break;
      }
    }

    // Priority 2: Clause end (, - —) followed by space
    if (splitPos === -1) {
      for (let i = maxIndex - 1; i >= MIN_CHUNK_LEN; i--) {
        const ch = remaining[i];
        if (
          (ch === ',' || ch === '-' || ch === '—') &&
          remaining[i + 1] === ' '
        ) {
          splitPos = i + 1;
          break;
        }
      }
    }

    // Priority 3: Any space between MIN_CHUNK_LEN and maxIndex
    if (splitPos === -1) {
      for (let i = maxIndex - 1; i >= MIN_CHUNK_LEN; i--) {
        if (remaining[i] === ' ') {
          splitPos = i;
          break;
        }
      }
    }

    // Priority 4: Look ahead for the next space within a reasonable distance
    if (splitPos === -1) {
      const nextSpace = remaining.indexOf(' ', MIN_CHUNK_LEN);
      if (nextSpace !== -1 && nextSpace <= MAX_CHUNK_LEN + 60) {
        splitPos = nextSpace;
      } else {
        splitPos = maxIndex;
      }
    }

    const chunk = remaining.slice(0, splitPos).trim();
    if (chunk) {
      chunks.push(chunk);
    }
    remaining = remaining.slice(splitPos).trimStart();
  }

  // Verification step: normalize whitespace in original and joined chunks
  const normalizedOriginal = clean.replace(/\s+/g, ' ').trim();
  const normalizedJoined = chunks.join(' ').replace(/\s+/g, ' ').trim();

  if (normalizedJoined === normalizedOriginal && chunks.length > 0) {
    return chunks;
  }

  // Safe fallback chunking if verification fails
  return safeFallbackChunking(normalizedOriginal, MAX_CHUNK_LEN);
}

/**
 * Resolves preferred voice in order:
 * 1. English UK voice (preferring natural/online/neural/standard UK voices)
 * 2. English US voice
 * 3. Any English voice
 * 4. Browser default voice
 */
function selectVoice(voices: SpeechSynthesisVoice[]): {
  voice: SpeechSynthesisVoice | null;
  lang: string;
} {
  if (!voices || voices.length === 0) {
    return { voice: null, lang: 'en-GB' };
  }

  const enVoices = voices.filter((v) => {
    const l = (v.lang || '').toLowerCase().replace('_', '-');
    return l.startsWith('en');
  });

  // 1. UK English
  const ukVoices = enVoices.filter((v) => {
    const l = (v.lang || '').toLowerCase().replace('_', '-');
    return l === 'en-gb' || l.startsWith('en-gb');
  });

  if (ukVoices.length > 0) {
    const naturalUk = ukVoices.find(
      (v) =>
        v.name.includes('Natural') ||
        v.name.includes('Online') ||
        v.name.includes('Neural') ||
        v.name.includes('Enhanced') ||
        v.name.includes('Google UK English') ||
        v.name.includes('Daniel') ||
        v.name.includes('Serena') ||
        v.name.includes('Oliver') ||
        v.name.includes('Kate')
    );
    return { voice: naturalUk || ukVoices[0], lang: 'en-GB' };
  }

  // 2. US English
  const usVoices = enVoices.filter((v) => {
    const l = (v.lang || '').toLowerCase().replace('_', '-');
    return l === 'en-us' || l.startsWith('en-us');
  });

  if (usVoices.length > 0) {
    const naturalUs = usVoices.find(
      (v) =>
        v.name.includes('Natural') ||
        v.name.includes('Online') ||
        v.name.includes('Neural') ||
        v.name.includes('Enhanced') ||
        v.name.includes('Google US English') ||
        v.name.includes('Samantha') ||
        v.name.includes('Ava') ||
        v.name.includes('Alex')
    );
    return { voice: naturalUs || usVoices[0], lang: 'en-US' };
  }

  // 3. Any English
  if (enVoices.length > 0) {
    return { voice: enVoices[0], lang: enVoices[0].lang || 'en-GB' };
  }

  // 4. Default or first available voice
  const defaultVoice = voices.find((v) => v.default) || voices[0] || null;
  return { voice: defaultVoice, lang: defaultVoice?.lang || 'en-GB' };
}

export const ReadAloudControls: React.FC<ReadAloudControlsProps> = ({
  segmentContainerId,
  segmentId,
  sectionTitle,
}) => {
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle');
  const [rate, setRate] = useState<SpeedOption>(1);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [voiceName, setVoiceName] = useState<string>('');

  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const chunksRef = useRef<string[]>([]);
  const chunkIndexRef = useRef<number>(0);
  const chunkRetryCountRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const isCancelledRef = useRef<boolean>(false);
  const sessionIdRef = useRef<number>(0);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const nextChunkTimeoutRef = useRef<NodeJS.Timeout | number | null>(null);
  const retryTimeoutRef = useRef<NodeJS.Timeout | number | null>(null);

  const clearNextChunkTimeout = useCallback(() => {
    if (nextChunkTimeoutRef.current !== null) {
      clearTimeout(nextChunkTimeoutRef.current);
      nextChunkTimeoutRef.current = null;
    }
  }, []);

  const clearRetryTimeout = useCallback(() => {
    if (retryTimeoutRef.current !== null) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  }, []);

  const clearAllTimeouts = useCallback(() => {
    clearNextChunkTimeout();
    clearRetryTimeout();
  }, [clearNextChunkTimeout, clearRetryTimeout]);

  // Check browser support on initial mount
  useEffect(() => {
    const supported =
      typeof window !== 'undefined' &&
      'speechSynthesis' in window &&
      'SpeechSynthesisUtterance' in window;

    setIsSupported(supported);
    if (!supported) {
      setStatusMessage('Read aloud is not supported by this browser');
    }
  }, []);

  // Populate voices asynchronously via voiceschanged
  useEffect(() => {
    if (!isSupported) return;

    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      if (available && available.length > 0) {
        voicesRef.current = available;
        const chosen = selectVoice(available);
        if (chosen.voice) {
          setVoiceName(chosen.voice.name);
        }
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [isSupported]);

  // Stop speech helper
  const stopSpeech = useCallback(() => {
    clearAllTimeouts();
    sessionIdRef.current += 1;
    isCancelledRef.current = true;
    isPausedRef.current = false;
    chunkIndexRef.current = 0;
    chunkRetryCountRef.current = 0;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    currentUtteranceRef.current = null;
  }, [clearAllTimeouts]);

  // Automatically stop speech on section change or unmount
  useEffect(() => {
    stopSpeech();
    setPlaybackState('idle');
    setStatusMessage('');
  }, [segmentId, stopSpeech]);

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, [stopSpeech]);

  // Recursive sequential chunk speaker with retry handling and single active utterance
  const playChunk = useCallback(
    (index: number, chunksList: string[], currentRate: number, sessionId: number) => {
      if (!isSupported) return;

      if (
        sessionId !== sessionIdRef.current ||
        isCancelledRef.current ||
        isPausedRef.current
      ) {
        return;
      }

      if (index >= chunksList.length) {
        setPlaybackState('completed');
        setStatusMessage('Reading completed');
        chunkIndexRef.current = 0;
        chunkRetryCountRef.current = 0;
        currentUtteranceRef.current = null;
        return;
      }

      // Maintain a single active SpeechSynthesisUtterance
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
          window.speechSynthesis.cancel();
        }
      }

      chunkIndexRef.current = index;

      const chunkText = chunksList[index];
      const utterance = new SpeechSynthesisUtterance(chunkText);
      currentUtteranceRef.current = utterance;

      const { voice, lang } = selectVoice(voicesRef.current);
      if (voice) {
        utterance.voice = voice;
      }
      utterance.lang = lang;
      utterance.rate = currentRate;

      utterance.onend = () => {
        if (
          sessionId !== sessionIdRef.current ||
          isCancelledRef.current ||
          isPausedRef.current
        ) {
          return;
        }

        chunkRetryCountRef.current = 0;
        currentUtteranceRef.current = null;

        const nextIndex = index + 1;
        chunkIndexRef.current = nextIndex;

        if (nextIndex >= chunksList.length) {
          setPlaybackState('completed');
          setStatusMessage('Reading completed');
          chunkIndexRef.current = 0;
          return;
        }

        // Add short gap of ~85ms (75-100ms) between successfully completed chunks
        clearNextChunkTimeout();
        nextChunkTimeoutRef.current = setTimeout(() => {
          nextChunkTimeoutRef.current = null;
          if (
            sessionId !== sessionIdRef.current ||
            isCancelledRef.current ||
            isPausedRef.current
          ) {
            return;
          }
          playChunk(nextIndex, chunksList, currentRate, sessionId);
        }, 85);
      };

      utterance.onerror = (event) => {
        // Do not retry when cancellation was deliberately caused
        if (
          sessionId !== sessionIdRef.current ||
          isCancelledRef.current ||
          isPausedRef.current ||
          event.error === 'canceled' ||
          event.error === 'interrupted'
        ) {
          return;
        }

        currentUtteranceRef.current = null;

        // Non-cancellation error: retry same chunk once after ~100ms
        if (chunkRetryCountRef.current < 1) {
          chunkRetryCountRef.current += 1;
          chunkIndexRef.current = index; // Do not advance chunkIndexRef

          clearRetryTimeout();
          retryTimeoutRef.current = setTimeout(() => {
            retryTimeoutRef.current = null;
            if (
              sessionId !== sessionIdRef.current ||
              isCancelledRef.current ||
              isPausedRef.current
            ) {
              return;
            }
            playChunk(index, chunksList, currentRate, sessionId);
          }, 100);
        } else {
          // If the same chunk fails again: stop playback, keep chunkIndexRef pointing to failed chunk
          chunkIndexRef.current = index;
          chunkRetryCountRef.current = 0;
          setPlaybackState('paused');
          setStatusMessage(
            'Reading paused because this sentence could not be played. Press Resume to try again.'
          );
          if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
          }
        }
      };

      window.speechSynthesis.speak(utterance);
    },
    [isSupported, clearNextChunkTimeout, clearRetryTimeout]
  );

  // Start reading segment from the beginning
  const startReading = useCallback(
    (overrideRate?: SpeedOption) => {
      if (!isSupported) return;

      stopSpeech();
      isCancelledRef.current = false;
      isPausedRef.current = false;
      chunkRetryCountRef.current = 0;

      const container = document.getElementById(segmentContainerId);
      if (!container) {
        setStatusMessage('Segment content not found');
        return;
      }

      const rawText = extractReadableText(container);
      if (!rawText || rawText.length === 0) {
        setStatusMessage('No readable text in this segment');
        return;
      }

      const chunks = splitTextIntoSentences(rawText);
      chunksRef.current = chunks;
      chunkIndexRef.current = 0;

      const activeRate = overrideRate !== undefined ? overrideRate : rate;
      setPlaybackState('reading');
      setStatusMessage('Reading');

      sessionIdRef.current += 1;
      const currentSessionId = sessionIdRef.current;
      playChunk(0, chunks, activeRate, currentSessionId);
    },
    [isSupported, segmentContainerId, rate, stopSpeech, playChunk]
  );

  // Pause speech
  const handlePause = useCallback(() => {
    if (!isSupported) return;
    clearAllTimeouts();
    sessionIdRef.current += 1;
    isPausedRef.current = true;
    setPlaybackState('paused');
    setStatusMessage('Paused');

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    currentUtteranceRef.current = null;
  }, [isSupported, clearAllTimeouts]);

  // Resume speech (retrying the exact same chunk)
  const handleResume = useCallback(() => {
    if (!isSupported) return;
    clearAllTimeouts();
    isPausedRef.current = false;
    isCancelledRef.current = false;
    chunkRetryCountRef.current = 0; // Fresh attempt for this chunk

    setPlaybackState('reading');
    setStatusMessage('Reading');

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    sessionIdRef.current += 1;
    const currentSessionId = sessionIdRef.current;
    playChunk(chunkIndexRef.current, chunksRef.current, rate, currentSessionId);
  }, [isSupported, clearAllTimeouts, rate, playChunk]);

  // Stop speech
  const handleStop = useCallback(() => {
    stopSpeech();
    setPlaybackState('idle');
    setStatusMessage('Reading stopped');
  }, [stopSpeech]);

  // Restart speech from beginning
  const handleRestart = useCallback(() => {
    startReading();
  }, [startReading]);

  // Change reading speed
  const handleRateChange = (newRate: SpeedOption) => {
    if (newRate === rate) return;
    setRate(newRate);

    // If speech is playing or paused, restart the segment at the selected speed
    if (playbackState === 'reading' || playbackState === 'paused') {
      startReading(newRate);
    }
  };

  // If speech synthesis is unsupported in the current environment
  if (!isSupported) {
    return (
      <div
        id="read-aloud-unsupported"
        className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-500 flex items-center gap-2"
        role="status"
      >
        <VolumeX className="w-4 h-4 text-slate-400 flex-shrink-0" />
        <span>Read aloud is not supported by this browser</span>
        <div aria-live="polite" className="sr-only">
          Read aloud is not supported by this browser
        </div>
      </div>
    );
  }

  const isActive = playbackState === 'reading' || playbackState === 'paused';

  return (
    <div
      id={`read-aloud-panel-${segmentId}`}
      className="bg-white border border-slate-200 rounded-2xl p-2.5 sm:p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs"
      role="region"
      aria-label="Study Segment Read Aloud Controls"
    >
      {/* Primary & Secondary Audio Controls */}
      <div className="flex flex-wrap items-center gap-2 min-w-0">
        {/* Primary Play / Pause / Resume Button */}
        {playbackState === 'idle' || playbackState === 'completed' ? (
          <button
            id="read-aloud-primary-btn"
            onClick={() => startReading()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-semibold transition-colors cursor-pointer shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            aria-label={`Read aloud: ${sectionTitle || 'current segment'}`}
          >
            <Volume2 className="w-4 h-4 flex-shrink-0 text-teal-200" />
            <span>Read aloud</span>
          </button>
        ) : playbackState === 'reading' ? (
          <button
            id="read-aloud-primary-btn"
            onClick={handlePause}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-semibold transition-colors cursor-pointer shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
            aria-label="Pause reading aloud"
          >
            <Pause className="w-4 h-4 flex-shrink-0 text-amber-200" />
            <span>Pause</span>
          </button>
        ) : (
          <button
            id="read-aloud-primary-btn"
            onClick={handleResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-semibold transition-colors cursor-pointer shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            aria-label="Resume reading aloud"
          >
            <Play className="w-4 h-4 flex-shrink-0 text-teal-200" />
            <span>Resume</span>
          </button>
        )}

        {/* Secondary Stop & Restart Controls (when active) */}
        {isActive && (
          <>
            <button
              id="read-aloud-stop-btn"
              onClick={handleStop}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              aria-label="Stop reading aloud"
              title="Stop"
            >
              <Square className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" />
              <span className="hidden xs:inline">Stop</span>
            </button>

            <button
              id="read-aloud-restart-btn"
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              aria-label="Restart reading from beginning"
              title="Restart"
            >
              <RotateCcw className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" />
              <span className="hidden xs:inline">Restart</span>
            </button>
          </>
        )}

        {/* Completed State Restart Option */}
        {playbackState === 'completed' && (
          <button
            id="read-aloud-restart-btn"
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            aria-label="Restart reading from beginning"
          >
            <RotateCcw className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" />
            <span>Restart</span>
          </button>
        )}

        {/* Visual Playback Status Badge */}
        {playbackState === 'reading' && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Reading</span>
          </span>
        )}

        {playbackState === 'paused' && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span>Paused</span>
          </span>
        )}

        {playbackState === 'completed' && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-semibold">
            <CheckCircle2 className="w-3 h-3 text-teal-700" />
            <span>Reading completed</span>
          </span>
        )}
      </div>

      {/* Right Side: Reading Speed Selector */}
      <div className="flex items-center gap-2 ml-auto sm:ml-0">
        <span
          className="text-[11px] text-slate-500 font-medium hidden sm:inline"
          id={`speed-label-${segmentId}`}
        >
          Speed:
        </span>
        <div
          className="inline-flex items-center p-0.5 bg-slate-100 rounded-xl border border-slate-200/80"
          role="group"
          aria-labelledby={`speed-label-${segmentId}`}
        >
          {SPEED_OPTIONS.map((speed) => {
            const isSelected = rate === speed;
            return (
              <button
                key={speed}
                type="button"
                onClick={() => handleRateChange(speed)}
                aria-pressed={isSelected}
                aria-label={`Reading speed ${speed} times${isSelected ? ' (active)' : ''}`}
                className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 ${
                  isSelected
                    ? 'bg-teal-800 text-white shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {speed}×
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible visual banner when paused due to speech error */}
      {statusMessage.includes('could not be played') && (
        <div
          role="alert"
          className="w-full text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 leading-relaxed"
        >
          {statusMessage}
        </div>
      )}

      {/* Screen Reader Live Status Region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {statusMessage}
      </div>
    </div>
  );
};
