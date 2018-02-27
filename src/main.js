import Vue from 'vue'
import App from './App.vue'

window.lodash = require('lodash')

new Vue({
  el: '#app',
  render: h => h(App)
})
