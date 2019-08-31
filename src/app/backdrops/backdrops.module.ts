import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgxGlideModule } from 'ngx-glide';

import { SharedModule } from '../shared/shared.module';

import { BackdropsComponent } from './backdrops.component';

@NgModule({
  declarations: [BackdropsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    NgxGlideModule,
    SharedModule
  ],
  exports: [BackdropsComponent]
})
export class BackdropsModule { }
