import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents:[HomeComponent]
})
export class HomeModule {
  static entry = HomeComponent

 }
