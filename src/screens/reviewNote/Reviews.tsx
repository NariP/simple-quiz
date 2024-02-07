import { css } from '@emotion/react';
import { isEmpty } from 'lodash-es';
import { LinkButton } from '@/components/button';
import { QuizLabelRadio, QuizQuestion, QuizTag } from '@/components/quiz';
import Text from '@/components/text';
import { localStore } from '@/libs/browserStorage/store';
import { gray, opacity } from '@/styles/colors';

const Reviews = () => {
  const reviews = localStore.wrongQuestions.item || [];

  if (isEmpty(reviews)) {
    return (
      <>
        <Text
          as="p"
          variant="caption"
          size="medium"
          color={gray['050']}
          css={css`
            text-align: center;
            line-height: 1.2;
            padding-top: 60px;
          `}
        >
          오답 노트가 없어요 <br /> 아래 버튼을 클릭해 퀴즈를 시작해보아요!
        </Text>
        <LinkButton href="/start" color="primary">
          퀴즈 시작하기
        </LinkButton>
      </>
    );
  }

  return (
    <>
      {reviews.map((r, step) => (
        <section
          key={r.id}
          css={css`
            width: 100%;
            padding: 10px 10px 18px;
            border-radius: 8px;
            border: 1px solid ${gray['030']};
            background-color: ${opacity.white['100']};
          `}
        >
          <div
            css={css`
              display: inline-flex;
              gap: 4px;
            `}
          >
            <QuizTag label={r.category} />
            <QuizTag type="type" label={r.type} />
            <QuizTag type="difficulty" label={r.difficulty} />
          </div>
          <QuizQuestion step={step} question={r.question} />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 8px;
            `}
          >
            {r.allAnswers.map(a => (
              <QuizLabelRadio
                key={a}
                label={a}
                value={r.correctAnswer}
                aria-disabled={true}
                inputProps={{
                  id: a,
                  name: `quiz_${r.id}`,
                  value: a,
                  disabled: true,
                }}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Reviews;
