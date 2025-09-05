import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import d2 from "vitepress-plugin-d2";
import { Layout, Theme, FileType } from "vitepress-plugin-d2/dist/config";
import navbar from "./navbar.json";
import { RssPlugin } from "vitepress-plugin-rss";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  vite: {
    plugins: [
      RssPlugin({
        title: "RajEdu",
        description: "A site for Rajasthan",
        baseUrl: "https://rajedu.in",
        copyright: "Copyright (c) 2024-present Naresh Patidar",
        filename: "feed.rss",
        locales: {
          "current-affairs": {
            title: "Rajasthan Current Affairs",
            description: "Current Affairs for Rajasthan",
            baseUrl: "https://rajedu.in",
            copyright: "Copyright (c) 2024-present Naresh Patidar",
            filter: (post) =>
              post.regularPath.startsWith("rajasthan/6_current_affairs/"),
            filename: "current-affairs.rss",
          },
        },
      }),
    ],
  },
  title: "Rajasthan",
  description: "A site for Rajasthan",
  cleanUrls: true,
  ignoreDeadLinks: true,
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
      alt: "Rajasthan Map",
    },
    outline: {
      level: [2, 2], // show H2 and H3
      label: "On This Page", // optional custom label
    },
    nav: [{ text: "Home", link: "/" }],
    sidebar: navbar,
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
    config: (md) => {
      // Use D2 diagram plugin with optional configuration
      md.use(d2, {
        forceAppendix: false,
        layout: Layout.ELK,
        theme: Theme.NEUTRAL_DEFAULT,
        darkTheme: Theme.DARK_MUAVE,
        padding: 100,
        animatedInterval: 0,
        timeout: 120,
        sketch: false,
        center: false,
        scale: -1,
        target: "*",
        fontItalic: null,
        fontBold: null,
        fontSemiBold: null,
        fileType: FileType.SVG,
        directory: "d2-diagrams",
      });
    },
    math: true,
    image: {
      lazyLoading: true,
    },
  },
});
