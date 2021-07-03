import { BreakpointThresholds } from "./VueBreakpointsTs.interface"

/**
 * Defines the shape of the Options object.
 *
 * @export
 * @interface OptionsInterface
 */
export interface OptionsInterface {
  mobileBreakpoint: number
  scrollBarWidth: number
  thresholds: BreakpointThresholds
}