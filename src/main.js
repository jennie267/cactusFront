/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  router.push("/");
  return Promise.reject(error);
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCmImc7Px7lp9hs-IvLYWHjSWLRlmS1qU8',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

Vue.use(ArgonDashboard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
