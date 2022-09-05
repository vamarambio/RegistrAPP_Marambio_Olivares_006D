import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(private alertController: AlertController, private menuController: MenuController) { }
  
  mostrarMenu(){
    this.menuController.open('first');
  } 
  
  ngOnInit() {
  }

  async input() {
    const alert = await this.alertController.create({
      header: 'Cambiar contraseña',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Contraseña anterior',
        },
        {
          placeholder: 'Contraseña nueva',
        },
        {
          placeholder: 'Repetir contraseña nueva',
        },

      ],
    });

    await alert.present();
  }

}
