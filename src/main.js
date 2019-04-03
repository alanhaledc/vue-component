import Vue from 'vue'
import App from './App.vue'
import alert from './components/Alert/alert'

Vue.prototype.$Alert = alert

const vue = new Vue({
  el: '#app',
  render: h => h(App)
})

window.vue = vue
