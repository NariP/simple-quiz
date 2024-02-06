import { HEIGHTS } from '@/styles/constants';
import { a11yStyle } from '@/styles/utils';
import type { ReactNode } from 'react';

interface PageProps {
  hasTopNav?: boolean;
  hasCta?: boolean;
  /** 숨겨질 페이지 제목 */
  a11yText: string;
  children: ReactNode;
  className?: string;
}

const Page = ({ hasTopNav = false, hasCta = false, a11yText, children, className }: PageProps) => {
  return (
    <main
      id="page-root"
      className={className}
      css={{
        height: `calc(100% - ${hasCta ? HEIGHTS.cta : 0}px - ${hasTopNav ? HEIGHTS.topNav : 0}px)`,
        overflowY: 'scroll',
        padding: '20px 20px 40px',
      }}
    >
      <h1 css={a11yStyle}>{a11yText}</h1>
      {children}
    </main>
  );
};

export default Page;
