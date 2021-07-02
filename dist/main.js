"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VueBreakpointsTs_1 = require("./VueBreakpointsTs");
const VueBreakpointsTsPlugin = {
    install(Vue) {
        Vue.prototype.$breakpoint = Vue.observable(new VueBreakpointsTs_1.VueBreakpointsTs());
    }
};
exports.default = VueBreakpointsTsPlugin;
