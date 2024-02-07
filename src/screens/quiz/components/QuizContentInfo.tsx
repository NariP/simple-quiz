import { css } from '@emotion/react';
import { Question } from '@/apis/trivia';
import { QuizTag } from '@/components/quiz';
import Text from '@/components/text';

interface QuizContentInfoProps {
  quiz: Question;
  step: number;
  total: number;
}

const QuizContentInfo = ({ quiz: q, step, total }: QuizContentInfoProps) => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
      `}
    >
      <Text>
        {step + 1} / {total}
      </Text>
      <div
        css={css`
          display: inline-flex;
          gap: 4px;
        `}
      >
        <QuizTag label={q.category} />
        <QuizTag type="type" label={q.type} />
        <QuizTag type="difficulty" label={q.difficulty} />
      </div>
    </section>
  );
};

export default QuizContentInfo;
