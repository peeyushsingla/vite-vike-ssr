import { ReactNode, StrictMode } from 'react';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';

function PageShell({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ReactNode;
}) {
  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </StrictMode>
  );
}

export default PageShell;
