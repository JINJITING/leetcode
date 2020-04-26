const path = require('path');

module.exports = {
  base: '/leetcode/',
  title: 'LeetCode 题解',
  description: 'JINJITING 的 LeetCode 题解。',
  host: '0.0.0.0',
  port: 8886,
  configureWebpack: {
    resolve: {}
  },
  dest: 'dist',
  themeConfig: {
    sidebar: {
      '/array/': [],
    },
    lastUpdated: '最后更新',
  },

  markdown: {
    lineNumbers: true // boolean => 在每个代码块的左侧显示行号
  },
}
