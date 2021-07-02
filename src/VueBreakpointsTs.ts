import { defaults } from './Defaults'
import {
  BreakpointThresholds,
  BreakpointType,
  VueBreakpointsTsInterface
} from './interfaces/VueBreakpointsTs.interface'

/**
 *
 *
 * @export
 * @class VueBreakpointsTs
 * @implements { VueBreakpointsTsInterface }
 */
export class VueBreakpointsTs implements VueBreakpointsTsInterface {
  /**
   * The current breakpoint of the window.
   *
   * @memberof VueBreakpointsTs
   */
  public current = 'xs' as BreakpointType

  /**
   * If the current window size is considered a mobile breakpoint.
   *
   * @memberof VueBreakpointsTs
   */
  public isMobile = false;

  /**
   * The current height of the window.
   *
   * @memberof VueBreakpointsTs
   */
  public height = 0

  /**
   * The current width of the window.
   *
   * @memberof VueBreakpointsTs
   */
  public width = 0

  public xs = false

  public sm = false

  public md = false

  public lg = false

  public xl = false

  public xsOnly = false

  public smOnly = false

  public smAndDown = false

  public smAndUp = false

  public mdOnly = false

  public mdAndDown = false

  public mdAndUp = false

  public lgOnly = false

  public lgAndDown = false

  public lgAndUp = false

  public xlOnly = false

  private thresholds: BreakpointThresholds

  private resizeTimeout = 0

  private scrollBarWidth = 16;

  private mobileBreakpoint = 0;

  /**
   * Creates an instance of VueBreakpointsTs.
   *
   * @memberof VueBreakpointsTs
   */
  public constructor () {
    this.thresholds = {
      ...defaults.thresholds
    }

    this.mobileBreakpoint = defaults.thresholds[defaults.mobileBreakpoint]

    this.init()
  }

  /**
   * Sets the initial values and adds the window resize listener.
   *
   * @private
   * @memberof VueBreakpointsTs
   */
  private init (): void {
    this.update()

    window.addEventListener('resize', this.onResize.bind(this), { passive: true })
  }

  /**
   * Updates the class values inline with the windows current size.
   *
   * @private
   * @memberof VueBreakpointsTs
   */
  private update (): void {
    this.height = this.getClientHeight()
    this.width = this.getClientWidth()

    const width = this.width

    const xs = width < this.thresholds.xs
    const sm = width < this.thresholds.sm && !xs
    const md = width < (this.thresholds.md - this.scrollBarWidth) && !(sm || xs)
    const lg = width < (this.thresholds.lg - this.scrollBarWidth) && !(md || sm || xs)
    const xl = width >= (this.thresholds.lg - this.scrollBarWidth)

    this.xs = xs
    this.sm = sm
    this.md = md
    this.lg = lg
    this.xl = xl

    this.xsOnly = xs
    this.smOnly = sm
    this.smAndDown = (xs || sm) && !(md || lg || xl)
    this.smAndUp = !xs && (sm || md || lg || xl)
    this.mdOnly = md
    this.mdAndDown = (xs || sm || md) && !(lg || xl)
    this.mdAndUp = !(xs || sm) && (md || lg || xl)
    this.lgOnly = lg
    this.lgAndDown = (xs || sm || md || lg) && !xl
    this.lgAndUp = !(xs || sm || md) && (lg || xl)
    this.xlOnly = xl

    switch (true) {
      case (xs):
        this.current = 'xs'
        break
      case (sm):
        this.current = 'sm'
        break
      case (md):
        this.current = 'md'
        break
      case (lg):
        this.current = 'lg'
        break
      default:
        this.current = 'xl'
        break
    }

    if (typeof this.mobileBreakpoint === 'number') {
      this.isMobile = width < this.mobileBreakpoint

      return
    }

    const breakpoints: { [key: string]: number } = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    } as const

    const current = breakpoints[this.current]
    const max = breakpoints[this.mobileBreakpoint]

    this.isMobile = current <= max
  }

  /**
   * Called when the window is resized, debounces the event.
   *
   * Calls update once the window stops being resized for 200ms.
   *
   * @private
   * @memberof VueBreakpointsTs
   */
  private onResize (): void {
    clearTimeout(this.resizeTimeout)

    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200)
  }

  /**
   * Gets the windows current height
   *
   * @private
   * @returns { number }
   * @memberof VueBreakpointsTs
   */
  private getClientHeight (): number {
    if (typeof document === 'undefined') return 0
    return Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
  }

  /**
   * Gets the windows current width.
   *
   * @private
   * @returns { number }
   * @memberof VueBreakpointsTs
   */
  private getClientWidth (): number {
    if (typeof document === 'undefined') {
      return 0
    }

    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
  }
}
