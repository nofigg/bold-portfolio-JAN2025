import React, { useEffect, useRef, memo } from 'react';

interface ScrambleTextProps {
  text: string;
  delay?: number;
}

const ScrambleText = memo(({ text, delay = 0 }: ScrambleTextProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number>();
  const originalTextRef = useRef(text);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    if (!elementRef.current) return;
    
    let frame = 0;
    let resolve: (() => void) | null = null;
    const queue = Promise.resolve();

    const scramble = () => {
      let update = '';
      let complete = 0;

      for (let i = 0, n = originalTextRef.current.length; i < n; i++) {
        if (i < frame) {
          complete++;
          update += originalTextRef.current[i];
        } else {
          if (Math.random() < 0.28) {
            update += chars[Math.floor(Math.random() * chars.length)];
          } else {
            update += originalTextRef.current[i];
          }
        }
      }

      elementRef.current!.textContent = update;

      if (complete === originalTextRef.current.length) {
        if (resolve) resolve();
      } else {
        frameRef.current = requestAnimationFrame(scramble);
        frame = Math.min(frame + (1 + Math.floor(Math.random() * 3)), originalTextRef.current.length);
      }
    };

    queue.then(() => new Promise<void>(res => {
      resolve = res;
      setTimeout(() => {
        frameRef.current = requestAnimationFrame(scramble);
      }, delay);
    }));

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [delay, chars]);

  return (
    <span ref={elementRef} aria-label={text}>
      {text}
    </span>
  );
});

ScrambleText.displayName = 'ScrambleText';

export default ScrambleText;