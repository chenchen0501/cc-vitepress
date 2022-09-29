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

    // localeLinks: {
    //   text: "简体中文",
    // },

    // footer: {
    //   message: "根据 MIT 许可证发布。",
    //   copyright: "Copyright © 2019-present Evan You & Vite Contributors",
    // },

    nav: [
      { text: "组件", link: "/myComponents/", activeMatch: "/myComponents/" },
      { text: "博客", link: "/blog/", activeMatch: "/blog/" },
      { text: "琐碎", link: "/records/", activeMatch: "/records/" },
      { text: "脚手架集", link: "/frames/", activeMatch: "/frames/" },
      { text: "工具箱", link: "/tools/", activeMatch: "/tools/" },
      // { text: "前端哲学", link: "/records/", activeMatch: "/records/" },
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
            {
              text: "localStorage",
              link: "/blog/localStorage",
            },
          ],
        },
      ],
      "/records/": [
        {
          text: "琐碎",
          items: [
            {
              text: "解决方案",
              link: "/records/解决方案",
            },
            {
              text: "概念",
              link: "/records/概念",
            },
          ],
        },
      ],
      "/frames/": [
        {
          text: "脚手架集",
          items: [
            {
              text: "vue3相关",
              link: "/frames/vue3",
            },
          ],
        },
      ],
      "/tools/": [
        {
          text: "工具箱",
          items: [
            {
              text: "useDocumentTitle",
              link: "/tools/useDocumentTitle",
            },
            {
              text: "前端导出",
              link: "/tools/前端导出",
            },
            {
              text: "类型检测",
              link: "/tools/类型检测",
            },
            {
              text: "v-permission",
              link: "/tools/v-permission",
            },
            {
              text: "v-loadmore",
              link: "/tools/v-loadmore",
            },
            {
              text: "axios拦截器",
              link: "/tools/axios拦截器",
            },
            {
              text: "日期转换",
              link: "/tools/日期转换",
            },
            {
              text: "localStorage",
              link: "/tools/localStorage",
            },
            {
              text: "文件下载",
              link: "/tools/文件下载",
            },
            {
              text: "jsconfig",
              link: "/tools/jsconfig",
            },
            {
              text: "图片压缩",
              link: "/tools/图片压缩",
            },
          ],
        },
      ],
    },
  },
});
