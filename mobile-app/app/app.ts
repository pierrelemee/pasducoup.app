import Vue from 'nativescript-vue'
import WelcomePage from './pages/WelcomePage.vue'
import CreateChallengePage from './pages/CreateChallengePage.vue'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(WelcomePage)]),
}).$start()
