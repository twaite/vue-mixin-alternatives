import Vue from 'vue';
import { hooks } from 'vue-hooks';

import App from './app.vue';

Vue.use(hooks);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
