import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
}) 
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController, 
              private navController: NavController,
              private registroService: RegistroserviceService, 
              private appComponent: AppComponent,
              private fb: FormBuilder) { 
                this.formularioLogin = this.fb.group({ 
                  'correo' : new FormControl("", Validators.required),
                  'contrasena' : new FormControl ("", Validators.required)                
                })
              }

  ngOnInit() {
  }

  async Ingresar() {
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsers().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length == 0) {
          return null;
      }
      for (let obj of this.usuarios) {
        if (f.correo.toLowerCase() == obj.userEmail.toLowerCase() && f.contrasena == obj.userPassword){
          a = 1;
          
          if(this.isTeacher(obj.userEmail)) {
            localStorage.setItem('teacher','true');
            this.navController.navigateRoot('t-profile');
          } else {
            localStorage.setItem('student','true');
            this.navController.navigateRoot('s-profile');
          }
          this.appComponent.setMenuPages();
          localStorage.setItem('name',obj.userName);
          localStorage.setItem('email',obj.userEmail);
          localStorage.setItem('password',obj.userPassword);
        }
      } 
      if(a == 0) {
        this.alertMsg();
      }
    });
  } 

  isTeacher(email: string) {    
    var r = new RegExp('^([a-zA-Z0-9_\.]+)@(profesor\.duoc)\.cl$');
    return r.test(email);
  }

  async alertMsg() {
    const alert = await this.alertController.create({
      header: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }


}
