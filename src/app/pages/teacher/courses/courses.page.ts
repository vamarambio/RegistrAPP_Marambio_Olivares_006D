import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Pages{
  name: string;
  redirect: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  showMenu(){
    this.menuController.open('first');
  }

  pages: Pages[] = [
    {
      name: 'Curso',
      redirect: '/course',
    },
  ];
}
