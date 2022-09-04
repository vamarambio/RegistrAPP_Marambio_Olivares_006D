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

  pages: Pages[] = [
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
