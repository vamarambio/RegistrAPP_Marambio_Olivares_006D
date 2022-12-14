import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetCoursesPageRoutingModule } from './set-courses-routing.module';

import { SetCoursesPage } from './set-courses.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SetCoursesPageRoutingModule
  ],
  declarations: [SetCoursesPage]
})
export class SetCoursesPageModule {}
