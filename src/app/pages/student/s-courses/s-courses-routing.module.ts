import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCoursesPage } from './s-courses.page';

const routes: Routes = [
  {
    path: '',
    component: SCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCoursesPageRoutingModule {}
