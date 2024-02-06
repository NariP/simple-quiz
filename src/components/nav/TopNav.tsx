import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@/components/button';
import Portal from '@/components/portal';
import Text from '@/components/text';
import { gray, opacity } from '@/styles/colors';
import { HEIGHTS } from '@/styles/constants';
import { AiOutlineHome } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa';

interface TopNavProps {
  title?: string;
  showsLeft?: boolean;
  showsHome?: boolean;
}

const TopNav = ({ title, showsLeft = false, showsHome = false }: TopNavProps) => {
  const navigate = useNavigate();

  return (
    <Portal id="topNav">
      <header css={style}>
        <IconButton
          css={{ visibility: showsLeft ? 'visible' : 'hidden' }}
          type="button"
          onClick={() => navigate(-1)}
        >
          <FaChevronLeft />
        </IconButton>
        <div css={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Text variant="heading" size="xxsmall" as="h1">
            {title}
          </Text>
        </div>
        <IconButton
          css={{ visibility: showsHome ? 'visible' : 'hidden' }}
          type="button"
          onClick={() => navigate('/start')}
        >
          <AiOutlineHome size={20} />
        </IconButton>
      </header>
    </Portal>
  );
};

const style = css`
  background-color: ${opacity.white['100']};
  border-bottom: 1px solid ${gray['010']};
  height: ${HEIGHTS.topNav}px;
  display: flex;
  align-items: center;
`;
export default TopNav;
