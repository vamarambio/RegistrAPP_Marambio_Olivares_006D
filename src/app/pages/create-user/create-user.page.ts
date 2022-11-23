import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  formularioRegistro: FormGroup; 
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] =[]; 

  constructor(private alertController: AlertController,
              private registroService: RegistroserviceService,
              private navController: NavController, 
              private fb:FormBuilder) { 
                this.formularioRegistro = this.fb.group({
                  'nombre' : new FormControl("", Validators.required), 
                  'correo' : new FormControl("", Validators.required), 
                  'contrasena': new FormControl("", Validators.required), 
                  'repcontrasena': new FormControl("", Validators.required)
                })
              }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    var existe = 0;

    if (this.formularioRegistro.invalid) {
      this.alertMsg('Completar todos los campos');

    } else {
      if (form.contrasena == form.repcontrasena) {
        this.newUsuario.userName = form.nombre;
        this.newUsuario.userEmail = form.correo;
        this.newUsuario.userPassword = form.contrasena;
        this.newUsuario.rPassword = form.repcontrasena;

        this.registroService.getUsers().then(datos=>{
          this.usuarios = datos;
          if (!datos || datos.length == 0) {
            this.registroService.addUser(this.newUsuario).then(dato=>{ 
              this.newUsuario = <Usuario>{};
            });
            
          } else {
            for (let obj of this.usuarios) {
              if (this.newUsuario.userEmail.toLowerCase() == obj.userEmail.toLowerCase()) {
                existe = 1;
              }
            }
            if (existe == 1) {
              this.alertMsg("Este correo ya existe")

            } else {
              this.registroService.addUser(this.newUsuario).then(dato=>{ 
                this.newUsuario = <Usuario>{};
                this.navController.navigateRoot('/login');
              });
            }
          }
        })
        
      } else {
        this.alertMsg('Las contraseñas no coinciden');
      }
    }
  }

  async alertMsg(msg: string){
    const alert = await this.alertController.create({ 
      header: msg,
      buttons: ['Aceptar']
    })
    await alert.present();
  }

}
