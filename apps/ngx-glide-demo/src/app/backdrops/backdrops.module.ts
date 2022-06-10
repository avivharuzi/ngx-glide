import { NgModule } from '@angular/core';

import { NgxGlideModule } from 'ngx-glide';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BackdropsComponent } from './backdrops.component';

@NgModule({
  declarations: [BackdropsComponent],
  imports: [MaterialModule, NgxGlideModule, SharedModule],
  exports: [BackdropsComponent],
})
export class BackdropsModule {}
