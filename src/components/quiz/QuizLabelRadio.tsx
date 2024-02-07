import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';
import Text from '@/components/text';
import { gray, green, opacity } from '@/styles/colors';
import { a11yStyle, getActiveAndHoverStyle } from '@/styles/utils';
import { BiCheckSquare, BiSolidCheckSquare } from 'react-icons/bi';

interface QuizLabelRadio extends ComponentPropsWithoutRef<'span'> {
  label: string;
  value: string;
  inputProps: ComponentPropsWithRef<'input'>;
}

const QuizLabelRadio = ({ label, value, inputProps, ...rest }: QuizLabelRadio) => {
  return (
    <label css={labelStyle} htmlFor={inputProps.id} {...rest}>
      {value === inputProps.value ? (
        <BiSolidCheckSquare
          css={css`
            fill: ${green['500']};
            width: 24px;
            height: 24px;
          `}
        />
      ) : (
        <BiCheckSquare
          css={css`
            fill: ${gray['050']};
            width: 24px;
            height: 24px;
          `}
        />
      )}
      <Text variant="caption" size="medium">
        {label}
      </Text>
      <input checked={value === inputProps.value} css={a11yStyle} type="radio" {...inputProps} />
    </label>
  );
};

const labelStyle = css`
  cursor: pointer;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 10px 8px;
  border: 1px solid ${gray['030']};
  border-radius: 8px;
  background-color: ${opacity.white['100']};

  ${getActiveAndHoverStyle({
    hoverStyles: css`
      transform: translateY(-1px);
      box-shadow: 4px 3px 4px -4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    `,
  })};
`;

export default QuizLabelRadio;
