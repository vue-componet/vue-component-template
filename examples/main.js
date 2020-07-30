import Vue from 'vue'
import App from './App'
import './index.css'

import MyButton from '../lib/button.min.js'

Vue.use(MyButton)

// Vue.component(Button.name, Button)

new Vue({
	render: h => h(App)
}).$mount('#app')