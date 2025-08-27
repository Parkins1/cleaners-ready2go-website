export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  /**
   * When true, renders robots noindex meta tags:
   * <meta name="robots" content="noindex, nofollow" />
   * <meta name="googlebot" content="noindex, nofollow" />
   * Defaults to undefined (no robots meta rendered).
   */
  noindex?: boolean;
}