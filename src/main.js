import Vue from 'vue'
import App from './App.vue'

const vue = new Vue({
  el: '#app',
  render: h => h(App)
})

window.vue = vue