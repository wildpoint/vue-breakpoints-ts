"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultOptions = void 0;
const defaultThresholds = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
};
exports.DefaultOptions = {
    mobileBreakpoint: defaultThresholds.sm,
    scrollBarWidth: 16,
    thresholds: defaultThresholds
};
