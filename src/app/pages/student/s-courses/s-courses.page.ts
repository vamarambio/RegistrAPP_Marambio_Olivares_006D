import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-s-courses',
  templateUrl: './s-courses.page.html',
  styleUrls: ['./s-courses.page.scss'],
})
export class SCoursesPage implements OnInit {

  constructor(private menuController: MenuController) { }


  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
