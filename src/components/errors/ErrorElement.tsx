import { css } from '@emotion/react';
import { useRouteError } from 'react-router-dom';
import Button from '@/components/button';
import Cta from '@/components/cta';
import { TopNav } from '@/components/nav';
import Page from '@/components/page';
import Text from '@/components/text';
import { gray, red, tokens } from '@/styles/colors';
import { GiDread } from 'react-icons/gi';
import type { ErrorRes } from '@/libs/axios';

const ErrorElement = () => {
  const error = useRouteError() as Error & ErrorRes;

  return (
    <>
      <TopNav showsHome showsLeft />
      <Page
        hasCta
        hasTopNav
        a11yText="Error"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        `}
      >
        <div
          css={css`
            padding-top: 60px;
          `}
        >
          <GiDread
            css={css`
              display: block;
              width: 100px;
              height: 100px;
              fill: ${tokens.primary};
            `}
          />
          <Text
            variant="heading"
            size="xlarge"
            color={tokens.primary}
            css={css`
              display: inline-block;
              width: fit-content;
            `}
          >
            Oops!
          </Text>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
          `}
        >
          <Text variant="body" size="large" color={gray['050']} as="p">
            무언가 문제가 생겼어요
          </Text>

          {error.name && error.message && (
            <Text
              variant="caption"
              size="small"
              color={red['300']}
              as="p"
              css={css`
                display: inline-block;
                background-color: ${red['100']};
                padding: 4px 8px;
                border-radius: 4px;
              `}
            >
              {error.name}: {error.message}
            </Text>
          )}

          {error.code && error.message && (
            <Text
              variant="caption"
              size="small"
              color={red['300']}
              as="p"
              css={css`
                display: inline-block;
                background-color: ${red['100']};
                padding: 4px 8px;
                border-radius: 4px;
              `}
            >
              code[{error.code}]: {error.message}
            </Text>
          )}

          <Text
            variant="body"
            size="medium"
            color={gray['050']}
            as="p"
            css={css`
              text-align: center;
            `}
          >
            아래 버튼을 눌러 새로고침을 해보고
            <br />
            지속적인 문제 발생시 고객센터에 문의 해주세요
          </Text>
        </div>
      </Page>
      <Cta>
        <Button isFull color="primary" onClick={() => window.location.reload()}>
          새로고침하기
        </Button>
      </Cta>
    </>
  );
};

export default ErrorElement;
