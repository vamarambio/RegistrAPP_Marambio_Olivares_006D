import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.page.html',
  styleUrls: ['./s-profile.page.scss'],
})
export class SProfilePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  } 
}
