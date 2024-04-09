# ngx-glide

Angular wrapper component of [Glide](https://glidejs.com) carousel library.

![npm](https://img.shields.io/npm/v/ngx-glide) ![NPM](https://img.shields.io/npm/l/ngx-glide) ![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-glide)

## Environment Support

- Angular 6+
- Server-side Rendering

## Compatibility

Versions compatibility list:

| ngx-glide | Angular       | @glidejs/glide |
| --------- | ------------- | -------------- |
| 17.x.x    | 17.x.x        | 3.x.x          |
| 16.x.x    | 16.x.x        | 3.x.x          |
| 15.x.x    | 15.x.x        | 3.x.x          |
| 14.x.x    | 14.x.x        | 3.x.x          |
| 13.x.x    | 13.x.x        | 3.x.x          |
| 12.x.x    | 12.x.x        | 3.x.x          |
| 11.x.x    | 11.x.x        | 3.x.x          |
| 10.x.x    | 10.x.x        | 3.x.x          |
| 1.x.x     | 6.x.x - 9.x.x | 3.x.x          |

## Installation

```sh
npm i @glidejs/glide@3 ngx-glide
```

## Demo

[Demo page](https://avivharuzi.github.io/ngx-glide)

## Usage

Add scss files to the `styles` section of your `angular.json`:

```json
"styles": [
  "src/styles.scss",
  "node_modules/@glidejs/glide/src/assets/sass/glide.core",
  "node_modules/@glidejs/glide/src/assets/sass/glide.theme"
],
```

You can either import the `styles` files into main scss file:

```scss
@use '@glidejs/glide/src/assets/sass/glide.core' as *;
@use '@glidejs/glide/src/assets/sass/glide.theme' as *;
```

Import `NgxGlideModule` into the current module's imports:

```ts
import { NgxGlideModule } from 'ngx-glide';

imports: [
  // ...
  NgxGlideModule,
],
```

You can also import `NgxGlideComponent` as standalone component:

```ts
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  standalone: true,
  imports: [NgxGlideComponent],
  // ...
})
export class MyComponent {}
```

Use in your components (add html items into the ngx-glide component):

```html
<ngx-glide>
  <div>0</div>
  <div>1</div>
  <div>2</div>
</ngx-glide>
```

You can also access to the component instance directly like this:

```ts
// Get the component instance.
@ViewChild(NgxGlideComponent, { static: false }) ngxGlide: NgxGlideComponent;

play(): void {
  this.ngxGlide.play();
}
```

Update the carousel items dynamically (**only available from version 12**).

```html
<ng-container *ngIf="names && names.length > 0">
  <ngx-glide #ngxGlide>
    <ng-container *ngFor="let name of names">
      <div>{{ name }}</div>
    </ng-container>
  </ngx-glide>
</ng-container>
```

```ts
// Get the component instance.
@ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

names: string[];

constructor() {
  this.names = ['Johny Depp', 'Christian Bale'];
}

updateItems(): void {
  this.names = [...this.names, 'Tom Hanks'];
  if (this.ngxGlide) {
    this.ngxGlide.recreate();
  }
}
```

## API

### Inputs

| Input                 | Type                  | Default                                      | Description                                                                                |
| --------------------- | --------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `showArrows`          | boolean               | `true`                                       | Indicates if to show arrows in the view or not.                                            |
| `showBullets`         | boolean               | `true`                                       | Indicates if to show bullets in the view or not.                                           |
| `arrowLeftLabel`      | string                | `'prev'`                                     | The label presented in the arrow left side.                                                |
| `arrowLeftTemplate`   | TemplateRef           | `null`                                       | Custom HTML (TemplateRef) to use for arrow left this disable the default.                  |
| `arrowRightLabel`     | string                | `'next'`                                     | The label presented in the arrow right side.                                               |
| `arrowRightTemplate`  | TemplateRef           | `null`                                       | Custom HTML (TemplateRef) to use for arrow right this disable the default.                 |
| `listenToEvents`      | boolean               | `false`                                      | If you need to get output events set it to true (by default is false to save performance). |
| `type`                | string                | `'slider'`                                   | Type of the movement.                                                                      |
| `startAt`             | number                | `0`                                          | Start at specific slide number.                                                            |
| `perView`             | number                | `1`                                          | A number of visible slides.                                                                |
| `focusAt`             | number &#124; string  | `0`                                          | Focus currently active slide at a specified position.                                      |
| `gap`                 | number                | `10`                                         | A size of the space between slide.                                                         |
| `autoplay`            | number &#124; boolean | `false`                                      | Change slides after a specified interval.                                                  |
| `hoverpause`          | boolean               | `true`                                       | Stop autoplay on mouseover.                                                                |
| `keyboard`            | boolean               | `true`                                       | Change slides with keyboard arrows.                                                        |
| `bound`               | boolean               | `false`                                      | Stop running `perView` number of slides from the end.                                      |
| `swipeThreshold`      | number &#124; boolean | `80`                                         | Minimal swipe distance needed to change the slide.                                         |
| `dragThreshold`       | number &#124; boolean | `120`                                        | Minimal mousedrag distance needed to change the slide.                                     |
| `perTouch`            | number &#124; boolean | `false`                                      | A maximum number of slides moved per single swipe or drag.                                 |
| `touchRatio`          | number                | `0.5`                                        | Alternate moving distance ratio of swiping and dragging.                                   |
| `touchAngle`          | number                | `45`                                         | Angle required to activate slides moving.                                                  |
| `animationDuration`   | number                | `400`                                        | Easing function for the animation.                                                         |
| `rewind`              | boolean               | `true`                                       | Allow looping the `slider` type.                                                           |
| `rewindDuration`      | number                | `800`                                        | Duration of the rewinding animation.                                                       |
| `animationTimingFunc` | string                | `'cubic-bezier(0.165, 0.840, 0.440, 1.000)'` | Easing function for the animation.                                                         |
| `direction`           | string                | `'ltr'`                                      | Moving direction mode.                                                                     |
| `peek`                | number &#124; object  | `0`                                          | The value of the future viewports which have to be visible in the current view.            |
| `breakpoints`         | object                | `{}`                                         | Collection of options applied at specified media breakpoints.                              |
| `throttle`            | number                | `25`                                         | Throttle costly events                                                                     |

## Outputs

| Output            | Event Type | Example                            | Description                                                                                                                                                                |
| ----------------- | ---------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mountedBefore`   | void       |                                    | Called before first mounting begins. However, the mounting phase has not been started, and components are not bootstrapped yet.                                            |
| `mountedAfter`    | void       |                                    | Called right after first mounting. All components have been mounted.                                                                                                       |
| `updated`         | void       |                                    | Called right after updating settings with update() API method.                                                                                                             |
| `played`          | void       |                                    | Called right after starting an instance with play() API method.                                                                                                            |
| `paused`          | void       |                                    | Called right after stopping instance with pause() API method.                                                                                                              |
| `buildedBefore`   | void       |                                    | Called right before setting up a slider to its initial state. At this point, classes, translations, and sizes are applied.                                                 |
| `buildedAfter`    | void       |                                    | Called right after setting up a slider to its initial state. At this point, classes, translations, and sizes are applied.                                                  |
| `ranBefore`       | object     | `{ "direction": ">", "steps": 0 }` | Called right before calculating new index and making a transition. The movement schema (eg. `=1`) string has been parsed.                                                  |
| `ran`             | object     | `{ "direction": ">", "steps": 0 }` | Called right after calculating new index and before making a transition. The movement schema (eg. `=1`) string has been parsed.                                            |
| `ranAfter`        | object     | `{ "direction": ">", "steps": 0 }` | Called after calculating new index and making a transition. The movement schema (eg. `=1`) string has been parsed.                                                         |
| `ranOffset`       | object     | `{ "direction": ">", "steps": 0 }` | Called after calculating new index and making a transition, while we did an offset animation. Offset animation take place at two moments.                                  |
| `runStarted`      | object     | `{ "direction": ">", "steps": 0 }` | Called right after calculating the new index, but before making a transition, while we did a rewinding to the start index.                                                 |
| `runEnded`        | object     | `{ "direction": ">", "steps": 0 }` | Called right after calculating the new index, but before making a transition, while we did a rewinding to the last index.                                                  |
| `moved`           | object     | `{ "movement": 0 }`                | Called right before movement transition begins.                                                                                                                            |
| `movedAfter`      | object     | `{ "movement": 0 }`                | Called right after movement transition ends.                                                                                                                               |
| `resized`         | void       |                                    | Called when the window is being resized. This event throttled.                                                                                                             |
| `swipeStarted`    | void       |                                    | Called right after swiping begins.                                                                                                                                         |
| `swipeMoved`      | void       |                                    | Called during swiping movement.                                                                                                                                            |
| `swipeEnded`      | void       |                                    | Called right after swiping ends.                                                                                                                                           |
| `translateJumped` | object     |                                    | Called right before a translate applies, while we doing a jump to the first or last slide from offset movement. This event is only used when a type is set up to carousel. |

# License

[MIT](LICENSE)
