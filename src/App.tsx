import { reset } from '@/styles';
import { Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global styles={reset} />
      <div>app.tsx</div>
    </>
  );
}

export default App;
