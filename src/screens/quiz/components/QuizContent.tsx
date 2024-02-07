import { useState } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button';
import Cta from '@/components/cta';
import { BottomSheet } from '@/components/modal';
import { QuizLabelRadio, QuizQuestion } from '@/components/quiz';
import { localStore } from '@/libs/browserStorage/store';
import dayjs from '@/libs/dayjs';
import useQuizStore from '@/stores/useQuizStore';
import { green, red } from '@/styles/colors';
import type { Question } from '@/apis/trivia';
import type { Dispatch, SetStateAction } from 'react';
interface QuizContentProps {
  quiz: Question;
  step: number;
  total: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const QuizContent = ({ quiz: q, step, total, setStep }: QuizContentProps) => {
  const navigate = useNavigate();
  const setDate = useQuizStore(state => state.setDate);
  const setAmount = useQuizStore(state => state.setAmount);

  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState<string>('');
  const [wrongQs, setWrongQs] = useState<Question[]>([]);

  const isRight = q.correctAnswer === answer;
  const title = isRight ? '🤗 정답이에요!' : '🥺 오답이에요!';
  const description = `답은 "${getAnswer(q.correctAnswer)}" 이에요`;

  return (
    <>
      <section
        css={css`
          width: 100%;
        `}
      >
        <QuizQuestion step={step} question={q.question} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 8px;
          `}
        >
          {q.allAnswers.map(a => (
            <QuizLabelRadio
              key={a}
              label={a}
              value={answer}
              inputProps={{
                id: a,
                name: `quiz_${q.id}`,
                value: a,
                onChange: e => setAnswer(e.target.value),
              }}
            />
          ))}
        </div>
      </section>
      <Cta>
        <Button
          isFull
          disabled={!answer}
          color={answer ? 'primary' : 'disabled'}
          onClick={() => setOpen(true)}
        >
          {answer ? '답 확인하기' : '답을 선택해주세요'}
        </Button>
      </Cta>
      <BottomSheet
        open={open}
        title={title}
        titleProps={{ color: isRight ? green['400'] : red['300'] }}
        descriptionProps={{ dangerouslySetInnerHTML: { __html: description } }}
        description={description}
      >
        <Button
          isFull
          color="primary"
          onClick={() => {
            setOpen(false);
            if (!isRight) {
              // 틀린 문제 state 업데이트
              setWrongQs(prev => [...prev, q]);
            }

            if (step < total - 1) {
              setStep(prev => prev + 1);
              setAnswer('');
            } else {
              localStore.wrongQuestions.item = wrongQs;
              setDate('end', dayjs());
              setAmount(total - wrongQs.length, wrongQs.length);
              navigate('/result');
            }
          }}
        >
          {step < total - 1 ? '다음 문항' : '결과 보러 가기'}
        </Button>
      </BottomSheet>
    </>
  );
};

const getAnswer = (answer: string) => {
  if (answer === 'True') return 'O';
  if (answer === 'False') return 'X';

  return answer;
};

export default QuizContent;
