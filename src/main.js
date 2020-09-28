import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';

Vue.prototype.$axios = axios;

Vue.use(Vant);


Vue.config.productionTip = false


import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Antd);



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
