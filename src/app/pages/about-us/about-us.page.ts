import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(private menuController: MenuController) { }
  
  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  } 
}
