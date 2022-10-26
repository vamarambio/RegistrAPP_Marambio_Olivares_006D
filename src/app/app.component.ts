import { Component } from '@angular/core';

interface Pages{
  icon: string;
  name: string;
  redirect: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  sPages: Pages[] = [ 
    {
      icon: 'person-outline',
      name: 'Inicio',
      redirect: '/s-profile',
    },
    {
      icon: 'time-outline',
      name: 'Mis Asistencias',
      redirect: '/s-courses',
    },
    {
      icon: 'scan-outline',
      name: 'Escanear QR',
      redirect:'/qr',
    },
    {
      icon: 'calendar-outline',
      name: 'Calendario',
      redirect: '/calendar',
    },
    {
      icon: 'sparkles-outline',
      name: 'Sobre Nosotros',
      redirect:'/about-us',
    },
    {
      icon: 'exit-outline',
      name: 'Salir',
      redirect:'/home',
    },
  ];

  tPages: Pages[] = [
    {
      icon: 'person-outline',
      name: 'Inicio',
      redirect: '/t-profile',
    },
    {
      icon: 'briefcase-outline',
      name: 'Mis Cursos',
      redirect: '/t-courses',
    },
    {
      // icon: 'information-circle-outline',
      icon: 'sparkles-outline',
      name: 'Sobre Nosotros',
      redirect:'/about-us',
    },
    {
      icon: 'exit-outline',
      name: 'Salir',
      redirect:'/home',
    },
  ];
}
