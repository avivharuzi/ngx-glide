import { Component, ChangeDetectionStrategy, OnChanges, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef,
  ChangeDetectorRef, Inject, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import Glide from '@glidejs/glide';

import { defaultSettings } from './shared/default-settings';
import { defaultExtraSettings } from './shared/default-extra-settings';
import { Settings } from './shared/settings.interface';

@Component({
  selector: 'ngx-glide',
  templateUrl: './ngx-glide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGlideComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() showArrows: boolean;
  @Input() showBullets: boolean;
  @Input() arrowLeftLabel: string;
  @Input() arrowRightLabel: string;

  glideBullets: number[];

  @Input() private type: string;
  @Input() private startAt: number;
  @Input() private perView: number;
  @Input() private focusAt: number | string;
  @Input() private gap: number;
  @Input() private autoplay: number | boolean;
  @Input() private hoverpause: boolean;
  @Input() private keyboard: boolean;
  @Input() private bound: boolean;
  @Input() private swipeThreshold: number | boolean;
  @Input() private dragThreshold: number | boolean;
  @Input() private perTouch: number | boolean;
  @Input() private touchRatio: number;
  @Input() private touchAngle: number;
  @Input() private animationDuration: number;
  @Input() private rewind: boolean;
  @Input() private rewindDuration: number;
  @Input() private animationTimingFunc: string;
  @Input() private direction: string;
  @Input() private peek: number | object;
  @Input() private breakpoints: object;
  @Input() private classes: object;
  @Input() private throttle: number;

  @ViewChild('glideEl', { static: false }) private glideEl: ElementRef;
  @ViewChild('glideSlidesEl', { static: false }) private glideSlidesEl: ElementRef;

  private glide: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    this.showArrows = defaultExtraSettings.showArrows;
    this.showBullets = defaultExtraSettings.showBullets;
    this.arrowLeftLabel = defaultExtraSettings.arrowLeftLabel;
    this.arrowRightLabel = defaultExtraSettings.arrowRightLabel;

    this.type = defaultSettings.type;
    this.startAt = defaultSettings.startAt;
    this.perView = defaultSettings.perView;
    this.focusAt = defaultSettings.focusAt;
    this.gap = defaultSettings.gap;
    this.autoplay = defaultSettings.autoplay;
    this.hoverpause = defaultSettings.hoverpause;
    this.keyboard = defaultSettings.keyboard;
    this.bound = defaultSettings.bound;
    this.swipeThreshold = defaultSettings.swipeThreshold;
    this.dragThreshold = defaultSettings.dragThreshold;
    this.perTouch = defaultSettings.perTouch;
    this.touchRatio = defaultSettings.touchRatio;
    this.touchAngle = defaultSettings.touchAngle;
    this.animationDuration = defaultSettings.animationDuration;
    this.rewind = defaultSettings.rewind;
    this.rewindDuration = defaultSettings.rewindDuration;
    this.animationTimingFunc = defaultSettings.animationTimingFunc;
    this.direction = defaultSettings.direction;
    this.peek = defaultSettings.peek;
    this.breakpoints = defaultSettings.breakpoints;
    this.classes = defaultSettings.classes;
    this.throttle = defaultSettings.throttle;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (isPlatformBrowser(this.platformId) && changes && this.glide) {
      this.updateGlideBullets();
      this.update(this.getGlideSettings());
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateGlideBullets();
      this.glide = new Glide(this.glideEl.nativeElement, this.getGlideSettings()).mount();
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnDestroy() {
    this.destroy();
  }

  getIndex(): number {
    if (this.glide) {
      return this.glide.index;
    }
  }

  getSettings(): Settings {
    if (this.glide) {
      return this.glide.settings;
    }
  }

  getType(): string {
    if (this.glide) {
      return this.glide.type;
    }
  }

  isDisabled(): boolean {
    if (this.glide) {
      return this.glide.disabled;
    }
  }

  mount(): void {
    if (this.glide) {
      this.glide.mount();
    }
  }

  update(settings: Settings): void {
    if (this.glide) {
      this.glide.update(settings);
      this.changeDetectorRef.detectChanges();
    }
  }

  destroy(): void {
    if (this.glide) {
      this.glide.destroy();
    }
  }

  go(pattern: string): void {
    if (this.glide) {
      this.glide.go(pattern);
    }
  }

  pause(): void {
    if (this.glide) {
      this.glide.pause();
    }
  }

  play(force?: number): void {
    if (this.glide) {
      if (typeof force === 'number') {
        this.glide.play(force);
      } else {
        this.glide.play();
      }
    }
  }

  disable(): void {
    if (this.glide) {
      this.glide.disable();
    }
  }

  enable(): void {
    if (this.glide) {
      this.glide.enable();
    }
  }

  isType(type: string): boolean {
    if (this.glide) {
      return this.glide.isType(type);
    }
  }

  private updateGlideBullets(): void {
    const glideSlidesNativeElement: HTMLElement = this.glideSlidesEl.nativeElement;
    const childrenLength: number = glideSlidesNativeElement.children.length;
    this.glideBullets = [...new Array(childrenLength).keys()];
    this.changeDetectorRef.detectChanges();
  }

  private getGlideSettings(): Settings {
    return {
      type: this.type,
      startAt: this.startAt,
      perView: this.perView,
      focusAt: this.focusAt,
      gap: this.gap,
      autoplay: this.autoplay,
      hoverpause: this.hoverpause,
      keyboard: this.keyboard,
      bound: this.bound,
      swipeThreshold: this.swipeThreshold,
      dragThreshold: this.dragThreshold,
      perTouch: this.perTouch,
      touchRatio: this.touchRatio,
      touchAngle: this.touchAngle,
      animationDuration: this.animationDuration,
      rewind: this.rewind,
      rewindDuration: this.rewindDuration,
      animationTimingFunc: this.animationTimingFunc,
      direction: this.direction,
      peek: this.peek,
      breakpoints: this.breakpoints,
      classes: this.classes,
      throttle: this.throttle
    };
  }
}
