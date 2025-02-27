import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
            '@components': path.resolve(__dirname, 'src/components')
        }
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './setupTests.ts',
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        transformMode: {
            web: [/\.[jt]sx$/]
        }
    }
});
