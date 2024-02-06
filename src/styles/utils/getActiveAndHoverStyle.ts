import { css } from '@emotion/react';
import getHoverMediaQuery from './getHoverMediaQuery';
import type { CSSObject, SerializedStyles } from '@emotion/react';

const getActiveAndHoverStyle = ({
  activeStyles,
  hoverStyles,
}: {
  activeStyles?: SerializedStyles | CSSObject;
  hoverStyles?: SerializedStyles | CSSObject;
}) => css`
  &:not(:disabled):not([aria-disabled]) {
    :active {
      ${activeStyles}
    }

    ${getHoverMediaQuery(css`
      :hover {
        ${hoverStyles};
      }
    `)};
  }
`;

export default getActiveAndHoverStyle;
