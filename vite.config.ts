import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env': env,
        },
        plugins: [
            react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
        ],
    };
});
