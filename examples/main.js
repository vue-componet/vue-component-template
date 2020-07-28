import Vue from 'vue'
import Hello from './hello'
import './index.css'

new Vue({
	render: h => h(Hello)
}).$mount('#app')