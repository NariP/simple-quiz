import { useEffect, useState } from 'react';
import Confetti from './Confetti';
import type { ComponentPropsWithoutRef } from 'react';

interface TimerConfettiProps extends ComponentPropsWithoutRef<typeof Confetti> {
  time?: number;
}

const TimerConfetti = ({ time = 5000, ...rest }: TimerConfettiProps) => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, time);
  }, [time]);

  return (
    <Confetti
      width={500}
      numberOfPieces={display ? 200 : 0}
      css={{ width: '100%', maxWidth: 500, height: '100%' }}
      {...rest}
    />
  );
};

export default TimerConfetti;
