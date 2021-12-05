import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'ngx-glide-demo-backdrops',
  templateUrl: './backdrops.component.html',
  styleUrls: ['./backdrops.component.scss'],
})
export class BackdropsComponent implements OnInit {
  isLoading: boolean;
  backdrops: number[];
  showCustomArrows!: boolean;
  showArrows!: boolean;
  showBullets!: boolean;
  arrowLeftLabel!: string;
  arrowRightLabel!: string;
  type!: string;
  startAt!: number;
  perView!: number;
  focusAt!: number | string;
  gap!: number;
  autoplay!: number | boolean;
  hoverpause!: boolean;
  keyboard!: boolean;
  bound!: boolean;
  swipeThreshold!: number | boolean;
  dragThreshold!: number | boolean;
  perTouch!: number | boolean;
  touchRatio!: number;
  touchAngle!: number;
  animationDuration!: number;
  rewind!: boolean;
  rewindDuration!: number;
  animationTimingFunc!: string;
  direction!: string;
  classes!: Record<string, unknown>;
  isCenter!: boolean;
  isAutoplay!: boolean;
  isSwipeThreshold!: boolean;
  isDragThreshold!: boolean;
  isPerTouch!: boolean;
  logs: { event: string; data?: Record<string, unknown> }[];

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  constructor() {
    this.isLoading = true;
    this.backdrops = [];
    this.reset();
    this.logs = [];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.backdrops = [...new Array(20).keys()];
      this.isLoading = false;
    }, 2000);
  }

  reset(): void {
    this.showCustomArrows = false;
    this.showArrows = true;
    this.showBullets = true;
    this.arrowLeftLabel = 'left';
    this.arrowRightLabel = 'right';
    this.type = 'slider';
    this.startAt = 0;
    this.perView = 3;
    this.isCenter = false;
    this.focusAt = 0;
    this.gap = 10;
    this.isAutoplay = false;
    this.autoplay = 1000;
    this.hoverpause = true;
    this.keyboard = true;
    this.bound = false;
    this.isSwipeThreshold = true;
    this.swipeThreshold = 80;
    this.isDragThreshold = true;
    this.dragThreshold = 120;
    this.isPerTouch = false;
    this.perTouch = 3;
    this.touchRatio = 0.5;
    this.touchAngle = 45;
    this.animationDuration = 400;
    this.rewind = true;
    this.rewindDuration = 800;
    this.animationTimingFunc = 'cubic-bezier(0.165, 0.840, 0.440, 1.000)';
    this.direction = 'ltr';
  }

  recreate(): void {
    if (this.ngxGlide) {
      this.ngxGlide.recreate();
    }
  }

  onMountedBefore(): void {
    this.logs.push({ event: 'mountedBefore' });
  }

  onMountedAfter(): void {
    this.logs.push({ event: 'mountedAfter' });
  }

  onUpdated(): void {
    this.logs.push({ event: 'updated' });
  }

  onPlayed(): void {
    this.logs.push({ event: 'played' });
  }

  onPaused(): void {
    this.logs.push({ event: 'paused' });
  }

  onBuildedBefore(): void {
    this.logs.push({ event: 'buildedBefore' });
  }

  onBuildedAfter(): void {
    this.logs.push({ event: 'buildedAfter' });
  }

  onRanBefore(move: Record<string, unknown>): void {
    this.logs.push({ event: 'ranBefore', data: move });
  }

  onRan(move: Record<string, unknown>): void {
    this.logs.push({ event: 'ran', data: move });
  }

  onRanAfter(move: Record<string, unknown>): void {
    this.logs.push({ event: 'ranAfter', data: move });
  }

  onRanOffset(move: Record<string, unknown>): void {
    this.logs.push({ event: 'ranOffset', data: move });
  }

  onRunStarted(move: Record<string, unknown>): void {
    this.logs.push({ event: 'runStarted', data: move });
  }

  onRunEnded(move: Record<string, unknown>): void {
    this.logs.push({ event: 'runEnded', data: move });
  }

  onMoved(movement: Record<string, unknown>): void {
    this.logs.push({ event: 'moved', data: movement });
  }

  onMovedAfter(movement: Record<string, unknown>): void {
    this.logs.push({ event: 'movedAfter', data: movement });
  }

  onResized(): void {
    this.logs.push({ event: 'resized' });
  }

  onSwipeStarted(): void {
    this.logs.push({ event: 'swipeStarted' });
  }

  onSwipeMoved(): void {
    this.logs.push({ event: 'swipeMoved' });
  }

  onSwipeEnded(): void {
    this.logs.push({ event: 'swipeEnded' });
  }

  onTranslateJumped(movement: Record<string, unknown>): void {
    this.logs.push({ event: 'translateJumped', data: movement });
  }
}
