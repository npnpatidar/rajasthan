---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Rajasthan"
  text: "पधारो म्हारे देस"
  tagline: A book of Rajasthan
  image:
    light: /rajasthan_no_background_light.svg
    dark: /rajasthan_no_background_dark.svg
    alt: Rajasthan Map
  actions:
    - theme: brand
      text: History
      link: /rajasthan/1_history/history_intro
    - theme: alt
      text: Culture
      link: /rajasthan/2_culture/culture_intro
    - theme: alt
      text: Geography
      link: /rajasthan/3_geography/geography_intro
    - theme: alt
      text: Polity
      link: /rajasthan/5_polity/polity_intro
    - theme: alt
      text: Economy
      link: /rajasthan/4_economy/economy_intro
    - theme: alt
      text: Current Affairs
      link: /rajasthan/6_current_affairs/current_affairs_today

features:
  - title: In-Depth Theory
    details: Detailed theory covering Rajasthan's history, culture, geography, polity, economy, and current affairs, designed for competitive exams.
  - title: Extensive MCQs
    details: A comprehensive collection of multiple-choice questions to practice and master Rajasthan's key topics for exams.
  - title: Open-Source and Collaborative
    details: Hosted on GitHub, enabling collaborative contributions from aspirants and educators to enrich the content.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #4565d8 40%, #41d1ff);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
