import { css } from '@emotion/react';
import { gray } from '@/styles/colors';

const bodyCommon = css`
  font-weight: 500;
  color: ${gray['060']};
  line-height: 150%;
`;

const body = {
  xxsmall: css`
    ${bodyCommon};
    font-size: 12px;
    line-height: 160%;
  `,
  xsmall: css`
    ${bodyCommon};
    font-size: 14px;
    line-height: 160%;
  `,
  small: css`
    ${bodyCommon};
    font-size: 15px;
    line-height: 160%;
  `,
  medium: css`
    ${bodyCommon};
    font-size: 16px;
  `,
  large: css`
    ${bodyCommon};
    font-size: 18px;
  `,
  xlarge: css`
    ${bodyCommon};
    font-size: 20px;
  `,
  xxlarge: css`
    ${bodyCommon};
    font-size: 24px;
  `,
};

const headingCommon = css`
  line-height: 150%;
  letter-spacing: -0.0025em;
`;

const heading = {
  xxsmall: css`
    ${headingCommon};
    font-size: 16px;
    line-height: 160%;
    letter-spacing: inherit;
  `,
  xsmall: css`
    ${headingCommon};
    font-size: 18px;
    line-height: 160%;
    letter-spacing: inherit;
  `,
  small: css`
    ${headingCommon};
    font-size: 24px;
    line-height: 160%;
  `,
  medium: css`
    ${headingCommon};
    font-size: 28px;
  `,
  large: css`
    ${headingCommon};
    font-size: 36px;
    line-height: 140%;
  `,
  xlarge: css`
    ${headingCommon};
    font-size: 48px;
    line-height: 140%;
  `,
  xxlarge: css`
    ${headingCommon};
    font-size: 56px;
    line-height: 140%;
  `,
};

const subTitleCommon = css`
  line-height: 140%;
  color: ${gray['070']};
`;

const subtitle = {
  xxsmall: css`
    ${subTitleCommon};
    font-size: 12px;
  `,
  xsmall: css`
    ${subTitleCommon};
    font-size: 14px;
  `,
  small: css`
    ${subTitleCommon};
    font-size: 15px;
  `,
  medium: css`
    ${subTitleCommon};
    font-size: 16px;
  `,
  large: css`
    ${subTitleCommon};
    font-size: 18px;
  `,
  xlarge: css`
    ${subTitleCommon};
    font-size: 20px;
  `,
  xxlarge: css`
    ${subTitleCommon};
    font-size: 24px;
  `,
};

const captionCommon = css`
  color: ${gray['040']};
  letter-spacing: 0.2px;
  font-weight: 500;
  line-height: 100%;
`;

const caption = {
  xxsmall: css`
    ${captionCommon};
    font-size: 10px;
    line-height: 120%;
  `,
  xsmall: css`
    ${captionCommon};
    font-size: 12px;
    line-height: 120%;
  `,
  small: css`
    ${captionCommon};
    font-size: 14px;
    line-height: 115%;
  `,
  medium: css`
    ${captionCommon};
    font-size: 16px;
  `,
  large: css`
    ${captionCommon};
    font-size: 20px;
  `,
  xlarge: css``,
  xxlarge: css``,
};

const buttonCommon = css`
  line-height: 100%;
  color: ${gray['070']};
`;

const button = {
  xxsmall: css`
    ${buttonCommon};
    font-size: 12px;
  `,
  xsmall: css`
    ${buttonCommon};
    line-height: 14px;
  `,
  small: css`
    ${buttonCommon};
    font-size: 15px;
  `,
  medium: css`
    ${buttonCommon};
    font-size: 16px;
  `,
  large: css`
    ${buttonCommon};
    font-size: 18px;
  `,
  xlarge: css`
    ${buttonCommon};
    font-size: 20px;
  `,
  xxlarge: css`
    ${buttonCommon};
    font-size: 24px;
  `,
};

export const variantAndSizeStyle = {
  body,
  heading,
  subtitle,
  caption,
  button,
};
