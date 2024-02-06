import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';

const getHoverMediaQuery = (hoverStyle: SerializedStyles) => css`
  @media (hover: hover) and (pointer: fine) {
    ${hoverStyle}
  }
`;

export default getHoverMediaQuery;
