import { useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useBlocker } from 'react-router-dom';
import { isEmpty } from 'lodash-es';
import Button from '@/components/button';
import { BottomSheet } from '@/components/modal';
import dayjs from '@/libs/dayjs';
import queries from '@/libs/react-query/queries';
import { QuizContent, QuizContentInfo } from '@/screens/quiz/components';
import useQuizStore from '@/stores/useQuizStore';
import useTriviaStore from '@/stores/useTriviaStore';

const Quiz = () => {
  const difficulty = useTriviaStore(state => state.difficulty);
  const setDate = useQuizStore(state => state.setDate);

  const [step, setStep] = useState(0);

  const { data: questions = [] } = useSuspenseQuery(queries.trivia.quizList({ difficulty }));
  const quiz = questions[step];

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname && step !== questions.length - 1
  );

  useEffect(() => {
    setDate('start', dayjs());
  }, []);

  return (
    <>
      <QuizContentInfo quiz={quiz} step={step} total={questions.length} />
      {!isEmpty(quiz) && (
        <QuizContent quiz={quiz} step={step} total={questions.length} setStep={setStep} />
      )}
      <BottomSheet
        open={blocker.state === 'blocked'}
        title="페이지를 벗어나실건가요?"
        description="지금 나가시면 풀이 정보가 저장되지 않아요"
      >
        <Button isFull color="default" onClick={() => blocker.proceed?.()}>
          나가기
        </Button>
        <Button isFull color="primary" onClick={() => blocker.reset?.()}>
          이어 풀기
        </Button>
      </BottomSheet>
    </>
  );
};

export default Quiz;
