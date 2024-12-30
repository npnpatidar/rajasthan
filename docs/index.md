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
      link: /rajasthan/history/history_intro
    - theme: brand
      text: Culture
      link: /rajasthan/culture/culture_intro
    - theme: alt
      text: Geography
      link: /rajasthan/geography/geography_intro
    - theme: alt
      text: Polity
      link: /rajasthan/polity/polity_intro
    - theme: alt
      text: Economy
      link: /rajasthan/economy/economy_intro
    - theme: alt
      text: Current Affairs
      link: /rajasthan/current_affairs/current_affairs_today

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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