import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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
  
  menuPages: Pages[] = [];

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
      icon: 'sparkles-outline',
      name: 'Sobre Nosotros',
      redirect:'/about-us',
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
      icon: 'sparkles-outline',
      name: 'Sobre Nosotros',
      redirect:'/about-us',
    },
  ];

  constructor(private navController: NavController) {
    this.setMenuPages(); 
  }

  setMenuPages(){
    if (localStorage.getItem("student")) {
      this.menuPages = this.sPages;

    } else if (localStorage.getItem("teacher")){
      this.menuPages = this.tPages;
    }
  }

  Salir(){
    localStorage.clear();
  }

}
