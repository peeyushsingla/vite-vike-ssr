import { renderToString } from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import PageShell from './PageShell';
import { getPageTitle, getPageDescription } from './getPageSeoTags';
import type { PageContextServer } from './types';

async function onRenderHtml(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const title = getPageTitle(pageContext);
  const description = getPageDescription(pageContext);

  const pageHtml = renderToString(
        <PageShell pageContext={pageContext}>
          <Page {...pageProps} />
        </PageShell>
  );

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta name="description" content="${description}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="/assets/metycle_favicon.ico">
        <link rel="preload" href="/assets/fonts/ClashGrotesk-Variable.woff" as="font" type="font/woff" crossorigin="">
        <link rel="preload" href="/assets/fonts/ClashGrotesk-Variable.woff2" as="font" type="font/woff2" crossorigin="">
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
        <div id="portal-root"></div>
      </body>
    </html>`;

  return {
    documentHtml,
  };
}

export default onRenderHtml;
