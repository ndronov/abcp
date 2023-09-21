import { useCallback, useRef } from 'react';

import { Fn } from '@declarations/common';

export const useThrottle = (fn: Fn, delayMs: number) => {
  const shouldSkipRef = useRef(false);

  return useCallback(
    (...args: unknown[]) => {
      if (shouldSkipRef.current) return;

      fn(...args);

      shouldSkipRef.current = true;

      setTimeout(() => {
        shouldSkipRef.current = false;
      }, delayMs);
    },
    [delayMs, fn],
  );
};
