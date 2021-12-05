import { NgModule } from '@angular/core';
import { NgxGlideModule } from 'ngx-glide';

import { BackdropsComponent } from './backdrops.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BackdropsComponent],
  imports: [MaterialModule, NgxGlideModule, SharedModule],
  exports: [BackdropsComponent],
})
export class BackdropsModule {}
