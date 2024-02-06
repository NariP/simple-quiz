import { css } from '@emotion/react';
import Lottie from '@/components/lottie';
import { lottieCubeSrc } from '@/constants/lottie';

const PageLoader = () => {
  return (
    <div css={style}>
      <div css={lottieWrapperStyle}>
        <Lottie src={lottieCubeSrc} />
      </div>
    </div>
  );
};

const style = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const lottieWrapperStyle = css`
  background-color: rgba(256, 256, 256, 0.7);
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default PageLoader;
