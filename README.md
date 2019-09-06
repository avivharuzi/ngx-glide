# ngx-glide

Angular wrapper component of [Glide](https://glidejs.com) carousel library.

## Installation

```sh
npm i @glidejs/glide ngx-glide
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

Import `NgxGlideModule` into the current module's imports:

```ts
import { NgxGlideModule } from 'ngx-glide';

imports: [
  // ...
  NgxGlideModule,
],
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
@ViewChild(NgxGlideComponent) ngxGlide: NgxGlideComponent;

play(): void {
  this.ngxGlide.play();
}
```

## API

### Inputs

| Input                 | Type              | Default                                      | Description                                                                                |
| --------------------- | ----------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `showArrows`          | Boolean           | `true`                                       | Indicates if to show arrows in the view or not.                                            |
| `showBullets`         | Boolean           | `true`                                       | Indicates if to show bullets in the view or not.                                           |
| `arrowLeftLabel`      | String            | `'prev'`                                     | The label presented in the arrow left side.                                                |
| `arrowRightLabel`     | String            | `'next'`                                     | The label presented in the arrow right side.                                               |
| `listenToEvents`      | Boolean           | `false`                                      | If you need to get output events set it to true (by default is false to save performance). |
| `type`                | String            | `'slider'`                                   | Type of the movement.                                                                      |
| `startAt`             | Number            | `0`                                          | Start at specific slide number.                                                            |
| `perView`             | Number            | `1`                                          | A number of visible slides.                                                                |
| `focusAt`             | Number or String  | `0`                                          | Focus currently active slide at a specified position.                                      |
| `gap`                 | Number            | `10`                                         | A size of the space between slide.                                                         |
| `autoplay`            | Number or Boolean | `false`                                      | Change slides after a specified interval.                                                  |
| `hoverpause`          | Boolean           | `true`                                       | Stop autoplay on mouseover.                                                                |
| `keyboard`            | Boolean           | `true`                                       | Change slides with keyboard arrows.                                                        |
| `bound`               | Boolean           | `false`                                      | Stop running `perView` number of slides from the end.                                      |
| `swipeThreshold`      | Number or Boolean | `80`                                         | Minimal swipe distance needed to change the slide.                                         |
| `dragThreshold`       | Number or Boolean | `120`                                        | Minimal mousedrag distance needed to change the slide.                                     |
| `perTouch`            | Number or Boolean | `false`                                      | A maximum number of slides moved per single swipe or drag.                                 |
| `touchRatio`          | Number            | `0.5`                                        | Alternate moving distance ratio of swiping and dragging.                                   |
| `touchAngle`          | Number            | `45`                                         | Angle required to activate slides moving.                                                  |
| `animationDuration`   | Number            | `400`                                        | Easing function for the animation.                                                         |
| `rewind`              | Boolean           | `true`                                       | Allow looping the `slider` type.                                                           |
| `rewindDuration`      | Number            | `800`                                        | Duration of the rewinding animation.                                                       |
| `animationTimingFunc` | String            | `'cubic-bezier(0.165, 0.840, 0.440, 1.000)'` | Easing function for the animation.                                                         |
| `direction`           | String            | `'ltr'`                                      | Moving direction mode.                                                                     |
| `peek`                | Number or object  | `0`                                          | The value of the future viewports which have to be visible in the current view.            |
| `breakpoints`         | Object            | `{}`                                         | Collection of options applied at specified media breakpoints.                              |
| `throttle`            | Number            | `25`                                         | Throttle costly events                                                                     |

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
| `ranBefore`       | Object     | `{ "direction": ">", "steps": 0 }` | Called right before calculating new index and making a transition. The movement schema (eg. `=1`) string has been parsed.                                                  |
| `ran`             | Object     | `{ "direction": ">", "steps": 0 }` | Called right after calculating new index and before making a transition. The movement schema (eg. `=1`) string has been parsed.                                            |
| `ranAfter`        | Object     | `{ "direction": ">", "steps": 0 }` | Called after calculating new index and making a transition. The movement schema (eg. `=1`) string has been parsed.                                                         |
| `ranOffset`       | Object     | `{ "direction": ">", "steps": 0 }` | Called after calculating new index and making a transition, while we did an offset animation. Offset animation take place at two moments.                                  |
| `runStarted`      | Object     | `{ "direction": ">", "steps": 0 }` | Called right after calculating the new index, but before making a transition, while we did a rewinding to the start index.                                                 |
| `runEnded`        | Object     | `{ "direction": ">", "steps": 0 }` | Called right after calculating the new index, but before making a transition, while we did a rewinding to the last index.                                                  |
| `moved`           | Object     | `{ "movement": 0 }`                | Called right before movement transition begins.                                                                                                                            |
| `movedAfter`      | Object     | `{ "movement": 0 }`                | Called right after movement transition ends.                                                                                                                               |
| `resized`         | void       |                                    | Called when the window is being resized. This event throttled.                                                                                                             |
| `swipeStarted`    | void       |                                    | Called right after swiping begins.                                                                                                                                         |
| `swipeMoved`      | void       |                                    | Called during swiping movement.                                                                                                                                            |
| `swipeEnded`      | void       |                                    | Called right after swiping ends.                                                                                                                                           |
| `translateJumped` | Object     |                                    | Called right before a translate applies, while we doing a jump to the first or last slide from offset movement. This event is only used when a type is set up to carousel. |

# License

[MIT](LICENSE)
