import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  showMenu(){
    this.menuController.open("first");
  }
}
