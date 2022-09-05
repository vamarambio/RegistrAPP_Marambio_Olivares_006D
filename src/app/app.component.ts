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


  componentes: Componente[] = [ 
    {
      icon: 'person-outline',
      name: 'Inicio',
      redirecTo: '/s-profile',
    },
    {
      icon: 'time-outline',
      name: 'Asistencia cursos',
      redirecTo: '/s-courses',
    },
    {
      icon: 'scan-outline',
      name: 'Escanear QR',
      redirecTo:'/qr',
    },
    {
      // icon: 'information-circle-outline',
      icon: 'sparkles-outline',
      name: 'Sobre Nosotr@s',
      redirecTo:'/about-us',
    },
    {
      icon: 'exit-outline',
      name: 'Salir',
      redirecTo:'/home',
    },
  ];

  pages: Pages[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirect: 'home',
    },
  ];

  tPages: Pages[] = [
    {
      icon: 'person-outline',
      name: 'Perfil',
      redirect: 'profile',
    },
    {
      icon: 'briefcase-outline',
      name: 'Cursos',
      redirect: 'courses',
    },
  ];
}
