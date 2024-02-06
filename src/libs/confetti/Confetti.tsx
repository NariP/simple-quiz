import { forwardRef } from 'react';
import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import type { ComponentPropsWithoutRef } from 'react';

const Confetti = forwardRef<HTMLCanvasElement, ComponentPropsWithoutRef<typeof ReactConfetti>>(
  (passedProps, ref) => {
    const { width, height } = useWindowSize();
    return <ReactConfetti width={width} height={height} {...passedProps} ref={ref} />;
  }
);

Confetti.displayName = 'Confetti';

export default Confetti;
