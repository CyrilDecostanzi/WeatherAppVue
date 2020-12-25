import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Autocomplete from '@trevoreyre/autocomplete-vue'




Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Autocomplete)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@trevoreyre/autocomplete-vue/dist/style.css'


new Vue({
  render: h => h(App),
}).$mount('#app')
