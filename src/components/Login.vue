<template>
  <div @click="openLink()" class="dot-wallet-login-wrapper">
    <slot>
      <img
        :class="[
          customClass ? customClass : 'dot-wallet-login-button',
          customActiveClass ? customActiveClass : 'dot-wallet-login-active',
          customHoverClass ? customHoverClass : 'dot-wallet-login-hover',
        ]"
        v-if="lang === 'en'"
        src="../assets/dotwallet-login-en.png"
        alt="DotWallet Login"
      />
      <img
        :class="[
          customClass ? customClass : 'dot-wallet-login-button',
          customActiveClass ? customActiveClass : 'dot-wallet-login-active',
          customHoverClass ? customHoverClass : 'dot-wallet-login-hover',
        ]"
        v-if="lang === 'zh'"
        src="../assets/dotwallet-login.png"
        alt="DotWallet Login"
      />
    </slot>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'dotwallet-login',
  props: {
    lang: {
      type: String,
      default: 'en',
      validator(x) {
        return ['en', 'zh'].indexOf(x) !== -1;
      },
    },
    appID: {
      type: String,
      default: '',
    },
    redirectURL: {
      type: String,
      default: '',
    },
    customClass: {
      type: String | null,
      default: null,
    },
    customActiveClass: {
      type: String | null,
      default: null,
    },
    customHoverClass: {
      type: String | null,
      default: null,
    },
  },
  data() {
    return {
      mousedown: false,
    };
  },
  methods: {
    openLink: function () {
      if (this.appID === '') console.warn('DotWallet Login button missing ap p ID');
      else if (this.redirectURL === '') console.warn('DotWallet Login button missing redirect URL');
      else
        window.location.href = `https://www.ddpurse.com/openapi/get_code?app_id=${this.appID}&redirect_uri=${this.redirectURL}auth`;
    },
  },
});
</script>

<style>
.dot-wallet-login-wrapper {
  width: max-content;
}
.dot-wallet-login-button {
  cursor: pointer;
  box-shadow: 0 0 10px gray;
}
.dot-wallet-login-hover:hover {
  box-shadow: 0 0 10px rgb(40, 40, 40);
}
.dot-wallet-login-active:active {
  opacity: 0.7;
}
</style>
