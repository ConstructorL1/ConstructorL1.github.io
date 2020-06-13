module.exports = {
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      config.node = {
        console: false,
        global: true,
        process: true,
        __filename: 'mock',
        __dirname: 'mock',
        Buffer: true,
        setImmediate: true
      };
    }
  },
  title: '2020年@通信与广电实务@一级建造师',
  description: '2020年@通信与广电实务@一级建造师',
  base: "",
  themeConfig: {
    search: false,
    nav: [
      { text: '高频考点', link:'/高频考点/'},
    ],
    sidebarDepth: 2,

    sidebar: {
      '/高频考点/': [{
        title: '',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '',
        ]
      }], 
    },
  }
}