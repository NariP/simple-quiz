import { css } from '@emotion/react';
import Lottie from '@/components/lottie';
import Text from '@/components/text';
import { lottieCatSrc } from '@/constants/lottie';
import { gray, opacity, tokens } from '@/styles/colors';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        height: 100%;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: 500px;
          height: 100%;
          display: none;
          border: 1px solid ${gray['010']};
          border-right-width: 0px;

          @media (min-width: 1000px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 40px;
          }
        `}
      >
        <Text
          variant="heading"
          size="large"
          color={tokens.primary}
          css={css`
            display: inline-block;
            padding: 0 20px;
            border-bottom: 4px solid ${tokens.primary};
            width: fit-content;
          `}
        >
          Simple Quiz
        </Text>
        <Lottie src={lottieCatSrc} />
        <Text
          variant="body"
          size="large"
          as="p"
          color={gray['050']}
          css={css`
            display: inline-block;
            padding: 0 20px;
          `}
        >
          Simple Quiz와
          <br />
          함께하는 즐거운 퀴즈 생활
          <br />
          지금 시작해보아요!
        </Text>
      </div>
      <div
        css={css`
          position: relative;
          height: 100%;
          width: 100%;
          max-width: 500px;
          border: 1px solid ${gray['010']};
          background-color: ${opacity.white['100']};
        `}
      >
        <div id="portal-topNav" />
        {children}
        <div id="portal-cta" />
      </div>
    </div>
  );
};

export default Layout;
