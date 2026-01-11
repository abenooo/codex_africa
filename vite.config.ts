import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Make generated CSS non-render-blocking by turning:
 *   <link rel="stylesheet" href="...">
 * into:
 *   <link rel="preload" as="style" href="..." onload="this.onload=null;this.rel='stylesheet'">
 * plus a <noscript> fallback.
 */
function nonBlockingCss(): Plugin {
  return {
    name: 'non-blocking-css',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      const isBuild = Boolean(ctx?.bundle);
      return html.replace(
        /<link[^>]*rel="stylesheet"[^>]*href="([^\"]+\.css)"[^>]*>/g,
        (_m, href) => {
          // The "media=print" swap pattern is treated as non-render-blocking by Lighthouse.
          const nonBlocking = `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'" />`;
          const noscript = isBuild ? `<noscript><link rel="stylesheet" href="${href}" /></noscript>` : '';
          return nonBlocking + noscript;
        }
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), nonBlockingCss()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});