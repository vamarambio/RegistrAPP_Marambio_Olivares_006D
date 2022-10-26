import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Rutas universales
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'r-password',
    loadChildren: () => import('./pages/r-password/r-password.module').then( m => m.RPasswordPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  // Rutas de estudiante
  {
    path: 's-profile',
    loadChildren: () => import('./pages/student/s-profile/s-profile.module').then( m => m.SProfilePageModule)
  },
  {
    path: 's-courses',
    loadChildren: () => import('./pages/student/s-courses/s-courses.module').then( m => m.SCoursesPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/student/qr/qr.module').then( m => m.QrPageModule)
  },
  // Rutas de profesor
  {
    path: 't-profile',
    loadChildren: () => import('./pages/teacher/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 't-courses',
    loadChildren: () => import('./pages/teacher/courses/courses.module').then( m => m.CoursesPageModule)
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
