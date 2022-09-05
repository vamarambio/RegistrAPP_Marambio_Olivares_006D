import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Pages{
  name: string;
  redirect: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  showMenu(){
    this.menuController.open("first");
  }

  pages: Pages[] = [
    {
      name: 'Clase',
      redirect: '/class',
    },
  ];
}
