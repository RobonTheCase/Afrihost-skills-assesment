import Vue from "vue";
import AfriSkillsTest from "../src/Afri-skills-test.vue";
import TopBar from "../src/components/TopBar.vue";
import MobileNav from "../src/components/MobileNav.vue";
import SideNav from "../src/components/SideNav.vue";

Vue.component("afri-skills-test", AfriSkillsTest);
Vue.component("top-bar", TopBar);
Vue.component("mobile-nav", MobileNav);
Vue.component("side-nav", SideNav);

new Vue({
  el: "#app",
});
