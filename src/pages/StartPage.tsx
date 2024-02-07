import { css } from '@emotion/react';
import { LinkButton } from '@/components/button';
import Cta from '@/components/cta';
import { TopNav } from '@/components/nav';
import Page from '@/components/page';
import { QuizInfo, QuizTitle } from '@/screens/start';

const StartPage = () => {
  return (
    <>
      <TopNav title="퀴즈 홈" />
      <Page hasCta hasTopNav css={pageStyle} a11yText="퀴즈 시작하기">
        <QuizTitle />
        <QuizInfo />
      </Page>
      <Cta>
        <LinkButton isFull href="/quiz" color="primary">
          퀴즈 시작하기
        </LinkButton>
      </Cta>
    </>
  );
};

const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default StartPage;
