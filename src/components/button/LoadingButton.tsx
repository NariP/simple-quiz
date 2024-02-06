import { forwardRef } from 'react';
import { css } from '@emotion/react';
import Button from '@/components/button';
import Spinner from '@/components/spinner';
import { gray, opacity, tokens } from '@/styles/colors';
import type { ComponentPropsWithoutRef } from 'react';

interface LoadingButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  isLoading?: boolean;
}

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    { isLoading = false, variant = 'outline', color = 'default', onClick, children, ...rest },
    ref
  ) => {
    const spinnerColor = SPINNER_COLOR[variant][color];

    return (
      <Button
        ref={ref}
        disabled={isLoading}
        variant={variant}
        color={color}
        onClick={e => (isLoading ? undefined : onClick?.(e))}
        {...rest}
      >
        {isLoading ? (
          <span
            css={css`
              display: inline-flex;
              justify-content: space-between;
              align-items: center;
              gap: 4px;
              color: inherit;
              font-weight: inherit;
              font-size: inherit;
            `}
          >
            <Spinner size={16} color={spinnerColor} />
            {children}
          </span>
        ) : (
          children
        )}
      </Button>
    );
  }
);

const SPINNER_COLOR = {
  outline: {
    default: gray['050'],
    primary: opacity.white['100'],
    secondary: opacity.white['100'],
    disabled: gray['050'],
  },
  text: {
    default: gray['080'],
    primary: tokens.primary,
    secondary: tokens.secondary,
    disabled: gray['050'],
  },
};

LoadingButton.displayName = 'LoadingButton';

export default LoadingButton;
