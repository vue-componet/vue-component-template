// 扩展 VuePress 应用  第三方应用级别配置

//vue代码高亮显示库 VueHighlightJS
import VueHighlightJS from 'vue-highlight.js';

//这里样式我选择的是atom-one-light；样式更多选择可以参见 https://highlightjs.org/static/demo/ 里的styles
//注意： 代码块的背景色 还是由官方设置的 $codeBgColor 决定的
import 'highlight.js/styles/atom-one-light.css';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS) // vue代码高亮组件
}