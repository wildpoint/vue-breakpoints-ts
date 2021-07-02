## VueBreakpointsTs

### Setup

```
// main.ts
import Vue from 'vue';

Vue.use(VueBreakpointsTs)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### Usage

```
// App.vue
<template>
  <div id="app">
    <h1 v-if="$breakpoint.mdAndDown">
        {{ breakpoint }}
    </h1>
  </div>
</template>

export default class App extends Vue {
  get breakpoint (): string {
    return Vue.prototype.$breakpoint.current
  }
}
```
