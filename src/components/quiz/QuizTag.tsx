import Tag from '@/components/tag';
import { DIFFICULTY_KR, TYPE_KR } from '@/constants/trivia';
import { blue, gray, green, red } from '@/styles/colors';

interface QuizTagProps {
  type?: 'category' | 'type' | 'difficulty';
  label: keyof typeof TYPE_KR | keyof typeof DIFFICULTY_KR | string;
}

const QuizTag = ({ type = 'category', label }: QuizTagProps) => {
  if (type === 'difficulty') {
    return (
      <Tag bgColor={TAG_COLORS[label as keyof typeof DIFFICULTY_KR]}>
        {DIFFICULTY_KR[label as keyof typeof DIFFICULTY_KR]}
      </Tag>
    );
  }

  if (type === 'type') {
    return (
      <Tag bgColor={gray['020']} color={gray['050']}>
        {TYPE_KR[label as keyof typeof TYPE_KR]}
      </Tag>
    );
  }
  return <Tag>{label}</Tag>;
};

const TAG_COLORS = {
  easy: blue['300'],
  medium: green['300'],
  hard: red['300'],
};

export default QuizTag;
