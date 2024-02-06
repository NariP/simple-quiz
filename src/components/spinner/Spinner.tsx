import { forwardRef } from 'react';
import { css, keyframes } from '@emotion/react';
import { gray } from '@/styles/colors';
import type { HTMLAttributes } from 'react';

interface SpinnerProps extends HTMLAttributes<SVGSVGElement> {
  /** 스피너의 색상 */
  color?: string;
  /** 스피너의 사이즈 */
  size?: 16 | 24 | 36;
  /** 스피너의 stroke 두께 */
  strokeWidth?: 2 | 4;
}

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ color = gray['020'], size = INITIAL_SVG_SIZE, strokeWidth = STROKE_WIDTH, ...rest }, ref) => {
    const dashArray = Math.PI * size;

    return (
      <svg
        ref={ref}
        css={svgStyle}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        {...rest}
      >
        <circle
          css={[barStyle, dynamicBarStyle({ dashArray, color, size })]}
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth}
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  }
);

const INITIAL_SVG_SIZE = 36;
const STROKE_WIDTH = 2;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(540deg);
  }
  100% {
    transform: rotate(1080deg);
  }
`;

const svgStyle = css`
  animation: ${rotate} 4s linear infinite;
`;

const barStyle = css`
  fill: transparent;
  stroke: ${gray['020']}
  stroke-linecap: round;
`;

const spinner = (size: number) => keyframes`
  0% {
    stroke-dashoffset: ${0.66 * size};
  }
  50% {
    stroke-dashoffset: ${Math.PI * size};
  }
  100% {
    stroke-dashoffset: ${0.66 * size};
  }
`;

const dynamicBarStyle = ({
  dashArray,
  color,
  size,
}: {
  dashArray: number;
  color?: string;
  size: number;
}) => css`
  stroke-dasharray: ${dashArray};
  transform-origin: 50% 50%;
  animation: ${spinner(size)} 4s linear infinite;

  ${color &&
  css`
    stroke: ${color};
  `}
`;

Spinner.displayName = 'Spinner';

export default Spinner;
