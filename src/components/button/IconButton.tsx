import { forwardRef } from 'react';
import { Colors, baseAction, iconBase, iconBaseStyle } from '@/components/button/components';
import Text from '@/components/text';
import type { ComponentPropsWithoutRef } from 'react';

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: Colors;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ color = 'default', children, ...rest }, ref) => {
    return (
      <button ref={ref} css={[baseAction, iconBaseStyle, iconBase[color]]} {...rest}>
        <Text css={{ color: 'inherit' }} variant="button" size="medium">
          {children}
        </Text>
      </button>
    );
  }
);

IconButton.displayName = 'Button';

export default IconButton;
