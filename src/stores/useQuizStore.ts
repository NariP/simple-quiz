import { create } from 'zustand';
import type { Dayjs } from 'dayjs';

type State = {
  /** 퀴즈 시작 시간 */
  startDate: Dayjs | undefined;
  /** 퀴즈 종료 시간 */
  endDate: Dayjs | undefined;
  /** 정답 갯수 */
  correctAmount: number;
  /** 오답 갯수 */
  inCorrectAmount: number;
};

type Actions = {
  reset: () => void;
  setDate: (type: 'start' | 'end', date: Dayjs) => void;
  setAmount: (correctAmount: number, inCorrectAmount: number) => void;
};

const initialStates: State = {
  startDate: undefined,
  endDate: undefined,
  correctAmount: 0,
  inCorrectAmount: 0,
};

const useQuizStore = create<State & Actions>(set => ({
  ...initialStates,
  reset: () => set(initialStates),
  setDate: (type, date) => set(state => ({ ...state, [`${type}Date`]: date })),
  setAmount: (correctAmount, inCorrectAmount) =>
    set(state => ({ ...state, correctAmount, inCorrectAmount })),
}));

export default useQuizStore;
