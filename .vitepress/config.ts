import { defineConfig } from 'vitepress'
// @ts-ignore
import taskLists from 'markdown-it-task-lists'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(taskLists)
      md.use(mathjax3)
    }
  },

  title: 'Unciv中文社区',
  description: 'Unciv Chinese Community - 开源策略游戏的中文社区',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/Unciv.ico' }],
    ['meta', { name: 'theme-color', content: '#d98c3a' }],
  ],

  themeConfig: {
    logo: '/Unciv.ico',

    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/原版专区/Unciv基础术语/' },
      { text: '更新日志', link: '/更新日志/' },
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: '首页', link: '/' }
        ]
      },
      {
        text: '原版专区',
        collapsed: true,
        items: [
          { text: '基础术语', link: '/原版专区/Unciv基础术语/' },
          { text: '入门指南', link: '/原版专区/众神与国王入门指南/' },
          { text: '自主左二前应该做什么', link: '/原版专区/自主左二前应该做什么/' },
          { text: 'Unciv鳇脯菌校：全局篇', link: '/原版专区/Unciv鳇脯菌校/' },
          { text: '联机教程', link: '/原版专区/联机教程/' }
        ]
      },
      {
        text: '更新日志',
        collapsed: false,
        items: [
          { text: '总览', link: '/更新日志/' },
          { text: 'Unciv 原版', link: '/更新日志/Unciv原版/' },
          {
            text: 'UncivCN',
            collapsed: false,
            items: [
              { text: '更新日志', link: '/更新日志/UncivCN/' },
              { text: '轮询联机', link: '/更新日志/UncivCN/轮询联机' }
            ]
          }
        ]
      },
      {
        text: '模组专区',
        collapsed: true,
        items: [
          {
            text: 'CoeHarMod',
            collapsed: true,
            items: [
              { text: '模组介绍', link: '/模组专区/CoeHarMod/' },
              { text: '更新日志', link: '/模组专区/CoeHarMod/更新日志/' },
              { text: '更新计划', link: '/模组专区/CoeHarMod/更新日志/更新计划/' }
            ]
          },
          {
            text: 'Emperors and Deities',
            collapsed: true,
            items: [
              { text: '模组介绍', link: '/模组专区/Emperors and Deities/' },
            ]
          },
        ]
      },
      {
        text: '开发者专区',
        collapsed: true,
        items: [
          {
            text: '模组开发',
            collapsed: true,
            items: [
              { text: '模组总览', link: '/开发者专区/模组开发/模组' },
              {
                text: '模组文件结构',
                collapsed: true,
                items: [
                  { text: '概述', link: '/开发者专区/模组开发/模组文件结构/概述' },
                  { text: '文明相关 JSON 文件', link: '/开发者专区/模组开发/模组文件结构/文明相关JSON文件' },
                  { text: '地图相关 JSON 文件', link: '/开发者专区/模组开发/模组文件结构/地图相关JSON文件' },
                  { text: '单位相关 JSON 文件', link: '/开发者专区/模组开发/模组文件结构/单位相关JSON文件' },
                  { text: '其他 JSON 文件', link: '/开发者专区/模组开发/模组文件结构/其他JSON文件' }
                ]
              },
              { text: '创建新文明', link: '/开发者专区/模组开发/创建新文明' },
              { text: '图像和音频资源', link: '/开发者专区/模组开发/图像和音频资源' },
              { text: '自定义地形集', link: '/开发者专区/模组开发/自定义地形集' },
              { text: '创建 UI 皮肤', link: '/开发者专区/模组开发/创建UI皮肤' },
              { text: '场景制作', link: '/开发者专区/模组开发/场景制作' },
              { text: 'Unique 参数详解', link: '/开发者专区/模组开发/Unique参数详解' },
              { text: 'Unique 能力列表', link: '/开发者专区/模组开发/Unique能力列表' },
              { text: '类型检查', link: '/开发者专区/模组开发/类型检查' },
              { text: '自动更新指南', link: '/开发者专区/模组开发/自动更新指南' },
              { text: 'UncivCN MergeAction 教程', link: '/开发者专区/模组开发/UncivCN扩展JSON-MergeAction教程' }
            ]
          },
          {
            text: '翻译本地化',
            collapsed: true,
            items: [
              { text: '翻译指南', link: '/开发者专区/翻译本地化/翻译指南/' },
              { text: '翻译生成', link: '/开发者专区/翻译本地化/翻译生成/' },
              { text: '模组翻译', link: '/开发者专区/翻译本地化/模组翻译/' }
            ]
          },
          {
            text: '代码贡献',
            collapsed: true,
            items: [
              { text: '项目结构', link: '/开发者专区/代码贡献/项目结构/' },
              { text: '代码标准', link: '/开发者专区/代码贡献/代码标准/' },
              { text: '构建和部署', link: '/开发者专区/代码贡献/构建和部署/' },
              { text: 'UI 开发', link: '/开发者专区/代码贡献/UI 开发/' },
              { text: 'Uniques 机制', link: '/开发者专区/代码贡献/Uniques 机制/' }
            ]
          },
          {
            text: '源码分析',
            collapsed: true,
            items: [
              { text: '军事实力计算方式', link: '/开发者专区/源码分析/军事实力计算方式/' },
              { text: '文明积分计算', link: '/开发者专区/源码分析/文明积分计算/' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AutumnPizazz/unciv-chinese-community' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    editLink: {
      pattern: 'https://github.com/AutumnPizazz/unciv-chinese-community/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})
