import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    plugins: [react()],
    build: {
      // ssr: true, // SSRビルドはコマンドライン引数で指定するため、ここではコメントアウトまたは削除
      outDir: 'dist/public', // クライアントビルドの出力先
      manifest: isBuild,     // ビルド時のみマニフェストを生成
      rollupOptions: {
        input: {
          client: './src/main.tsx' // クライアントのエントリーポイント名とパス
        }
      },
    },
  };
})
