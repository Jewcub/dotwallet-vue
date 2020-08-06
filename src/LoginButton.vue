<template>
  <div>
    <slot>
      <img
        v-if="type === 'en'"
        src="../assets/dotwallet-login-en.png"
        alt="DotWallet Login"
        @click="openLink()"
      />
      <img
        v-if="type === 'zh'"
        src="../assets/dotwallet-login.png"
        alt="DotWallet Login"
        @click="openLink()"
      />
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LoginButton',
  props: {
    lang: {
      type: String,
      default: 'en',
      validator(x: string) {
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
  },
  methods: {
    openLink: function() {
      if (this.appID === '') console.warn('DotWallet Login button missing app ID');
      else if (this.redirectURL === '') console.warn('DotWallet Login button missing redirect URL');
      else
        window.location.href = `https://www.ddpurse.com/openapi/get_code?app_id=${this.appID}&redirect_uri=${this.redirectURL}auth`;
    },
  },
});
</script>

<style></style>
