export interface Settings {
  type: string;
  startAt: number;
  perView: number;
  focusAt: number | string;
  gap: number;
  autoplay: number | boolean;
  hoverpause: boolean;
  keyboard: boolean;
  bound: boolean;
  swipeThreshold: number | boolean;
  dragThreshold: number | boolean;
  perTouch: number | boolean;
  touchRatio: number;
  touchAngle: number;
  animationDuration: number;
  rewind: boolean;
  rewindDuration: number;
  animationTimingFunc: string;
  direction: string;
  peek: number | Record<string, unknown>;
  breakpoints: Record<string, unknown>;
  classes: Record<string, unknown>;
  throttle: number;
}
