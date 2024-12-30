import DefaultTheme from "vitepress/theme";
import SimpleMcq from "../components/SimpleMcq.vue";
// https://github.com/T-miracle/vitepress-plugin-comment-with-giscus
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { useData, useRoute } from "vitepress";
import { toRefs } from "vue";
// import { SearchPlugin } from "vitepress-plugin-search";

// custom CSS
import "../style/print.css";

// Configure the search plugin
// const searchOptions = {
//   tokenize: "full", // Enables full-text search
//   placeholder: "Search...", // Placeholder text for the search input
//   previewLength: 100, // Length of text preview in search results
// };

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Enhance the app with additional components or plugins
    DefaultTheme.enhanceApp({ app, router, siteData });

    // Register SimpleMcq globally
    app.component("SimpleMcq", SimpleMcq);

    // Add the Search Plugin
    // app.use(SearchPlugin(searchOptions));
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    // Configure and activate Giscus comments
    giscusTalk(
      {
        repo: "npnpatidar/rajasthan",
        repoId: "R_kgDOK1kuTQ",
        category: "General", // default: `General`
        categoryId: "DIC_kwDOK1kuTc4Cllwl",
        mapping: "pathname", // default: `pathname`
        inputPosition: "bottom", // default: `top`
        lang: "en-US", // `zh-CN` | `en-US` | `ja-JP` | ...
        locales: {
          "zh-CN": "zh-CN",
          "en-US": "en",
          "ja-JP": "ja",
        },
        strict: "0",
        reactionEnabled: "1",
        homePageShowComment: false, // Whether to display the comment area on the homepage
        lightTheme: "light", // default: `light`
        darkTheme: "transparent_dark", // default: `transparent_dark`
      },
      {
        frontmatter,
        route,
      },
      true, // Activate comments on all pages
    );
  },
};

