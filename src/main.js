import Vue from "vue";
import router from "@/router";
import Content from "@/index";
//import axios from 'axios' // import axios

//Vue.prototype.$axios = axios; // prototype에 axios 추가

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(Content),
}).$mount("#content");
