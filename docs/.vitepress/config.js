import { defineConfig } from "vitepress";

export default defineConfig({
  title: "chendashi",
  description: "123",
  lang: "zh-CN",

  themeConfig: {
    // logo: "/logo.svg",

    socialLinks: [
      // { icon: "twitter", link: "https://twitter.com/vite_js" },
      // { icon: "discord", link: "https://chat.vitejs.dev" },
      { icon: "github", link: "https://github.com/vitejs/vite" },
    ],

    // algolia: {
    //   appId: "BH4D9OD16A",
    //   apiKey: "b573aa848fd57fb47d693b531297403c",
    //   indexName: "vitejs",
    //   searchParameters: {
    //     facetFilters: ["tags:cn"],
    //   },
    // },

    // carbonAds: {
    //   code: "CEBIEK3N",
    //   placement: "vitejsdev",
    // },

    localeLinks: {
      text: "简体中文",
    },

    // footer: {
    //   message: "根据 MIT 许可证发布。",
    //   copyright: "Copyright © 2019-present Evan You & Vite Contributors",
    // },

    nav: [
      { text: "组件", link: "/myComponents/", activeMatch: "/myComponents/" },
      { text: "博客", link: "/blog/", activeMatch: "/blog/" },
      { text: "插件", link: "/plugins/", activeMatch: "/plugins/" },
      {
        text: "相关链接",
        items: [
          { text: "Team", link: "/team" },
          {
            text: "Twitter",
            link: "https://twitter.com/vite_js",
          },
          {
            text: "Discord Chat",
            link: "https://chat.vitejs.dev",
          },
          {
            text: "Awesome Vite",
            link: "https://github.com/vitejs/awesome-vite",
          },
          {
            text: "Dev.to 社区",
            link: "https://dev.to/t/vite",
          },
          {
            text: "Rollup 插件兼容",
            link: "https://vite-rollup-plugins.patak.dev/",
          },
          {
            text: "更新日志",
            link: "https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md",
          },
        ],
      },
      {
        text: "Version",
        items: [
          {
            text: "Vite v2 文档",
            link: "https://v2.vitejs.dev",
          },
        ],
      },
    ],

    sidebar: {
      "/myComponents/": [
        {
          text: "组件",
          items: [
            {
              text: "vue2-pro-table",
              link: "/myComponents/vue2-pro-table/index",
            },
          ],
        },
      ],
      "/blog/": [
        {
          text: "博客",
          items: [
            {
              text: "v-model",
              link: "/blog/v-model",
            },
          ],
        },
      ],
    },
  },
});
