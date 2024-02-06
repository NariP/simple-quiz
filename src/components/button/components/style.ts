import { css } from '@emotion/react';
import { gray, opacity, tokens } from '@/styles/colors';
import { getActiveAndHoverStyle } from '@/styles/utils';

export const baseAction = getActiveAndHoverStyle({
  activeStyles: css`
    transform: scale(0.95);
    transition: transform 0.2s ease-out;
  `,
});

export const baseStyle = css`
  justify-content: center;
  border-radius: 4px;
  padding: 0.625rem 1.25rem;
  transition-property: background-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;

  :disabled {
    cursor: default;
  }
`;

export const iconBaseStyle = css`
  ${baseStyle};
  padding: 10px;
  width: 40px;
  height: 40px;
  background-color: transparent;
`;

export const iconBase = {
  default: css`
    svg {
      fill: ${gray['080']};
    }
  `,
  primary: css`
    svg {
      fill: ${tokens.primary};
    }
  `,
  secondary: css`
    svg {
      fill: ${tokens.secondary};
    }
  `,
  disabled: css`
    svg {
      fill: ${gray['050']};
    }
  `,
};

export const outlineBase = {
  default: css`
    background-color: ${opacity.white['100']};
    color: ${gray['050']};
    border: 1px solid ${gray['030']};

    ${getActiveAndHoverStyle({
      hoverStyles: css`
        background-color: ${tokens.primary};
        border-color: ${tokens.primary};
        color: ${opacity.white['100']};
      `,
    })}
  `,
  primary: css`
    background-color: ${tokens.primary};
    border: 1px solid ${tokens.primary};
    color: ${opacity.white['100']};
  `,
  secondary: css`
    background-color: ${tokens.secondary};
    border: 1px solid ${tokens.secondary};
    color: ${opacity.white['100']};
  `,
  disabled: css`
    background-color: ${gray['020']};
    border: 1px solid ${gray['020']};
    color: ${gray['050']};
  `,
};

export const textBase = {
  default: css`
    background-color: transparent;
    color: ${gray['080']};

    ${getActiveAndHoverStyle({
      hoverStyles: css`
        color: ${tokens.primary};
      `,
    })}
  `,
  primary: css`
    background-color: transparent;
    color: ${tokens.primary};
  `,
  secondary: css`
    background-color: transparent;
    color: ${tokens.secondary};
  `,
  disabled: css`
    background-color: transparent;
    color: ${gray['050']};
  `,
};
