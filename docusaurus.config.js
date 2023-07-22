// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aleksei Simonenko',
  tagline: 'Bridging the Gap: From Tech Talk to Simple Speak!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aleksimo.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/techwriter/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aleksimo', // Usually your GitHub org/user name.
  projectName: 'techwriter', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editCurrentVersion: false,
          showLastUpdateTime: true,
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@easyops-cn/docusaurus-search-local',
      ({
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: ["docs"],
        docsDir: ["docs"],
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      metadata: [{name: 'keywords', content: 'technical writer, documentation, portfolio, skills, software documentation, docs as code, static site generator, markdown, git,ux writing, product ownership'}],
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          config: {}
    },
      image: 'img/photos/DSCF7284.png',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Aleksei Simonenko | technical writer',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'cvSidebar',
            position: 'right',
            label: 'Work experience',
          },
          {
            docID: 'examples',
            position: 'right',
            sidebarId: 'Examples',
            label: 'Portfolio',
            to: '/examples'

          },
          {
            sidebarId: 'about',
            position: 'right',
            label: 'About me',
            to: '/docs/about-me/meohmy'
          },
          {
            position: 'right',
            label: 'Contacts',
            to: '/contacts'
          },
          {
            href: 'https://github.com/aleksimo/my-cv',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: 'md',
        plugins: ['line-numbers', 'show-language'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
