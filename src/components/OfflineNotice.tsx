import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';

export const OfflineNotice: React.FC = () => {
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine);

  useEffect(() => {
    const showOffline = () => setIsOffline(true);
    const showOnline = () => setIsOffline(false);

    window.addEventListener('offline', showOffline);
    window.addEventListener('online', showOnline);
    return () => {
      window.removeEventListener('offline', showOffline);
      window.removeEventListener('online', showOnline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      role="status"
      className="sticky top-14 z-30 border-b border-amber-300 bg-amber-50 px-4 py-2 text-amber-950"
    >
      <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-semibold">
        <WifiOff className="h-4 w-4 flex-shrink-0" />
        <span>
          You’re offline. Previously loaded app screens may remain available; videos and external illustrations require internet.
        </span>
      </div>
    </div>
  );
};
