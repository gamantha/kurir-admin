// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import DataTables from 'vue-data-tables';
import Notifications from 'vue-notification';
import store from './store';
import App from './App';
import router from './router';

locale.use(lang);
Vue.use(ElementUI);
Vue.use(DataTables);
Vue.use(SuiVue);
Vue.use(Notifications);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
