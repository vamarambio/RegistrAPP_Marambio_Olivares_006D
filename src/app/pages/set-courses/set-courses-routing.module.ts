import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetCoursesPage } from './set-courses.page';

const routes: Routes = [
  {
    path: '',
    component: SetCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetCoursesPageRoutingModule {}
