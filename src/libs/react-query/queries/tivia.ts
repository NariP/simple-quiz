import { getTriviaAPI } from '@/apis/trivia';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import type { QuestionDifficultyType } from '@/apis/trivia';

export const trivia = createQueryKeys('trivia', {
  quizList: (params: { difficulty: QuestionDifficultyType }) => ({
    queryKey: [params],
    queryFn: () => getTriviaAPI(params),
  }),
});
