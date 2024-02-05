import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { globalQueryClientConfig } from '@/libs/react-query';
import router from '@/router';
import { reset } from '@/styles';

function App() {
  return (
    <>
      <Global styles={reset} />
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

const queryClient = new QueryClient(globalQueryClientConfig);

export default App;
