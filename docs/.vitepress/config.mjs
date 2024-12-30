import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Rajasthan",
  description: "A site for Rajasthan",
  themeConfig: {
    footer: {
      message:
        'Licensed under <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank">CC BY-SA 4.0</a>',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/npnpatidar" target="_blank">Naresh</a>',
    },
    logo: {
      light: "/rajasthan_no_background_light.svg",
      dark: "/rajasthan_no_background_dark.svg",
      // src: /rajasthan_map_dark.png
      alt: "Rajasthan Map",
    }, // Logo for dark mode
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: {
      "rajasthan/history": [
        {
          text: "History",
          items: [
            {
              text: "Introduction",
              link: "/rajasthan/history/history_intro.md",
            },
            {
              text: "1857 Revolution",
              link: "/rajasthan/history/1857_revolution.md",
            },
            {
              text: "Tribal Movements",
              link: "/rajasthan/history/tribals_movements.md",
            },
            {
              text: "Peasant Movements",
              link: "/rajasthan/history/peasant_movements.md",
            },
            {
              text: "Prajamandal Movements",
              link: "/rajasthan/history/prajamandal_movements.md",
            },
            {
              text: "Integration of Rajasthan",
              link: "/rajasthan/history/integration_of_rajasthan.md",
            },
          ],
          collapsed: false,
        },
      ],
      "rajasthan/geography": [
        {
          text: "Geography",
          items: [
            {
              text: "Introduction",
              link: "/rajasthan/geography/geography_intro.md",
            },
            {
              text: "Climate",
              link: "/rajasthan/geography/climate.md",
            },
            {
              text: "Vegetation",
              link: "/rajasthan/geography/vegetation.md",
            },
            {
              text: "Water Conservation",
              link: "/rajasthan/geography/water_conservation.md",
            },
          ],
          collapsed: false,
        },
      ],
      "rajasthan/economy": [
        {
          text: "Economy",
          items: [
            {
              text: "Introduction",
              link: "/rajasthan/economy/economy_intro.md",
            },
            {
              text: "Agriculture",
              link: "/rajasthan/economy/agriculture.md",
            },
            {
              text: "Agriculture Quiz",
              link: "/rajasthan/economy/agriculture_quiz.md",
            },
            {
              text: "Infrastructure",
              link: "/rajasthan/economy/infrastructure.md",
            },
            {
              text: "Industries Quiz",
              link: "/rajasthan/economy/industries_quiz.md",
            },
            {
              text: "Tourism Quiz",
              link: "/rajasthan/economy/tourism_quiz.md",
            },
          ],
          collapsed: false,
        },
      ],
      "rajasthan/polity/": [
        {
          text: "Polity",
          items: [
            {
              text: "Introduction",
              link: "/rajasthan/polity/polity_intro.md",
            },
            {
              text: "Governor",
              link: "/rajasthan/polity/governor.md",
            },
            {
              text: "Chief Minister",
              link: "/rajasthan/polity/chief_minister.md",
            },
            {
              text: "High Court",
              link: "/rajasthan/polity/high_court.md",
            },
            {
              text: "RPSC",
              link: "/rajasthan/polity/rpsc.md",
            },
          ],
          collapsed: false,
        },
      ],
      "rajasthan/current_affairs/": [
        {
          text: "Current Affairs",
          items: [
            {
              text: "Today",
              link: "/rajasthan/current_affairs/current_affairs_today.md",
            },
            {
              text: "Markdown Test",
              link: "/rajasthan/current_affairs/markdown_test.md",
            },
          ],
          collapsed: false,
        },
      ],
    },
    
    search: {
      provider: "local",
      options: {
        miniSearch: {
          fuzzy: 0.8,
          prefix: true,
          boost: { title: 4, text: 2, titles: 1 },
        },
      },
    },
    lastUpdated: true,
    editLink: {
      pattern: "https://github.com/npnpatidar/rajasthan/edit/main/docs/:path",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/npnpatidar/rajasthan" },
    ],
  },
  markdown: {
    math: true,
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    },
  },
});
