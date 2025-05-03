import { defineConfig } from "vitepress";
import navbar from "./navbar.json";

// Simplified config for PDF export
export default defineConfig({
  title: "Rajasthan",
  description: "A site for Rajasthan",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: navbar,
  }
});