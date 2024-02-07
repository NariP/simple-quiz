import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { css } from '@emotion/react';
import Text from '@/components/text';
import { gray, opacity } from '@/styles/colors';

interface BottomSheetUIProps {
  /** 제목 */
  title?: string;
  /** 설명 */
  description?: string;
  /** 버튼 정보 */
  children: ReactNode;
  titleProps?: Omit<ComponentPropsWithoutRef<typeof Text>, 'children'>;
  descriptionProps?: Omit<ComponentPropsWithoutRef<typeof Text>, 'children'>;
}

const BottomSheetUI = ({
  title,
  description,
  children,
  titleProps,
  descriptionProps,
  ...rest
}: BottomSheetUIProps) => {
  return (
    <div
      css={style}
      {...rest}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {title && (
        <Text css={titleStyle} variant="heading" size="small" as="p" {...titleProps}>
          {title}
        </Text>
      )}
      {description && (
        <Text
          variant="body"
          size="large"
          css={descStyle}
          color={gray['050']}
          as="p"
          {...descriptionProps}
        >
          {description}
        </Text>
      )}
      {children && <div css={buttonWrapperStyle}>{children}</div>}
    </div>
  );
};

const style = css`
  background-color: ${opacity.white['100']};
  border-radius: 16px 16px 0px 0px;
  overscroll-behavior: contain;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 10px;
`;

const titleStyle = css`
  padding: 10px 20px;
`;

const descStyle = css`
  padding: 8px 20px;
`;

const buttonWrapperStyle = css`
  padding: 10px 20px;
`;

export default BottomSheetUI;
