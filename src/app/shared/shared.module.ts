import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgPipe } from './pipes/img.pipe';

@NgModule({
  declarations: [ImgPipe],
  imports: [CommonModule],
  exports: [ImgPipe],
})
export class SharedModule {}
