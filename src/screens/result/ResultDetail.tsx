import { css } from '@emotion/react';
import Text from '@/components/text';
import dayjs from '@/libs/dayjs';
import useQuizStore from '@/stores/useQuizStore';
import { gray, opacity } from '@/styles/colors';
import { shallow } from 'zustand/shallow';

const ResultDetail = () => {
  const { startDate, endDate, inCorrectAmount, correctAmount } = useQuizStore(
    state => ({
      startDate: state.startDate,
      endDate: state.endDate,
      inCorrectAmount: state.inCorrectAmount,
      correctAmount: state.correctAmount,
    }),
    shallow
  );

  const playTime = dayjs(endDate?.diff(startDate)).format('mm:ss');
  const total = correctAmount + inCorrectAmount;

  return (
    <section css={style}>
      <span>
        <Text variant="heading" size="small" color={gray['050']}>
          플레이 타임
        </Text>
        <Text
          variant="heading"
          size="small"
          css={css`
            margin-left: 4px;
          `}
        >
          {playTime}
        </Text>
      </span>

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
        축하합니다!
        <br />
        퀴즈를 끝까지 푸셨군요! <br />
        이제 결과를 확인해주세요
      </Text>
      <div css={amountStyle}>
        <div css={amountLabelStyle}>
          <Text
            variant="heading"
            size="xxsmall"
            css={css`
              border-bottom: 1px solid ${gray['010']};
            `}
          >
            정답 개수
          </Text>
          <Text variant="body" size="small" color={gray['050']}>
            {correctAmount} 개
          </Text>
        </div>
        <div css={amountLabelStyle}>
          <Text
            variant="heading"
            size="xxsmall"
            css={css`
              border-bottom: 1px solid ${gray['010']};
            `}
          >
            오답 개수
          </Text>
          <Text variant="body" size="small" color={gray['050']}>
            {inCorrectAmount} 개
          </Text>
        </div>
        <div css={amountLabelStyle}>
          <Text
            variant="heading"
            size="xxsmall"
            css={css`
              border-bottom: 1px solid ${gray['010']};
            `}
          >
            총 개수
          </Text>
          <Text variant="body" size="small" color={gray['050']}>
            {total} 개
          </Text>
        </div>
      </div>
    </section>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const amountStyle = css`
  display: flex;
  gap: 8px;
`;

const amountLabelStyle = css`
  background-color: ${opacity.white['100']};
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${gray['020']};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;

export default ResultDetail;
