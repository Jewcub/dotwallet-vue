<template>
  <div id="app">
    <dotwallet-login
      lang="zh"
      appID="89d001043806644fdb4fb14099ff6be5"
      redirectURL="http://192.168.1.142:8080"
    >
    </dotwallet-login>
  </div>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'app',
  components: {
    DotwalletLogin: Login,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
