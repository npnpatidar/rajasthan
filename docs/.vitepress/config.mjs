import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import d2 from "vitepress-plugin-d2";
import { Layout, Theme, FileType } from "vitepress-plugin-d2/dist/config";

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
      alt: "Rajasthan Map",
    },
    nav: [{ text: "Home", link: "/" }],
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
              text: "Sources of History",
              link: "/rajasthan/history/source_of_history.md",
            },
            {
              text: "Pre and Proto-Historic Age",
              link: "/rajasthan/history/pre_and_proto_historic_age.md",
            },
            {
              text: "Early History of Rajasthan",
              link: "/rajasthan/history/early_history_of_rajasthan.md",
            },
            {
              text: "Gurjar Pratihar History",
              link: "/rajasthan/history/gurjar_pratihar_history.md",
            },
            {
              text: "Parmara History",
              link: "/rajasthan/history/parmara_history.md",
            },
            {
              text: "Chauhans History",
              link: "/rajasthan/history/chauhans_history.md",
            },
            {
              text: "Mewar History",
              link: "/rajasthan/history/mewar_history.md",
            },
            {
              text: "Jaipur History",
              link: "/rajasthan/history/jaipur_history.md",
            },
            {
              text: "Jodhpur History",
              link: "/rajasthan/history/jodhpur_history.md",
            },
            {
              text: "Jaisalmer History",
              link: "/rajasthan/history/jaisalmer_history.md",
            },
            {
              text: "Karauli History",
              link: "/rajasthan/history/karauli_history.md",
            },
            {
              text: "Bharatpur History",
              link: "/rajasthan/history/bharatpur_history.md",
            },
            {
              text: "1857 Revolution",
              link: "/rajasthan/history/1857_revolution.md",
            },
            {
              text: "Peasant Movements",
              link: "/rajasthan/history/peasant_movements.md",
            },
            {
              text: "Tribals Movements",
              link: "/rajasthan/history/tribals_movements.md",
            },
            {
              text: "Political Awakening",
              link: "/rajasthan/history/political_awakening.md",
            },
            {
              text: "Prajamandal Movements",
              link: "/rajasthan/history/prajamandal_movements.md",
            },
            {
              text: "Freedom Fighters",
              link: "/rajasthan/history/freedom_fighters.md",
            },
            {
              text: "British Occupations",
              link: "/rajasthan/history/british_occupations.md",
            },
            {
              text: "Administration and Revenue System",
              link: "/rajasthan/history/administration_and_revenue_system.md",
            },
            {
              text: "Integration of Rajasthan",
              link: "/rajasthan/history/integration_of_rajasthan.md",
            },
          ],
          collapsed: false,
        },
      ],
      "rajasthan/culture": [
        {
          text: "Culture",
          items: [
            {
              text: "Introduction",
              link: "/rajasthan/culture/culture_intro.md",
            },
            {
              text: "Language and Dialects",
              link: "/rajasthan/culture/language_and_dialects.md",
            },
            { text: "Literature", link: "/rajasthan/culture/literature.md" },
            { text: "Costumes", link: "/rajasthan/culture/costumes.md" },
            { text: "Ornaments", link: "/rajasthan/culture/ornaments.md" },
            { text: "Paintings", link: "/rajasthan/culture/paintings.md" },
            { text: "Handicrafts", link: "/rajasthan/culture/handicrafts.md" },
            {
              text: "Customs and Practices",
              link: "/rajasthan/culture/customs_and_practices.md",
            },
            { text: "Fairs", link: "/rajasthan/culture/fairs.md" },
            { text: "Festivals", link: "/rajasthan/culture/festivals.md" },
            { text: "Folk Dance", link: "/rajasthan/culture/folk_dance.md" },
            { text: "Folk Song", link: "/rajasthan/culture/folk_song.md" },
            {
              text: "Folk Theater",
              link: "/rajasthan/culture/folk_theater.md",
            },
            { text: "Lok Devta", link: "/rajasthan/culture/lok_devta.md" },
            { text: "Lok Devia", link: "/rajasthan/culture/lok_devia.md" },
            { text: "Saints", link: "/rajasthan/culture/saints.md" },
            { text: "Forts", link: "/rajasthan/culture/forts.md" },
            { text: "Palaces", link: "/rajasthan/culture/palaces.md" },
            { text: "Havelis", link: "/rajasthan/culture/havelis.md" },
            { text: "Temples", link: "/rajasthan/culture/temples.md" },
            { text: "Tombs", link: "/rajasthan/culture/tombs.md" },
            { text: "Pillars", link: "/rajasthan/culture/pillars.md" },
            { text: "Stepwell", link: "/rajasthan/culture/stepwell.md" },
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
              text: "Political Division",
              link: "/rajasthan/geography/political_division.md",
            },
            {
              text: "Geographical Division",
              link: "/rajasthan/geography/geographical_division.md",
            },
            {
              text: "Physical Features",
              link: "/rajasthan/geography/physical_features.md",
            },
            { text: "Climate", link: "/rajasthan/geography/climate.md" },
            { text: "Rivers", link: "/rajasthan/geography/rivers.md" },
            { text: "Lakes", link: "/rajasthan/geography/lakes.md" },
            { text: "Soils", link: "/rajasthan/geography/soils.md" },
            { text: "Vegetation", link: "/rajasthan/geography/vegetation.md" },
            {
              text: "Wildlife and Biodiversity",
              link: "/rajasthan/geography/wildlife_and_biodiversity.md",
            },
            {
              text: "Water Conservation",
              link: "/rajasthan/geography/water_conservation.md",
            },
            {
              text: "Agriculture",
              link: "/rajasthan/geography/agriculture.md",
            },
            { text: "Irrigation", link: "/rajasthan/geography/irrigation.md" },
            { text: "Livestock", link: "/rajasthan/geography/livestock.md" },
            { text: "Minerals", link: "/rajasthan/geography/minerals.md" },
            {
              text: "Energy Sources",
              link: "/rajasthan/geography/energy_sources.md",
            },
            { text: "Industries", link: "/rajasthan/geography/industries.md" },
            { text: "Tourism", link: "/rajasthan/geography/tourism.md" },
            { text: "Population", link: "/rajasthan/geography/population.md" },
            { text: "Tribes", link: "/rajasthan/geography/tribes.md" },
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
              text: "Macro View of Economy",
              link: "/rajasthan/economy/macro_view_of_economy.md",
            },
            { text: "Agriculture", link: "/rajasthan/economy/agriculture.md" },
            {
              text: "Agriculture Quiz",
              link: "/rajasthan/economy/agriculture_quiz.md",
            },
            {
              text: "Industries Quiz",
              link: "/rajasthan/economy/industries_quiz.md",
            },
            {
              text: "Infrastructure",
              link: "/rajasthan/economy/infrastructure.md",
            },
            { text: "Transport", link: "/rajasthan/economy/transport.md" },
            { text: "Tourism", link: "/rajasthan/economy/tourism.md" },
            {
              text: "Tourism Quiz",
              link: "/rajasthan/economy/tourism_quiz.md",
            },
            {
              text: "Poverty and Unemployment",
              link: "/rajasthan/economy/poverty_and_unemployment.md",
            },
            {
              text: "Rural Development",
              link: "/rajasthan/economy/rural_development.md",
            },
            {
              text: "Urban Development",
              link: "/rajasthan/economy/urban_development.md",
            },
            {
              text: "State Budget",
              link: "/rajasthan/economy/state_budget.md",
            },
            {
              text: "Public Private Partnership",
              link: "/rajasthan/economy/public_private_partnership.md",
            },
            {
              text: "Sustainable Development",
              link: "/rajasthan/economy/sustainable_development.md",
            },
            {
              text: "Welfare Schemes",
              link: "/rajasthan/economy/welfare_schemes.md",
            },
          ],
          collapsed: false,
        },
      ],
      "rajasthan/polity/": [
        {
          text: "Polity",
          items: [
            { text: "Introduction", link: "/rajasthan/polity/polity_intro.md" },
            { text: "Index", link: "/rajasthan/polity/index.md" },
            { text: "Governor", link: "/rajasthan/polity/governor.md" },
            {
              text: "Chief Minister",
              link: "/rajasthan/polity/chief_minister.md",
            },
            {
              text: "Council of Ministers",
              link: "/rajasthan/polity/council_of_ministers.md",
            },
            {
              text: "State Legislature",
              link: "/rajasthan/polity/state_legislature.md",
            },
            {
              text: "District Administration",
              link: "/rajasthan/polity/district_administration.md",
            },
            {
              text: "Rajasthan Secretary and Secretariate",
              link: "/rajasthan/polity/rajasthan_secretary_and_secretariate.md",
            },
            {
              text: "Local Self Government",
              link: "/rajasthan/polity/local_self_government.md",
            },
            { text: "High Court", link: "/rajasthan/polity/high_court.md" },
            {
              text: "Rajasthan Public Service Commission",
              link: "/rajasthan/polity/rajasthan_public_service_commission.md",
            },
            {
              text: "Rajasthan State Election Commission",
              link: "/rajasthan/polity/rajasthan_state_election_commission.md",
            },
            {
              text: "Rajasthan State Finance Commission",
              link: "/rajasthan/polity/rajasthan_state_finance_commission.md",
            },
            {
              text: "Rajasthan State Information Commission",
              link: "/rajasthan/polity/rajasthan_state_information_commission.md",
            },
            {
              text: "Rajasthan State Women Commission",
              link: "/rajasthan/polity/rajasthan_state_women_commission.md",
            },
            {
              text: "Rajasthan State Commission for Protection of Child Rights",
              link: "/rajasthan/polity/rajasthan_state_commissino_for_protection_of_child_rights.md",
            },
            {
              text: "Rajasthan Human Rights Commission",
              link: "/rajasthan/polity/rajasthan_human_right_commission.md",
            },
            {
              text: "Rajasthan Lokayukta",
              link: "/rajasthan/polity/rajasthan_lokayukta.md",
            },
            {
              text: "Rajasthan Public Service Guarantee Act",
              link: "/rajasthan/polity/rajasthan_public_service_guarantee_act.md",
            },
            {
              text: "Rajasthan Right to Public Hearing Act",
              link: "/rajasthan/polity/rajasthan_right_to_public_hearing_act.md",
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
