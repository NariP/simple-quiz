import { forwardRef } from 'react';
import { css } from '@emotion/react';
import { TextBase, variantAndSizeStyle } from '@/components/text/components';
import { opacity } from '@/styles/colors';
import type { Sizes, Variants } from '@/components/text/components';
import type { HTMLAttributes, ReactNode } from 'react';

interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Text 에서 사용할 html tag */
  as?: keyof HTMLElementTagNameMap;
  /** Text 종류 */
  variant?: Variants;
  /** Text 사이즈 */
  size?: Sizes;
  /** Text 색상 */
  color?: string;
  children?: ReactNode;
}

const Text = forwardRef<HTMLElement, TextProps>(
  ({ variant = 'body', size = 'medium', color = opacity.black['100'], ...rest }, ref) => {
    const fontStyle = getFontStyle({ variant, size, color });
    return <TextBase ref={ref} css={fontStyle} {...rest} />;
  }
);

const getFontStyle = ({
  variant,
  size,
  color,
}: Required<Pick<TextProps, 'variant' | 'size' | 'color'>>) => {
  return css`
    font-weight: 600;
    font-style: normal;
    letter-spacing: normal;

    ${variantAndSizeStyle[variant][size]};

    color: ${color};
  `;
};

Text.displayName = 'Text';

export default Text;
