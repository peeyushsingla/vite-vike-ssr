import { PageContext } from './types';

export function getPageTitle(pageContext: PageContext): string {
  return (
    pageContext.title ||
    pageContext.config.title ||
    'page title'
  );
}

export function getPageDescription(pageContext: PageContext): string {
  return (
    pageContext?.description ||
    pageContext.config?.description ||
    'page description'
  );
}
