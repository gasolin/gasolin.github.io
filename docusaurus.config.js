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
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
          alt: 'gasolin',
          src: 'img/gasolin.jpeg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            href: 'https://blog.gasolin.idv.tw',
            label: 'Blog',
            position: 'left'},
          {
            href: 'https://github.com/gasolin',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
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
