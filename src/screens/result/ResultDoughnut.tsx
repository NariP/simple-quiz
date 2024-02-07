import { css } from '@emotion/react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import useQuizStore from '@/stores/useQuizStore';
import { blue, red } from '@/styles/colors';
import { shallow } from 'zustand/shallow';

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultDoughnut = () => {
  const { inCorrectAmount, correctAmount } = useQuizStore(
    state => ({
      inCorrectAmount: state.inCorrectAmount,
      correctAmount: state.correctAmount,
    }),
    shallow
  );

  const total = correctAmount + inCorrectAmount;

  return (
    <section
      css={css`
        width: 100%;
        height: fit-content;
        max-width: 300px;
      `}
    >
      <Doughnut
        width="100%"
        height="100%"
        options={{
          layout: {
            padding: 20,
          },
        }}
        data={{
          labels: ['정답', '오답'],
          datasets: [
            {
              data: [(correctAmount / total) * 100, (inCorrectAmount / total) * 100],
              backgroundColor: [blue['300'], red[300]],
              borderWidth: 2,
            },
          ],
        }}
      />
    </section>
  );
};

export default ResultDoughnut;
