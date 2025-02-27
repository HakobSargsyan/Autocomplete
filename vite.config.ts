import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
});
