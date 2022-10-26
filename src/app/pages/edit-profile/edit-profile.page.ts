import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  name: any = localStorage.getItem("name");
  email: any = localStorage.getItem("email");

  constructor(private alertController: AlertController, private menuController: MenuController) { }
  
  mostrarMenu(){
    this.menuController.open('first');
  } 
  
  ngOnInit() {
  }

  async input() {
    const alert = await this.alertController.create({
      header: 'Cambiar contraseña',
      inputs: [
        { name: "anterior",
          placeholder: 'Contraseña anterior',
        },
        { name: "nueva",
          placeholder: 'Contraseña nueva',
        },
        {
          name: "rnueva",
          placeholder: 'Repetir contraseña nueva',
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: (alertData) => {
            if(localStorage.getItem("password") == alertData.anterior) {

              if (alertData.nueva == alertData.rnueva) {
                localStorage.setItem("password", alertData.nueva);
                this.alertMsg("Listo");

              } else {
                this.alertMsg("Las contraseñas no coinciden");
              }

            } else {
              this.alertMsg("Contraseña anterior incorrecta");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async alertMsg(msg) {
    const alert = await this.alertController.create({
      header: msg,
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }
  

}
