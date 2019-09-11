(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/ngx-glide/fesm2015/ngx-glide.js":
/*!**********************************************!*\
  !*** ./dist/ngx-glide/fesm2015/ngx-glide.js ***!
  \**********************************************/
/*! exports provided: NgxGlideComponent, NgxGlideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxGlideComponent", function() { return NgxGlideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxGlideModule", function() { return NgxGlideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultSettings = {
    type: 'slider',
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: false,
    hoverpause: true,
    keyboard: true,
    bound: false,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: false,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: true,
    rewindDuration: 800,
    animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    direction: 'ltr',
    peek: 0,
    breakpoints: {},
    classes: {
        direction: {
            ltr: 'glide--ltr',
            rtl: 'glide--rtl'
        },
        slider: 'glide--slider',
        carousel: 'glide--carousel',
        swipeable: 'glide--swipeable',
        dragging: 'glide--dragging',
        cloneSlide: 'glide__slide--clone',
        activeNav: 'glide__bullet--active',
        activeSlide: 'glide__slide--active',
        disabledArrow: 'glide__arrow--disabled'
    },
    throttle: 25
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultExtraSettings = {
    showArrows: true,
    showBullets: true,
    arrowLeftLabel: 'left',
    arrowRightLabel: 'right',
    listenToEvents: false
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxGlideComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} platformId
     */
    constructor(changeDetectorRef, platformId) {
        this.changeDetectorRef = changeDetectorRef;
        this.platformId = platformId;
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
        this.mountedBefore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mountedAfter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.played = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buildedBefore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buildedAfter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ranBefore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ran = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ranAfter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ranOffset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.runStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.runEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.movedAfter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translateJumped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId) && changes && this.glide) {
            this.update(this.getGlideUpdateSettings(changes));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.initGlideBullets();
            this.glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"](this.glideEl.nativeElement, this.getGlideInitSettings());
            this.initGlideEvents();
            this.mount();
            this.changeDetectorRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     * @return {?}
     */
    getIndex() {
        if (this.glide) {
            return this.glide.index;
        }
    }
    /**
     * @return {?}
     */
    getSettings() {
        if (this.glide) {
            return this.glide.settings;
        }
    }
    /**
     * @return {?}
     */
    getType() {
        if (this.glide) {
            return this.glide.type;
        }
    }
    /**
     * @return {?}
     */
    isDisabled() {
        if (this.glide) {
            return this.glide.disabled;
        }
    }
    /**
     * @return {?}
     */
    mount() {
        if (this.glide) {
            this.glide.mount();
        }
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    update(settings) {
        if (this.glide) {
            this.glide.update(settings);
            this.changeDetectorRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.glide) {
            this.glide.destroy();
        }
    }
    /**
     * @param {?} pattern
     * @return {?}
     */
    go(pattern) {
        if (this.glide) {
            this.glide.go(pattern);
        }
    }
    /**
     * @return {?}
     */
    pause() {
        if (this.glide) {
            this.glide.pause();
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    play(force) {
        if (this.glide) {
            if (typeof force === 'number') {
                this.glide.play(force);
            }
            else {
                this.glide.play();
            }
        }
    }
    /**
     * @return {?}
     */
    disable() {
        if (this.glide) {
            this.glide.disable();
        }
    }
    /**
     * @return {?}
     */
    enable() {
        if (this.glide) {
            this.glide.enable();
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isType(type) {
        if (this.glide) {
            return this.glide.isType(type);
        }
    }
    /**
     * @private
     * @return {?}
     */
    initGlideBullets() {
        /** @type {?} */
        const glideSlidesNativeElement = this.glideSlidesEl.nativeElement;
        /** @type {?} */
        const childrenLength = glideSlidesNativeElement.children.length;
        this.glideBullets = [...new Array(childrenLength).keys()];
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    initGlideEvents() {
        if (!this.glide || !this.listenToEvents) {
            return;
        }
        this.glide.on('mount.before', (/**
         * @return {?}
         */
        () => this.mountedBefore.emit()));
        this.glide.on('mount.after', (/**
         * @return {?}
         */
        () => this.mountedAfter.emit()));
        this.glide.on('update', (/**
         * @return {?}
         */
        () => this.updated.emit()));
        this.glide.on('play', (/**
         * @return {?}
         */
        () => this.played.emit()));
        this.glide.on('pause', (/**
         * @return {?}
         */
        () => this.paused.emit()));
        this.glide.on('build.before', (/**
         * @return {?}
         */
        () => this.buildedBefore.emit()));
        this.glide.on('build.after', (/**
         * @return {?}
         */
        () => this.buildedAfter.emit()));
        this.glide.on('run.before', (/**
         * @param {?} move
         * @return {?}
         */
        (move) => this.ranBefore.emit(move)));
        this.glide.on('run', (/**
         * @param {?} move
         * @return {?}
         */
        (move) => this.ran.emit(move)));
        this.glide.on('run.after', (/**
         * @param {?} move
         * @return {?}
         */
        (move) => this.ranAfter.emit(move)));
        this.glide.on('run.offset', (/**
         * @param {?} move
         * @return {?}
         */
        (move) => this.ranOffset.emit(move)));
        this.glide.on('run.start', (/**
         * @param {?} move
         * @return {?}
         */
        (move) => this.runStarted.emit(move)));
        this.glide.on('run.end', (/**
         * @param {?} move
         * @return {?}
         */
        (move) => this.runEnded.emit(move)));
        this.glide.on('move', (/**
         * @param {?} movement
         * @return {?}
         */
        (movement) => this.moved.emit(movement)));
        this.glide.on('move.after', (/**
         * @param {?} movement
         * @return {?}
         */
        (movement) => this.movedAfter.emit(movement)));
        this.glide.on('resize', (/**
         * @return {?}
         */
        () => this.resized.emit()));
        this.glide.on('swipe.start', (/**
         * @return {?}
         */
        () => this.swipeStarted.emit()));
        this.glide.on('swipe.move', (/**
         * @return {?}
         */
        () => this.swipeMoved.emit()));
        this.glide.on('swipe.end', (/**
         * @return {?}
         */
        () => this.swipeEnded.emit()));
        this.glide.on('translate.jump', (/**
         * @param {?} movement
         * @return {?}
         */
        (movement) => this.translateJumped.emit(movement)));
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    getGlideUpdateSettings(changes) {
        /** @type {?} */
        const settings = {};
        for (const key in changes) {
            if (!changes.hasOwnProperty(key)) {
                continue;
            }
            if (!defaultSettings.hasOwnProperty(key)) {
                continue;
            }
            /** @type {?} */
            const change = changes[key];
            if (change.previousValue !== change.currentValue) {
                settings[key] = change.currentValue;
            }
        }
        return settings;
    }
    /**
     * @private
     * @return {?}
     */
    getGlideInitSettings() {
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
NgxGlideComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-glide',
                template: "<div class=\"glide\" #glideEl>\n  <div class=\"glide__track\" data-glide-el=\"track\">\n    <div class=\"glide__slides\" #glideSlidesEl>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"glide__arrows\" data-glide-el=\"controls\" [style.display]=\"showArrows ? 'block' : 'none'\">\n    <button class=\"glide__arrow glide__arrow--left\" data-glide-dir=\"<\">{{ arrowLeftLabel }}</button>\n    <button class=\"glide__arrow glide__arrow--right\" data-glide-dir=\">\">{{ arrowRightLabel }}</button>\n  </div>\n  <div class=\"glide__bullets\" data-glide-el=\"controls[nav]\" [style.display]=\"showBullets ? 'block' : 'none'\">\n    <ng-container *ngIf=\"glideBullets\">\n      <button class=\"glide__bullet\" *ngFor=\"let glideBullet of glideBullets\" [attr.data-glide-dir]=\"'=' + glideBullet\"></button>\n    </ng-container>\n  </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
NgxGlideComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
NgxGlideComponent.propDecorators = {
    showArrows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showBullets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowLeftLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowRightLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listenToEvents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    perView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    focusAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hoverpause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    swipeThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    perTouch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    touchRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    touchAngle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rewind: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rewindDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationTimingFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    peek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    breakpoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    throttle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mountedBefore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mountedAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    updated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    played: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    paused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    buildedBefore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    buildedAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ranBefore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ran: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ranAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ranOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    runStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    runEnded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    movedAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    swipeStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    swipeMoved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    swipeEnded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    translateJumped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    glideEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['glideEl', { static: false },] }],
    glideSlidesEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['glideSlidesEl', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxGlideModule {
}
NgxGlideModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [NgxGlideComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [NgxGlideComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-glide.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container\">\n  <app-backdrops></app-backdrops>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/backdrops/backdrops.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/backdrops/backdrops.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n  <div class=\"backdrops\">\n    <ng-container *ngIf=\"backdrops && backdrops.length\">\n      <ngx-glide [showArrows]=\"showArrows\" [showBullets]=\"showBullets\" [arrowLeftLabel]=\"arrowLeftLabel\"\n        [arrowRightLabel]=\"arrowRightLabel\" [type]=\"type\" [startAt]=\"startAt\" [perView]=\"perView\"\n        [focusAt]=\"isCenter ? 'center' : focusAt\" [gap]=\"gap\" [autoplay]=\"isAutoplay ? autoplay : false\"\n        [hoverpause]=\"hoverpause\" [keyboard]=\"keyboard\" [bound]=\"bound\"\n        [swipeThreshold]=\"isSwipeThreshold ? swipeThreshold : false\"\n        [dragThreshold]=\"isDragThreshold ? dragThreshold : false\" [perTouch]=\"isPerTouch ? perTouch : false\"\n        [touchRatio]=\"touchRatio\" [touchAngle]=\"touchAngle\" [animationDuration]=\"animationDuration\" [rewind]=\"rewind\"\n        [rewindDuration]=\"rewindDuration\" [animationTimingFunc]=\"animationTimingFunc\" [direction]=\"direction\"\n        [listenToEvents]=\"true\" (mountedBefore)=\"onMountedBefore()\" (mountedAfter)=\"onMountedAfter()\"\n        (updated)=\"onUpdated()\" (played)=\"onPlayed()\" (paused)=\"onPaused()\" (buildedBefore)=\"onBuildedBefore()\"\n        (buildedAfter)=\"onBuildedAfter()\" (ranBefore)=\"onRanBefore($event)\" (ran)=\"onRan($event)\"\n        (ranAfter)=\"onRanAfter($event)\" (ranOffset)=\"onRanOffset($event)\" (runStarted)=\"onRunStarted($event)\"\n        (runEnded)=\"onRunEnded($event)\" (moved)=\"onMoved($event)\" (movedAfter)=\"onMovedAfter($event)\"\n        (resized)=\"onResized()\" (swipeStarted)=\"onSwipeStarted()\" (swipeMoved)=\"onSwipeMoved()\"\n        (swipeEnded)=\"onSwipeEnded()\" (translateJumped)=\"onTranslateJumped($event)\">\n        <div class=\"backdrop\" *ngFor=\"let backdrop of backdrops\">\n          <img [src]=\"backdrop + 1 | img:'jpeg':'backdrops'\">\n        </div>\n      </ngx-glide>\n    </ng-container>\n    <ng-container *ngIf=\"isLoading\">\n      <mat-spinner class=\"spinner\"></mat-spinner>\n    </ng-container>\n  </div>\n\n  <div *ngIf=\"!isLoading\">\n    <mat-divider class=\"divider\"></mat-divider>\n\n    <div class=\"edit-backdrops\">\n      <div class=\"edit-backdrop\">\n        <mat-slide-toggle [checked]=\"showArrows\" [(ngModel)]=\"showArrows\">showArrows\n        </mat-slide-toggle>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-slide-toggle [checked]=\"showBullets\" [(ngModel)]=\"showBullets\">showBullets</mat-slide-toggle>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput placeholder=\"arrowLeftLabel\" [(ngModel)]=\"arrowLeftLabel\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput placeholder=\"arrowRightLabel\" [(ngModel)]=\"arrowRightLabel\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <mat-label>type</mat-label>\n          <mat-select name=\"type\" [(ngModel)]=\"type\">\n            <mat-option value=\"slider\">\n              slider\n            </mat-option>\n            <mat-option value=\"carousel\">\n              carousel\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"startAt\" min=\"0\" [max]=\"backdrops.length - 1\"\n            [(ngModel)]=\"startAt\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"perView\" min=\"1\" [max]=\"backdrops.length\" [(ngModel)]=\"perView\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-checkbox [(ngModel)]=\"isCenter\">\n          center\n        </mat-checkbox>\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"focusAt\" min=\"0\" [max]=\"perView - 1\" [disabled]=\"isCenter\"\n            [(ngModel)]=\"focusAt\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"gap\" min=\"0\" step=\"10\" [(ngModel)]=\"gap\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-slide-toggle [checked]=\"isAutoplay\" [(ngModel)]=\"isAutoplay\">autoplay\n        </mat-slide-toggle>\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"autoplay\" min=\"0\" step=\"1000\" [disabled]=\"!isAutoplay\"\n            [(ngModel)]=\"autoplay\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-checkbox [(ngModel)]=\"hoverpause\">\n          hoverpause\n        </mat-checkbox>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-checkbox [(ngModel)]=\"keyboard\">\n          keyboard\n        </mat-checkbox>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-checkbox [(ngModel)]=\"bound\">\n          bound\n        </mat-checkbox>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-slide-toggle [checked]=\"isSwipeThreshold\" [(ngModel)]=\"isSwipeThreshold\">swipeThreshold\n        </mat-slide-toggle>\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"swipeThreshold\" min=\"0\" step=\"10\" [disabled]=\"!isSwipeThreshold\"\n            [(ngModel)]=\"swipeThreshold\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-slide-toggle [checked]=\"isDragThreshold\" [(ngModel)]=\"isDragThreshold\">dragThreshold\n        </mat-slide-toggle>\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"dragThreshold\" min=\"0\" step=\"10\" [disabled]=\"!isDragThreshold\"\n            [(ngModel)]=\"dragThreshold\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-slide-toggle [checked]=\"isPerTouch\" [(ngModel)]=\"isPerTouch\">perTouch\n        </mat-slide-toggle>\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"perTouch\" min=\"0\" max=\"5\" [disabled]=\"!isPerTouch\"\n            [(ngModel)]=\"perTouch\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"touchRatio\" min=\"0.1\" max=\"1\" step=\"0.1\" [(ngModel)]=\"touchRatio\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"touchAngle\" min=\"0\" max=\"90\" step=\"5\" [(ngModel)]=\"touchAngle\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"animationDuration\" min=\"100\" max=\"4000\" step=\"100\"\n            [(ngModel)]=\"animationDuration\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-checkbox [(ngModel)]=\"rewind\">\n          rewind\n        </mat-checkbox>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"rewindDuration\" min=\"100\" max=\"4000\" step=\"100\"\n            [(ngModel)]=\"rewindDuration\">\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <mat-label>animationTimingFunc</mat-label>\n          <mat-select name=\"animationTimingFunc\" [(ngModel)]=\"animationTimingFunc\">\n            <mat-option value=\"linear\">\n              linear\n            </mat-option>\n            <mat-option value=\"ease\">\n              ease\n            </mat-option>\n            <mat-option value=\"ease-in\">\n              ease-in\n            </mat-option>\n            <mat-option value=\"ease-out\">\n              ease-out\n            </mat-option>\n            <mat-option value=\"ease-in-out\">\n              ease-in-out\n            </mat-option>\n            <mat-option value=\"cubic-bezier(0.680, -0.550, 0.265, 1.550)\">\n              bounce\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <mat-form-field>\n          <mat-label>direction</mat-label>\n          <mat-select name=\"direction\" [(ngModel)]=\"direction\">\n            <mat-option value=\"ltr\">\n              ltr\n            </mat-option>\n            <mat-option value=\"rtl\">\n              rtl\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"edit-backdrop\">\n        <button mat-raised-button color=\"primary\" (click)=\"reset()\">RESET</button>\n      </div>\n    </div>\n\n    <mat-divider class=\"divider\"></mat-divider>\n\n    <div class=\"monitor mat-elevation-z6\">\n      <ng-container *ngIf=\"logs && logs.length\">\n        <ng-container *ngFor=\"let log of logs\">\n          <b>{{ log.event }}</b> Fired 🔥<span *ngIf=\"log.data\">, data: {{ log.data | json }}</span>\n          <br>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/header.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"mat-elevation-z6\" color=\"primary\">\n  <mat-toolbar-row>\n    <h1>ngx-glide</h1>\n    <span><a mat-button href=\"https://github.com/avivharuzi/ngx-glide\" target=\"_blank\" rel=\"nofollow\"><img\n      src=\"./assets/images/logos/github.svg\" height=\"24px\"> Github</a></span>\n  </mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdml2aGFydXppL0RvY3VtZW50cy9EZXZlbG9wbWVudCBUb29scy9HaXRodWIgUHJvamVjdHMvbmd4LWdsaWRlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzJweDtcbn1cbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAzMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _backdrops_backdrops_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backdrops/backdrops.module */ "./src/app/backdrops/backdrops.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _backdrops_backdrops_module__WEBPACK_IMPORTED_MODULE_5__["BackdropsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/backdrops/backdrops.component.scss":
/*!****************************************************!*\
  !*** ./src/app/backdrops/backdrops.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrops {\n  position: relative;\n  height: 350px;\n  width: 100%;\n}\n.backdrops .backdrop {\n  height: 350px;\n  width: 100%;\n}\n.backdrops .backdrop img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.backdrops .spinner {\n  margin: auto auto;\n}\n.divider {\n  margin: 24px 0;\n}\n.edit-backdrops {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.edit-backdrops .edit-backdrop {\n  padding: 12px;\n  margin-bottom: 24px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n}\n.edit-backdrops .edit-backdrop > :nth-child(2) {\n  margin-top: 16px;\n}\n.monitor {\n  width: 50%;\n  margin: auto auto;\n  height: 500px;\n  overflow-y: auto;\n  background-color: #fff;\n  border: 1px solid #777;\n  padding: 32px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdml2aGFydXppL0RvY3VtZW50cy9EZXZlbG9wbWVudCBUb29scy9HaXRodWIgUHJvamVjdHMvbmd4LWdsaWRlL3NyYy9hcHAvYmFja2Ryb3BzL2JhY2tkcm9wcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFja2Ryb3BzL2JhY2tkcm9wcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ047QURHRTtFQUNFLGlCQUFBO0FDREo7QURLQTtFQUNFLGNBQUE7QUNGRjtBREtBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSxtQkFBQTtNQUFBLGVBQUE7QUNGRjtBREtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7TUFBQSxpQkFBQTtBQ0hKO0FES0k7RUFDRSxnQkFBQTtBQ0hOO0FEUUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9iYWNrZHJvcHMvYmFja2Ryb3BzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tkcm9wcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmJhY2tkcm9wIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW1nIHtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnNwaW5uZXIge1xuICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICB9XG59XG5cbi5kaXZpZGVyIHtcbiAgbWFyZ2luOiAyNHB4IDA7XG59XG5cbi5lZGl0LWJhY2tkcm9wcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cblxuICAuZWRpdC1iYWNrZHJvcCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG5cbiAgICA+IDpudGgtY2hpbGQoMikge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuLm1vbml0b3Ige1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3NztcbiAgcGFkZGluZzogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIiwiLmJhY2tkcm9wcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmFja2Ryb3BzIC5iYWNrZHJvcCB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJhY2tkcm9wcyAuYmFja2Ryb3AgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmFja2Ryb3BzIC5zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG59XG5cbi5kaXZpZGVyIHtcbiAgbWFyZ2luOiAyNHB4IDA7XG59XG5cbi5lZGl0LWJhY2tkcm9wcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZWRpdC1iYWNrZHJvcHMgLmVkaXQtYmFja2Ryb3Age1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbi5lZGl0LWJhY2tkcm9wcyAuZWRpdC1iYWNrZHJvcCA+IDpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ubW9uaXRvciB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xuICBwYWRkaW5nOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/backdrops/backdrops.component.ts":
/*!**************************************************!*\
  !*** ./src/app/backdrops/backdrops.component.ts ***!
  \**************************************************/
/*! exports provided: BackdropsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropsComponent", function() { return BackdropsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackdropsComponent = class BackdropsComponent {
    constructor() {
        this.isLoading = true;
        this.backdrops = [];
        this.reset();
        this.logs = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.backdrops = [...new Array(20).keys()];
            this.isLoading = false;
        }, 2000);
    }
    reset() {
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
    onMountedBefore() {
        this.logs.push({ event: 'mountedBefore' });
    }
    onMountedAfter() {
        this.logs.push({ event: 'mountedAfter' });
    }
    onUpdated() {
        this.logs.push({ event: 'updated' });
    }
    onPlayed() {
        this.logs.push({ event: 'played' });
    }
    onPaused() {
        this.logs.push({ event: 'paused' });
    }
    onBuildedBefore() {
        this.logs.push({ event: 'buildedBefore' });
    }
    onBuildedAfter() {
        this.logs.push({ event: 'buildedAfter' });
    }
    onRanBefore(move) {
        this.logs.push({ event: 'ranBefore', data: move });
    }
    onRan(move) {
        this.logs.push({ event: 'ran', data: move });
    }
    onRanAfter(move) {
        this.logs.push({ event: 'ranAfter', data: move });
    }
    onRanOffset(move) {
        this.logs.push({ event: 'ranOffset', data: move });
    }
    onRunStarted(move) {
        this.logs.push({ event: 'runStarted', data: move });
    }
    onRunEnded(move) {
        this.logs.push({ event: 'runEnded', data: move });
    }
    onMoved(movement) {
        this.logs.push({ event: 'moved', data: movement });
    }
    onMovedAfter(movement) {
        this.logs.push({ event: 'movedAfter', data: movement });
    }
    onResized() {
        this.logs.push({ event: 'resized' });
    }
    onSwipeStarted() {
        this.logs.push({ event: 'swipeStarted' });
    }
    onSwipeMoved() {
        this.logs.push({ event: 'swipeMoved' });
    }
    onSwipeEnded() {
        this.logs.push({ event: 'swipeEnded' });
    }
    onTranslateJumped(movement) {
        this.logs.push({ event: 'translateJumped', data: movement });
    }
};
BackdropsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backdrops',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./backdrops.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/backdrops/backdrops.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./backdrops.component.scss */ "./src/app/backdrops/backdrops.component.scss")).default]
    })
], BackdropsComponent);



/***/ }),

/***/ "./src/app/backdrops/backdrops.module.ts":
/*!***********************************************!*\
  !*** ./src/app/backdrops/backdrops.module.ts ***!
  \***********************************************/
/*! exports provided: BackdropsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropsModule", function() { return BackdropsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var ngx_glide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-glide */ "./dist/ngx-glide/fesm2015/ngx-glide.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _backdrops_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./backdrops.component */ "./src/app/backdrops/backdrops.component.ts");














let BackdropsModule = class BackdropsModule {
};
BackdropsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_backdrops_component__WEBPACK_IMPORTED_MODULE_13__["BackdropsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            ngx_glide__WEBPACK_IMPORTED_MODULE_11__["NgxGlideModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
        ],
        exports: [_backdrops_component__WEBPACK_IMPORTED_MODULE_13__["BackdropsComponent"]]
    })
], BackdropsModule);



/***/ }),

/***/ "./src/app/core/components/header/header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdml2aGFydXppL0RvY3VtZW50cy9EZXZlbG9wbWVudCBUb29scy9HaXRodWIgUHJvamVjdHMvbmd4LWdsaWRlL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7TUFBQSw4QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhci1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iLCJtYXQtdG9vbGJhci1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/core/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");






let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
        ],
        exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/shared/pipes/img.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/pipes/img.pipe.ts ***!
  \******************************************/
/*! exports provided: ImgPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgPipe", function() { return ImgPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImgPipe = class ImgPipe {
    transform(value, extension, prefix) {
        return `./assets/images/${prefix ? prefix + '/' : ''}${value < 10 ? '0' + value : value}.${extension}`;
    }
};
ImgPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'img'
    })
], ImgPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pipes_img_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/img.pipe */ "./src/app/shared/pipes/img.pipe.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_img_pipe__WEBPACK_IMPORTED_MODULE_3__["ImgPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_pipes_img_pipe__WEBPACK_IMPORTED_MODULE_3__["ImgPipe"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/avivharuzi/Documents/Development Tools/Github Projects/ngx-glide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map