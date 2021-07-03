"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueBreakpointsTs = void 0;
const Defaults_1 = require("./Defaults");
class VueBreakpointsTs {
    constructor(options = {}) {
        this.current = 'xs';
        this.isMobile = false;
        this.height = 0;
        this.width = 0;
        this.xs = false;
        this.sm = false;
        this.md = false;
        this.lg = false;
        this.xl = false;
        this.xsOnly = false;
        this.smOnly = false;
        this.smAndDown = false;
        this.smAndUp = false;
        this.mdOnly = false;
        this.mdAndDown = false;
        this.mdAndUp = false;
        this.lgOnly = false;
        this.lgAndDown = false;
        this.lgAndUp = false;
        this.xlOnly = false;
        this.resizeTimeout = 0;
        this.scrollBarWidth = 16;
        this.mobileBreakpoint = 0;
        this.thresholds = Object.assign(Object.assign({}, Defaults_1.DefaultOptions.thresholds), options.thresholds);
        this.scrollBarWidth = (options === null || options === void 0 ? void 0 : options.scrollBarWidth) || Defaults_1.DefaultOptions.scrollBarWidth;
        this.mobileBreakpoint = (options === null || options === void 0 ? void 0 : options.mobileBreakpoint) || Defaults_1.DefaultOptions.mobileBreakpoint;
        this.init();
    }
    init() {
        this.update();
        window.addEventListener('resize', this.onResize.bind(this), { passive: true });
    }
    update() {
        this.height = this.getClientHeight();
        this.width = this.getClientWidth();
        const width = this.width;
        const xs = width < this.thresholds.sm;
        const sm = width < this.thresholds.md && !xs;
        const md = width < (this.thresholds.lg - this.scrollBarWidth) && !(sm || xs);
        const lg = width < (this.thresholds.xl - this.scrollBarWidth) && !(md || sm || xs);
        const xl = width >= (this.thresholds.xl - this.scrollBarWidth);
        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.xl = xl;
        this.xsOnly = xs;
        this.smOnly = sm;
        this.smAndDown = (xs || sm) && !(md || lg || xl);
        this.smAndUp = !xs && (sm || md || lg || xl);
        this.mdOnly = md;
        this.mdAndDown = (xs || sm || md) && !(lg || xl);
        this.mdAndUp = !(xs || sm) && (md || lg || xl);
        this.lgOnly = lg;
        this.lgAndDown = (xs || sm || md || lg) && !xl;
        this.lgAndUp = !(xs || sm || md) && (lg || xl);
        this.xlOnly = xl;
        switch (true) {
            case (xs):
                this.current = 'xs';
                break;
            case (sm):
                this.current = 'sm';
                break;
            case (md):
                this.current = 'md';
                break;
            case (lg):
                this.current = 'lg';
                break;
            default:
                this.current = 'xl';
                break;
        }
        if (typeof this.mobileBreakpoint === 'number') {
            this.isMobile = width < this.mobileBreakpoint;
            return;
        }
        const breakpoints = {
            xs: 0,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4
        };
        const current = breakpoints[this.current];
        const max = breakpoints[this.mobileBreakpoint];
        this.isMobile = current <= max;
    }
    onResize() {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(this.update.bind(this), 100);
    }
    getClientHeight() {
        if (typeof document === 'undefined')
            return 0;
        return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    }
    getClientWidth() {
        if (typeof document === 'undefined') {
            return 0;
        }
        return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    }
}
exports.VueBreakpointsTs = VueBreakpointsTs;
