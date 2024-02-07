import axios from '@/libs/axios';
import type { Question, QuestionDifficultyType } from '@/apis/trivia/types';

/** GET trivia 질문지 API */
export const getTriviaAPI = (params: { difficulty: QuestionDifficultyType }) =>
  axios.get<unknown, Question[]>('/trivia', { params });
