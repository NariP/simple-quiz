import { css } from '@emotion/react';

const reset = css`
  * {
    font-family:
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    color: #333;
    font-size: inherit;
    font-weight: 400;
    font-synthesis: none;
    line-height: 1.2;

    touch-action: manipulation;

    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    text-decoration: none;
    background-color: inherit;
  }

  :focus {
    outline: none;
  }

  ol,
  ul {
    list-style: none;
  }

  html,
  body,
  #root {
    background-color: #fefefe;
    width: 100%;
    height: 100%;
  }

  a,
  button {
    cursor: pointer;
  }
`;

export default reset;
