import { defineConfig, loadEnv } from 'vite';
import fetch from 'node-fetch';

function externalBodyPlugin(externalUrl) {
  return {
    name: 'external-body-plugin',
    transformIndexHtml: {
      order: 'pre',
      handler: async (html) => {
        const response = await fetch(externalUrl);
        const externalHtml = await response.text();
        const bodyContent = externalHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || '';
        return html.replace(
          /<body>[\s\S]*<\/body>/i,
          `<body>${bodyContent}</body>`
        );
      },
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      externalBodyPlugin(env.BIO_TOAST_URL || 'http://bio.toast.name/lightly-toasted'),
    ],
    server: {
      watch: {
        ignored: ['!**/node_modules/**'],
      },
    },
  }
})
