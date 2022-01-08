import Vue from "vue";
import { Layout, Row, Col, Card, Carousel, Button, Menu } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";

Vue.use(Layout);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Carousel);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

Vue.config.productionTip = false;
