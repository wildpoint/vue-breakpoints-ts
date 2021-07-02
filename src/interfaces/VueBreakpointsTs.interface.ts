export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface BreakpointThresholds {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  [key: string]: number
}

export interface VueBreakpointsTsInterface {
  current: BreakpointType
  isMobile: boolean
  height: number
  width: number
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
  xsOnly: boolean
  smOnly: boolean
  mdOnly: boolean
  lgOnly: boolean
  xlOnly: boolean
  smAndUp: boolean
  mdAndUp: boolean
  lgAndUp: boolean
  smAndDown: boolean
  mdAndDown: boolean
  lgAndDown: boolean
}
