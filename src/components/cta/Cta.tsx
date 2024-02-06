import { css } from '@emotion/react';
import Portal from '@/components/portal';
import { gray, opacity } from '@/styles/colors';
import { HEIGHTS } from '@/styles/constants';
import type { ReactNode } from 'react';

interface CtaProps {
  children: ReactNode;
}

const Cta = ({ children }: CtaProps) => {
  return (
    <Portal id="cta">
      <div css={style}>{children}</div>
    </Portal>
  );
};

const style = css`
  padding: 0 10px;
  background-color: ${opacity.white['100']};
  border-top: 1px solid ${gray['010']};
  height: ${HEIGHTS.cta}px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default Cta;
