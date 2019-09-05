import { Component, ChangeDetectionStrategy, OnChanges, AfterViewInit, OnDestroy, Input, Output,
  EventEmitter, ViewChild, ElementRef, ChangeDetectorRef, Inject, PLATFORM_ID, SimpleChanges, SimpleChange } from '@angular/core';
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
  @Input() listenToEvents: boolean;

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

  @Output() private mountedBefore: EventEmitter<void>;
  @Output() private mountedAfter: EventEmitter<void>;
  @Output() private updated: EventEmitter<void>;
  @Output() private played: EventEmitter<void>;
  @Output() private paused: EventEmitter<void>;
  @Output() private buildedBefore: EventEmitter<void>;
  @Output() private buildedAfter: EventEmitter<void>;
  @Output() private ranBefore: EventEmitter<object>;
  @Output() private ran: EventEmitter<object>;
  @Output() private ranAfter: EventEmitter<object>;
  @Output() private runOffseted: EventEmitter<object>;
  @Output() private runStarted: EventEmitter<object>;
  @Output() private runEnded: EventEmitter<object>;
  @Output() private moved: EventEmitter<object>;
  @Output() private movedAfter: EventEmitter<object>;
  @Output() private resized: EventEmitter<void>;
  @Output() private swipeStarted: EventEmitter<void>;
  @Output() private swipeMoved: EventEmitter<void>;
  @Output() private swipeEnded: EventEmitter<void>;
  @Output() private translateJumped: EventEmitter<object>;

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
    this.listenToEvents = defaultExtraSettings.listenToEvents;

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

    this.mountedBefore = new EventEmitter<void>();
    this.mountedAfter = new EventEmitter<void>();
    this.updated = new EventEmitter<void>();
    this.played = new EventEmitter<void>();
    this.paused = new EventEmitter<void>();
    this.buildedBefore = new EventEmitter<void>();
    this.buildedAfter = new EventEmitter<void>();
    this.ranBefore = new EventEmitter<object>();
    this.ran = new EventEmitter<object>();
    this.ranAfter = new EventEmitter<object>();
    this.runOffseted = new EventEmitter<object>();
    this.runStarted = new EventEmitter<object>();
    this.runEnded = new EventEmitter<object>();
    this.moved = new EventEmitter<object>();
    this.movedAfter = new EventEmitter<object>();
    this.resized = new EventEmitter<void>();
    this.swipeStarted = new EventEmitter<void>();
    this.swipeMoved = new EventEmitter<void>();
    this.swipeEnded = new EventEmitter<void>();
    this.translateJumped = new EventEmitter<object>();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (isPlatformBrowser(this.platformId) && changes && this.glide) {
      this.update(this.getGlideUpdateSettings(changes));
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initGlideBullets();
      this.glide = new Glide(this.glideEl.nativeElement, this.getGlideInitSettings());
      this.initGlideEvents();
      this.mount();
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

  update(settings: object): void {
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

  private initGlideBullets(): void {
    const glideSlidesNativeElement: HTMLElement = this.glideSlidesEl.nativeElement;
    const childrenLength: number = glideSlidesNativeElement.children.length;
    this.glideBullets = [...new Array(childrenLength).keys()];
    this.changeDetectorRef.detectChanges();
  }

  private initGlideEvents(): void {
    if (!this.glide || !this.listenToEvents) {
      return;
    }

    this.glide.on('mount.before', () => this.mountedBefore.emit());
    this.glide.on('mount.after', () => this.mountedAfter.emit());
    this.glide.on('update', () => this.updated.emit());
    this.glide.on('play', () => this.played.emit());
    this.glide.on('pause', () => this.paused.emit());
    this.glide.on('build.before', () => this.buildedBefore.emit());
    this.glide.on('build.after', () => this.buildedAfter.emit());
    this.glide.on('run.before', (move: object) => this.ranBefore.emit(move));
    this.glide.on('run', (move: object) => this.ran.emit(move));
    this.glide.on('run.after', (move: object) => this.ranAfter.emit(move));
    this.glide.on('run.offset', (move: object) => this.runOffseted.emit(move));
    this.glide.on('run.start', (move: object) => this.runStarted.emit(move));
    this.glide.on('run.end', (move: object) => this.runEnded.emit(move));
    this.glide.on('move', (movement: object) => this.moved.emit(movement));
    this.glide.on('move.after', (movement: object) => this.movedAfter.emit(movement));
    this.glide.on('resize', () => this.resized.emit());
    this.glide.on('swipe.start', () => this.swipeStarted.emit());
    this.glide.on('swipe.move', () => this.swipeMoved.emit());
    this.glide.on('swipe.end', () => this.swipeEnded.emit());
    this.glide.on('translate.jump', (movement: object) => this.translateJumped.emit(movement));
  }

  private getGlideUpdateSettings(changes: SimpleChanges): object {
    const settings = {};

    for (const key in changes) {
      if (!changes.hasOwnProperty(key)) {
        continue;
      }

      if (!defaultSettings.hasOwnProperty(key)) {
        continue;
      }

      const change: SimpleChange = changes[key];

      if (change.previousValue !== change.currentValue) {
        settings[key] = change.currentValue;
      }
    }

    return settings;
  }

  private getGlideInitSettings(): Settings {
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
