import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { StudentguardGuard } from './guards/studentguard.guard';
import { TeacherguardGuard } from './guards/teacherguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // Rutas universales
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/create-user/create-user.module').then( m => m.CreateUserPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule),
  },
  {
    path: 'r-password',
    loadChildren: () => import('./pages/r-password/r-password.module').then( m => m.RPasswordPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule),
  },  
  {
    path: 'set-courses',
    loadChildren: () => import('./pages/set-courses/set-courses.module').then( m => m.SetCoursesPageModule)
  },

  // Rutas de estudiante
  {
    path: 's-profile',
    loadChildren: () => import('./pages/student/s-profile/s-profile.module').then( m => m.SProfilePageModule),
    canActivate: [StudentguardGuard]
  },
  {
    path: 's-courses',
    loadChildren: () => import('./pages/student/s-courses/s-courses.module').then( m => m.SCoursesPageModule),
    canActivate: [StudentguardGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/student/qr/qr.module').then( m => m.QrPageModule),
    canActivate: [StudentguardGuard]
  },
  // Rutas de profesor
  {
    path: 't-profile',
    loadChildren: () => import('./pages/teacher/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [TeacherguardGuard]
  },
  {
    path: 't-courses',
    loadChildren: () => import('./pages/teacher/courses/courses.module').then( m => m.CoursesPageModule),
    canActivate: [TeacherguardGuard]
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/teacher/course/course.module').then( m => m.CoursePageModule),
    canActivate: [TeacherguardGuard]
  },
  {
    path: 'class',
    loadChildren: () => import('./pages/teacher/class/class.module').then( m => m.ClassPageModule),
    canActivate: [TeacherguardGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
