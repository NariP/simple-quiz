import { forwardRef } from 'react';
import Text from '@/components/text';
import { baseAction, baseStyle, outlineBase, textBase } from './components';
import type { Colors, Variants } from './components';
import type { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variants;
  color?: Colors;
  isFull?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'outline', color = 'default', isFull = false, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        css={[
          baseAction,
          baseStyle,
          variant === 'outline' ? outlineBase[color] : textBase[color],
          isFull && { width: '100%' },
        ]}
        {...rest}
      >
        <Text css={{ color: 'inherit' }} variant="button" size="medium">
          {children}
        </Text>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
