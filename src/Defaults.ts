import { BreakpointThresholds } from './interfaces/VueBreakpointsTs.interface'

export const defaults = {
  mobileBreakpoint: 'sm',
  scrollBarWidth: 16,
  thresholds: {
    xs: 600,
    sm: 960,
    md: 1280,
    lg: 1920
  } as BreakpointThresholds
}
