import type { Config } from 'vike/types';

export default {
  clientRouting: true,
  hydrationCanBeAborted: true,
  meta: {
    title: {
      env: { server: true, client: true },
    },
    description: {
      env: { server: true, client: false },
    },
  },
  passToClient: ['pageProps', 'title', 'description', 'someAsyncProps'],
} satisfies Config;
