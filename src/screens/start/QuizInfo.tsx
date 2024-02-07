import { css } from '@emotion/react';
import { QuizLabelRadio } from '@/components/quiz';
import Tag from '@/components/tag';
import Text from '@/components/text';
import useTriviaStore from '@/stores/useTriviaStore';
import { gray, opacity, tokens } from '@/styles/colors';

const QuizInfo = () => {
  const difficulty = useTriviaStore(state => state.difficulty);
  const setQuizDifficulty = useTriviaStore(state => state.setQuizDifficulty);

  return (
    <section css={quizInfoStyle}>
      <Text variant="heading" size="xsmall" color={gray['050']} as="h2">
        퀴즈 정보
      </Text>
      <ul
        css={css`
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          width: 100%;
        `}
      >
        <Text
          variant="body"
          size="medium"
          color={gray['050']}
          as="li"
          css={css`
            display: inline-flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          `}
        >
          카테고리 <Tag>랜덤</Tag>
        </Text>
        <Text
          variant="body"
          size="medium"
          color={gray['050']}
          as="li"
          css={css`
            display: inline-flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          `}
        >
          문항 수
          <Text variant="caption" size="small" color={tokens.primary}>
            10개
          </Text>
        </Text>
        <li
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 8px;
            width: 100%;
          `}
        >
          <Text variant="body" size="medium" color={gray['050']}>
            난이도
          </Text>
          <div
            css={css`
              display: flex;
              width: 100%;
              gap: 4px;
            `}
          >
            <QuizLabelRadio
              label="쉬움"
              value={difficulty}
              inputProps={{
                id: 'easy',
                name: 'difficulty',
                value: 'easy',
                onChange: () => setQuizDifficulty('easy'),
              }}
            />
            <QuizLabelRadio
              label="보통"
              value={difficulty}
              inputProps={{
                id: 'medium',
                name: 'difficulty',
                value: 'medium',
                onChange: () => setQuizDifficulty('medium'),
              }}
            />
            <QuizLabelRadio
              label="어려움"
              value={difficulty}
              inputProps={{
                id: 'hard',
                name: 'difficulty',
                value: 'hard',
                onChange: () => setQuizDifficulty('hard'),
              }}
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

const quizInfoStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  background-color: ${opacity.white['100']};
  border: 1px solid ${gray['010']};
  border-radius: 4px;
`;

export default QuizInfo;
