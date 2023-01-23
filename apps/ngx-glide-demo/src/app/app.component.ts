import { Component } from '@angular/core';

import { BackdropsComponent } from './backdrops/backdrops.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, BackdropsComponent],
  selector: 'ngx-glide-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
