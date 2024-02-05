import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
      }),
      tsconfigPaths(),
    ],
    server: {
      port: 3000,
      /** 포트가 이미 사용 중일 때 다른 포트를 사용하게끔 설정 */
      strictPort: false,
      proxy: {
        '/api': {
          target: env.VITE_API_HOST,
          changeOrigin: true,
        },
      },
    },
  };
});
