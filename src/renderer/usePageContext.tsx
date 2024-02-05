import { createContext, useContext, ReactNode } from 'react';
import type { PageContext } from 'vike/types';

const Context = createContext<PageContext>({} as PageContext);

export function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ReactNode;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

export function usePageContext() {
  return useContext(Context);
}
