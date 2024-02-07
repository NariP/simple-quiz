import { LocalStorage } from '../model';
import type { Question } from '@/apis/trivia';

const localStore = {
  wrongQuestions: new LocalStorage<Question[]>('wrongQuestions'),
} as const;

export default localStore;
