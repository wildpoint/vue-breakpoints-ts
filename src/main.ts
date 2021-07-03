import { VueConstructor } from 'vue'

import { OptionsInterface } from 'interfaces/Options.interface'

import { VueBreakpointsTs } from './VueBreakpointsTs'

const VueBreakpointsTsPlugin: any = {
  install (Vue: VueConstructor, options: Partial<OptionsInterface>): void {
    Vue.prototype.$breakpoint = Vue.observable(new VueBreakpointsTs(options))
  }
}

export default VueBreakpointsTsPlugin
