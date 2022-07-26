import { defineConfig } from "vitepress";

export default defineConfig({
  title: "陈大事的开发日记",
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
      { text: "琐碎", link: "/records/", activeMatch: "/records/" },
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
            {
              text: "el-vue-tree-select",
              link: "/myComponents/el-vue-tree-select/index",
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
      "/records/": [
        {
          text: "琐碎",
          items: [
            {
              // text: "v-model",
              link: "/records/",
            },
          ],
        },
      ],
    },
  },
});
