import { css } from '@emotion/react';
import { ZINDEX } from '@/styles/constants';
import type { ReactNode } from 'react';

interface BackdropProps {
  /** 다이얼로그 내 백드롭 클릭하여 닫기 함수 */
  onCloseBackdrop?: () => void;
  /** UI */
  children: ReactNode;
}
const Backdrop = ({ onCloseBackdrop, children, ...rest }: BackdropProps) => {
  return (
    <div css={style} onClick={onCloseBackdrop} {...rest}>
      {children}
    </div>
  );
};

const style = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${ZINDEX.backdrop};
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Backdrop;
