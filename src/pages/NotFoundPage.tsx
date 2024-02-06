import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import Button, { LinkButton } from '@/components/button';
import Cta from '@/components/cta';
import { TopNav } from '@/components/nav';
import Page from '@/components/page';
import Text from '@/components/text';
import { gray, tokens } from '@/styles/colors';
import { GiDread } from 'react-icons/gi';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopNav showsHome showsLeft />
      <Page
        hasCta
        hasTopNav
        a11yText="Not Found"
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
            페이지를 찾을 수 없어요
          </Text>

          <Text
            variant="body"
            size="medium"
            color={gray['050']}
            as="p"
            css={css`
              text-align: center;
            `}
          >
            페이지가 존재하지 않거나, 사용할 수 없는 페이지에요
            <br />
            입력하신 주소가 정확한지 다시 한 번 확인해주세요
          </Text>
        </div>
      </Page>
      <Cta>
        <Button isFull color="default" onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
        <LinkButton isFull href="/start" color="primary">
          홈 으로 가기
        </LinkButton>
      </Cta>
    </>
  );
};

export default NotFoundPage;
