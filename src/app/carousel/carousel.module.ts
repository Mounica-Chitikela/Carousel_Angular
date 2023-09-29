import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselsComponent } from './carousels.component';



@NgModule({
  declarations: [
    CarouselsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselsComponent
  ]
})
export class CarouselModule { }
