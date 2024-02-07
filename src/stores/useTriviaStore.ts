import { QUESTION_DIFFICULTIES } from '@/apis/trivia';
import { create } from 'zustand';

type State = {
  /** 난이도 */
  difficulty: ValueOf<typeof QUESTION_DIFFICULTIES>;
  /** 카테고리 */
  category: string;
  /** 문항 수 */
  amount: number;
};

type Actions = {
  reset: () => void;
  setQuizDifficulty: (difficulty: ValueOf<typeof QUESTION_DIFFICULTIES>) => void;
};

const initialStates: State = {
  difficulty: 'easy',
  category: '랜덤',
  amount: 10,
};

const useTriviaStore = create<State & Actions>(set => ({
  ...initialStates,
  reset: () => set(initialStates),
  setQuizDifficulty: difficulty => set(state => ({ ...state, difficulty })),
}));

export default useTriviaStore;
