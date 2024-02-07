import { css } from '@emotion/react';
import Text from '@/components/text';

interface QuizQuestionProps {
  step: number;
  question: string;
}

const QuizQuestion = ({ step, question }: QuizQuestionProps) => {
  return (
    <Text
      variant="heading"
      as="pre"
      size="xsmall"
      dangerouslySetInnerHTML={{ __html: `Q${step + 1}. ${question}` }}
      css={css`
        padding: 8px 0;
        white-space: pre-wrap;
        word-wrap: break-word;
      `}
    />
  );
};

export default QuizQuestion;
