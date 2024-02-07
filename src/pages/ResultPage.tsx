import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { LinkButton } from '@/components/button';
import Cta from '@/components/cta';
import { TopNav } from '@/components/nav';
import Page from '@/components/page';
import { TimerConfetti } from '@/libs/confetti';
import { ResultDetail, ResultDoughnut } from '@/screens/result';
import useQuizStore from '@/stores/useQuizStore';
import useTriviaStore from '@/stores/useTriviaStore';

const ResultPage = () => {
  const navigate = useNavigate();
  const startDate = useQuizStore(state => state.startDate);
  const resetTrivia = useTriviaStore(state => state.reset);

  useEffect(() => {
    if (startDate === undefined) {
      navigate('/start', { replace: true });
    }
  }, [startDate]);

  useEffect(() => {
    return () => {
      resetTrivia();
    };
  }, []);

  return (
    <>
      <TopNav showsHome title="퀴즈 결과" />
      <Page hasTopNav hasCta css={pageStyle} a11yText="퀴즈 결과">
        <ResultDetail />
        <ResultDoughnut />
      </Page>
      <Cta>
        <LinkButton isFull href="/start" color="default">
          홈으로 가기
        </LinkButton>
        <LinkButton isFull href="/review-note" color="primary">
          오답노트 보기
        </LinkButton>
      </Cta>
      <TimerConfetti time={3000} />
    </>
  );
};

const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default ResultPage;
