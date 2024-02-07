import { css } from '@emotion/react';
import { TopNav } from '@/components/nav';
import Page from '@/components/page';
import { Reviews } from '@/screens/reviewNote';

const ReviewNotePage = () => {
  return (
    <>
      <TopNav showsLeft showsHome title="오답 노트" />
      <Page hasTopNav css={pageStyle} a11yText="오답 노트">
        <Reviews />
      </Page>
    </>
  );
};

const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default ReviewNotePage;
