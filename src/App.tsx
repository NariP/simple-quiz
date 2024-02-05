import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { globalQueryClientConfig } from '@/libs/react-query';
import { reset } from '@/styles';

function App() {
  return (
    <>
      <Global styles={reset} />
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

const queryClient = new QueryClient(globalQueryClientConfig);

export default App;
