import { OptionsInterface } from 'interfaces/Options.interface'

const defaultThresholds = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

// The default options that will be used when the plugin constructs.
export const DefaultOptions: OptionsInterface = {
  mobileBreakpoint: defaultThresholds.sm,
  scrollBarWidth: 16,
  thresholds: defaultThresholds
}