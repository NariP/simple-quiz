import { Suspense as RSuspense, useEffect, useState } from 'react';
import { PageLoader } from '@/components/page';
import type { ReactNode } from 'react';

interface SuspenseProps {
  /** 지연 시간(ms) */
  delay?: number;
  fallback?: ReactNode;
  children: ReactNode;
}
const Suspense = ({ delay = 1500, fallback = <PageLoader />, children }: SuspenseProps) => {
  const [isDelay, setIsDelay] = useState(false);

  useEffect(() => {
    setIsDelay(true);
    setTimeout(() => {
      setIsDelay(false);
    }, delay);
  }, [delay]);

  return <RSuspense fallback={fallback}>{isDelay ? fallback : children}</RSuspense>;
};

export default Suspense;
