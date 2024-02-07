import { create } from 'zustand';
import type { Dayjs } from 'dayjs';

type State = {
  /** 퀴즈 시작 시간 */
  startDate: Dayjs | undefined;
  /** 퀴즈 종료 시간 */
  endDate: Dayjs | undefined;
};

type Actions = {
  reset: () => void;
  setDate: (type: 'start' | 'end', date: Dayjs) => void;
};

const initialStates: State = {
  startDate: undefined,
  endDate: undefined,
};

const useQuizStore = create<State & Actions>(set => ({
  ...initialStates,
  reset: () => set(initialStates),
  setDate: (type, date) => set(state => ({ ...state, [`${type}Date`]: date })),
}));

export default useQuizStore;
