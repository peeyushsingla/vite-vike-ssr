import { ReactElement } from 'react';
import type {
  PageContextBuiltInServer,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from 'vike/types';

type Page = (pageProps: PageProps) => ReactElement;
type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  config: {
    title: string;
    description?: string;
  };
  title: string;
  description?: string;
};

type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;
type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom;
type PageContext = PageContextClient | PageContextServer;
export type { PageContext, PageContextClient, PageContextServer, PageProps };
