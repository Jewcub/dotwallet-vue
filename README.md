# dotwallet-vue

[GitHub](https://github.com/Jewcub/dotwallet-vue)

## Install

```
npm install dotwallet-vue
```

## Use

```js
// main.js
import Dotwallet from 'dotwallet-vue';
Vue.use(Dotwallet);

// or in single file component
import { DotwalletLogin } from 'dotwallet-vue';
export default {
  components: {
    DotwalletLogin,
  },
};
```

```html
<dotwallet-login
  lang="zh"
  app-id="89d0032043842644fdb4fb14099ff6be5"
  redirect-url="http://192.168.1.142:8080"
  custom-class="{border-radius: 5px;}"
  custom-hover="{box-shadow: 0 0 10px green;}"
  custom-active="{box-shadow: 0 0 10px red;}"
>
</dotwallet-login>
```
