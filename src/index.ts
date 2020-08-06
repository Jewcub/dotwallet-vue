import LoginButton from './LoginButton.vue';
import { VueConstructor } from 'vue';

export default function install(Vue: VueConstructor) {
  Vue.component('dotwallet-login', LoginButton);
}
