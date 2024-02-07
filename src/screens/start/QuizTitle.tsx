import { css } from '@emotion/react';
import Text from '@/components/text';
import { gray, tokens } from '@/styles/colors';
import { GiCyborgFace } from 'react-icons/gi';

const QuizTitle = () => {
  return (
    <>
      <Text
        variant="heading"
        size="large"
        color={tokens.primary}
        as="strong"
        css={css`
          display: inline-block;
          width: fit-content;
        `}
      >
        퀴즈 시작하기
      </Text>
      <GiCyborgFace
        css={css`
          display: block;
          width: 100px;
          height: 100px;
          fill: ${tokens.primary};
        `}
      />
      <Text
        variant="caption"
        size="small"
        color={gray['050']}
        as="p"
        css={css`
          width: 100%;
          background-color: ${gray['010']};
          padding: 8px 16px;
          border-radius: 4px;
          text-align: center;
        `}
      >
        중간에 나가면 저장이 되지 않아요! <br />
        끝까지 인내심을 가지고 풀어주세요ㅎ
      </Text>
    </>
  );
};

export default QuizTitle;
