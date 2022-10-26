import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name: any = localStorage.getItem("name");
  email: any = localStorage.getItem("email");
  
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  showMenu(){
    this.menuController.open("first");
  }
}
