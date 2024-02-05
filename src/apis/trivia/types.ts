import { QUESTION_CATEGORIES, QUESTION_DIFFICULTIES, QUESTION_TYPES } from './constants';

export type CategoryName = keyof typeof QUESTION_CATEGORIES;
export type QuestionType = ValueOf<typeof QUESTION_TYPES>;
export type QuestionDifficultyType = ValueOf<typeof QUESTION_DIFFICULTIES>;

export interface Question {
  /** Q id */
  id: number;
  /** Q 카테고리 */
  category: CategoryName;
  /** Q 타입 */
  type: QuestionType;
  /** Q 난이도 */
  difficulty: QuestionDifficultyType;
  /** Q 질문 */
  question: string;
  /** Q 정답 */
  correctAnswer: string;
  /** Q 오답 */
  incorrectAnswers: string[];
  /** Q 문항들 */
  allAnswers: string[];
}
