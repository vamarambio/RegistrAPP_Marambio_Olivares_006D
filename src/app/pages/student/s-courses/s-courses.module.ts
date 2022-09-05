import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCoursesPageRoutingModule } from './s-courses-routing.module';

import { SCoursesPage } from './s-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCoursesPageRoutingModule
  ],
  declarations: [SCoursesPage]
})
export class SCoursesPageModule {}
