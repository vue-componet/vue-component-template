import Vue from 'vue'
import App from './App'
import './index.css'

import MyButton from '@/index'

Vue.use(MyButton)

// Vue.component(MyButton.name, MyButton)

new Vue({
	render: h => h(App)
}).$mount('#app')