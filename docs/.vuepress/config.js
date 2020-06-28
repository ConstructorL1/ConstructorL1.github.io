const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: '2020年@通信与广电实务@一级建造师',
  description: '2020年@通信与广电实务@一级建造师',
  head: headConf,
  plugins: pluginConf,

  themeConfig: {
    // refer: https://vuepress.vuejs.org/theme/default-theme-config.html
    repo: 'ConstructorL1/ConstructorL1.github.io',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'develop',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    
    nav: navConf,
  }
}