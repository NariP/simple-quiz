import { createElement, forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Text 에서 사용할 html tag */
  as?: keyof HTMLElementTagNameMap;
  children?: ReactNode;
}

const TextBase = forwardRef<HTMLElement, TextProps>(({ as = 'span', children, ...rest }, ref) => {
  return createElement(
    as,
    {
      ref,
      ...rest,
    },
    children
  );
});

TextBase.displayName = 'TextBase';

export default TextBase;
