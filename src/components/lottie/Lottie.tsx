import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import type { AnimationItem } from 'lottie-web';

interface LottieProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const Lottie = ({ src, loop = true, autoplay = true, className }: LottieProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const player = useRef<AnimationItem | null>(null);
  const [, assetsPath, name] = /(.+)\/(.+)\..+/.exec(src)!;

  useEffect(() => {
    if (container.current == null) {
      return;
    }

    player.current = lottie.loadAnimation({
      container: container.current,
      loop,
      autoplay,
      renderer: 'svg',
      path: src,
      assetsPath,
      name,
      rendererSettings: {
        progressiveLoad: true,
        hideOnTransparent: true,
      },
    });

    return () => {
      player.current?.destroy();
    };
  }, [assetsPath, autoplay, loop, name, src]);

  return <div className={className} ref={container} />;
};

export default Lottie;
