import { createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from '@/components/errors';
import {
  NotFoundPage,
  QuizPage,
  ResultPage,
  ReviewNotePage,
  RootElement,
  StartPage,
} from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'start',
        element: <StartPage />,
      },
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      {
        path: 'result',
        element: <ResultPage />,
      },
      {
        path: 'review-note',
        element: <ReviewNotePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
