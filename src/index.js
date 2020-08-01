import ElButton from './button'

const install = function(Vue) {
  Vue.component(ElButton.name, ElButton)
}

ElButton.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default ElButton;