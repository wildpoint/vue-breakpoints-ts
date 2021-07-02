import { VueConstructor } from 'vue'

import { VueBreakpointsTs } from './VueBreakpointsTs'

const VueBreakpointsTsPlugin = {
  install (Vue: VueConstructor): void {
    Vue.prototype.$breakpoint = Vue.observable(new VueBreakpointsTs())
  }
}

export default VueBreakpointsTsPlugin
