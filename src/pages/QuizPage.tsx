import { css } from '@emotion/react';
import { TopNav } from '@/components/nav';
import Page from '@/components/page';
import { Suspense } from '@/libs/react';
import Quiz from '@/screens/quiz';

const QuizPage = () => {
  return (
    <>
      <TopNav showsHome showsLeft title="퀴즈 풀기" />
      <Page hasCta hasTopNav css={pageStyle} a11yText="퀴즈 풀기">
        <Suspense>
          <Quiz />
        </Suspense>
      </Page>
    </>
  );
};

const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default QuizPage;
