import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ImgPipe } from './pipes/img.pipe';

@NgModule({
  declarations: [ImgPipe],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, ImgPipe],
})
export class SharedModule {}
