import { css } from '@emotion/react';
import Text from '@/components/text';
import { opacity, tokens } from '@/styles/colors';
import type { ComponentPropsWithoutRef } from 'react';

interface TagProps extends ComponentPropsWithoutRef<'span'> {
  bgColor?: string;
  color?: string;
}

const Tag = ({
  bgColor = tokens.primary,
  color = opacity.white['100'],
  children,
  ...rest
}: TagProps) => {
  return (
    <Text
      css={style({ bgColor, color })}
      variant="caption"
      size="small"
      color={opacity.white[100]}
      as="span"
      {...rest}
    >
      {children}
    </Text>
  );
};

const style = ({ bgColor, color }: Required<Pick<TagProps, 'bgColor' | 'color'>>) => css`
  padding: 2px 4px;
  border-radius: 4px;
  background-color: ${bgColor};
  color: ${color};
`;

export default Tag;
