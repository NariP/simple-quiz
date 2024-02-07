import { css } from '@emotion/react';
import { Question } from '@/apis/trivia';
import Tag from '@/components/tag';
import Text from '@/components/text';
import { DIFFICULTY_KR, TYPE_KR } from '@/constants/trivia';
import { blue, gray, green, red } from '@/styles/colors';

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
        <Tag>{q.category}</Tag>
        <Tag bgColor={gray['020']} color={gray['050']}>
          {TYPE_KR[q.type]}
        </Tag>
        <Tag bgColor={TAG_COLORS[q.difficulty]}>{DIFFICULTY_KR[q.difficulty]}</Tag>
      </div>
    </section>
  );
};

const TAG_COLORS = {
  easy: blue['300'],
  medium: green['300'],
  hard: red['300'],
};

export default QuizContentInfo;
