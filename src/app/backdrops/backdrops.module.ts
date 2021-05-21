import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { NgxGlideModule } from '../../../projects/ngx-glide/src/lib/ngx-glide.module';

import { SharedModule } from '../shared/shared.module';

import { BackdropsComponent } from './backdrops.component';

@NgModule({
  declarations: [BackdropsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    NgxGlideModule,
    SharedModule,
  ],
  exports: [BackdropsComponent],
})
export class BackdropsModule {}
