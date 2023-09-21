import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteAliases({ useConfig: false, prefix: '@' }) as unknown as PluginOption],
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
    },
  },
  base: '/abcp/',
});
