import Vue from 'vue'
import App from './App'
import './assets/css/base.css'
import store from './store'

new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>'
});
