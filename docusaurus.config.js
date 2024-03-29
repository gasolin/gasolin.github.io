// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'gasolin',
  tagline: 'The Web3 Engineer and Tech writer',
  url: 'https://www.gasolin.idv.tw',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gasolin', // Usually your GitHub org/user name.
  projectName: 'gasolin.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gasolin/gasolin.github.io/tree/source/docs',
          remarkPlugins: [
            [
              require('remark-emoji'), {padSpaceAfter: true}],
              require('mdx-mermaid'), // charts
              require('remark-pangu'), // chinese/english space
              require('remark-oembed'), // youtube, twitter
          ],
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-2833924-5',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'gasolin',
        logo: {
          alt: 'my back portrait drawed with flash',
          src: 'img/gasolin.jpeg',
        },
        items: [
          {
            href: 'https://blog.gasolin.idv.tw/',
            label: 'Blog',
            position: 'left'
          },
          {
            label: 'Resume',
            to: '/resume',
            position: 'left'
          },
          {
            to: '/docs/projects/project',
            position: 'left',
            label: 'Projects',
          },
          {
            to: '/docs/events/presentation',
            position: 'left',
            label: 'Events',
          },
          {
            href: 'https://github.com/gasolin/gasolin.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Articles',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.gasolin.idv.tw',
              },
              {
                label: 'DApp入門',
                href: 'http://gasolin.idv.tw/learndapp/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/gasolin',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gasolin',
              },
              {
                label: 'Stack Overflow',
                href: 'http://stackoverflow.com/users/669084/gasolin',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/fredglin/',
              },
            ],
          },
        ],
        copyright: `Copyright © 2009~${new Date().getFullYear()} gasolin`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
