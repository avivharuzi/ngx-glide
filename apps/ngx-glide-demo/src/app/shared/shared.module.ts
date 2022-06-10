import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ImgPipe } from './pipes/img.pipe';

@NgModule({
  declarations: [ImgPipe],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, ImgPipe],
})
export class SharedModule {}
