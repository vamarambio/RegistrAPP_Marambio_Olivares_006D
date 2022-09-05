import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/teacher/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/teacher/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/teacher/course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./pages/teacher/class/class.module').then( m => m.ClassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
