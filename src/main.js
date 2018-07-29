import Vue from 'vue'
import App from './App.vue'

import options from './VTolltipOptions'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip, options)

import './components/Popover/Popover.css'
import 'bootstrap/scss/bootstrap.scss'
// import 'nouislider/distribute/nouislider.min.css';
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/shards.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
