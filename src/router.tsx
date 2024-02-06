import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from '@/components/errors';
import { NotFoundPage, QuizPage, ReviewNotePage, StartPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
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
