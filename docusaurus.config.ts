import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

/**
 * Standalone Docusaurus site, deployed on its own Netlify site.
 * Netlify sets URL to the primary site address at build time.
 * Override with WIKI_SITE_URL if the canonical host should differ.
 */
const MAIN_SITE_URL = 'https://hackspace.flipper.net';
const SITE_URL = process.env.WIKI_SITE_URL ?? process.env.URL ?? 'http://localhost:3000';
const BASE_URL = '/';

const EDIT_URL =
  process.env.WIKI_EDIT_URL ??
  'https://github.com/ashelomentsev/flipperhackspacewiki/edit/main/';

const config: Config = {
  title: 'Flipper Hackspace Wiki',
  tagline: 'How the space works, what the tools do, and what you need to be signed off on.',
  favicon: 'img/favicon.png',

  url: SITE_URL,
  baseUrl: BASE_URL,

  organizationName: 'ashelomentsev',
  projectName: 'flipperhackspacewiki',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  // A dead link in a safety page is worse than a failed deploy, so the build fails on one.
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },

  i18n: { defaultLocale: 'en-GB', locales: ['en-GB'] },

  // Archivo + Martian Mono, same two faces as the landing page.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=Martian+Mono:wght@300..700&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          // Docs-only mode: the site root is the docs root.
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: EDIT_URL,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        pages: false,
        theme: { customCss: './src/css/custom.css' },
        sitemap: { changefreq: 'weekly', priority: 0.5 },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      // Offline search. Indexed at build time, no Algolia account, no keys,
      // nothing leaves the browser — which matters for a members-only wiki.
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
    image: 'img/og.jpg',
    navbar: {
      title: 'HACKSPACE WIKI',
      logo: { alt: 'Flipper Hackspace', src: 'img/mark.webp', href: '/' },
      items: [
        { type: 'docSidebar', sidebarId: 'wiki', position: 'left', label: 'Wiki' },
        { to: '/tools', label: 'Tools', position: 'left' },
        { to: '/safety', label: 'Safety', position: 'left' },
        { to: '/flipper', label: 'Flipper', position: 'left' },
        { href: 'https://t.me/flipper_hackbot', label: 'Telegram', position: 'right' },
        // Absolute, not `to:` — this leaves the Docusaurus app for the Astro site.
        { href: MAIN_SITE_URL, label: '← hackspace.flipper.net', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            { label: 'Start here', to: '/start-here' },
            { label: 'Tools & equipment', to: '/tools' },
            { label: 'Safety & inductions', to: '/safety' },
            { label: 'How we run', to: '/how-we-run' },
          ],
        },
        {
          title: 'The space',
          items: [
            { label: 'Location & access', to: '/the-space/location-and-access' },
            { label: 'Opening hours', to: '/the-space/opening-hours' },
            { label: 'Who to contact', to: '/the-space/who-to-contact' },
            { label: 'Events', to: '/events' },
          ],
        },
        {
          title: 'Elsewhere',
          items: [
            { label: 'hackspace.flipper.net', href: MAIN_SITE_URL },
            { label: 'flipper.net', href: 'https://flipper.net' },
            { label: 'Members’ Telegram', href: 'https://t.me/flipper_hackbot' },
            { label: 'Edit this wiki', to: '/contributing' },
          ],
        },
      ],
      copyright: `Flipper Technologies Ltd · 8 Soames Walk, London SE10 0AX · © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'ini', 'python', 'c'],
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
  } satisfies Preset.ThemeConfig,
};

export default config;
