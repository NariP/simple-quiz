import { Question } from '@/apis/trivia/types';
import axios from '@/libs/axios';

/** GET trivia 질문지 API */
export const getTriviaAPI = () => axios.get<unknown, Question[]>('/trivia');
