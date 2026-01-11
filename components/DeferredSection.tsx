import React, { Suspense } from 'react';
import { useInViewOnce } from '../src/useInViewOnce';

type Props = {
  children: React.ReactNode;
  /** extra viewport margin so sections load slightly before scrolling into view */
  rootMargin?: string;
  minHeightClassName?: string;
};

export function DeferredSection({ children, rootMargin = '200px 0px', minHeightClassName }: Props) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ rootMargin });

  return (
    <div ref={ref} className={minHeightClassName}>
      {inView ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}
