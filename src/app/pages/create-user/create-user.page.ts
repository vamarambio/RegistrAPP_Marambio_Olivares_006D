import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { IAsistencia } from '../../interfaces/interfaces'
import { AsistenciasService } from 'src/app/services/asistencias.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  formularioRegistro: FormGroup; 
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] = []; 

  newUser: IAsistencia = {
    nombre: "",
    correo: "",
    cursos: {}
  }
  
  constructor(private alertController: AlertController,
              private registroService: RegistroserviceService,
              private asistenciasService: AsistenciasService,          
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

        this.newUser = {
          nombre: form.nombre,
          correo: form.correo,
          cursos: {}
        }
        
        this.registroService.getUsers().then(datos=>{
          this.usuarios = datos;
          if (!datos || datos.length == 0) {
            localStorage.setItem('email', form.correo);
            localStorage.setItem('name', form.nombre);
            localStorage.setItem('password', form.contrasena);
            this.addUserJS(form.correo);
            this.registroService.addUser(this.newUsuario).then(dato=>{ 
              this.newUsuario = <Usuario>{};
              this.navController.navigateRoot('/set-courses');
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
              this.addUserJS(form.correo);
              this.registroService.addUser(this.newUsuario).then(dato=>{ 
                this.newUsuario = <Usuario>{};
                
                if(this.isTeacher(form.correo)) {
                  localStorage.setItem('teacher','true');
                  this.navController.navigateRoot('t-profile');
                } else {
                  localStorage.setItem('student','true');
                  this.navController.navigateRoot('s-profile');
                }
                localStorage.setItem('email', form.correo);
                localStorage.setItem('name', form.nombre);
                localStorage.setItem('password', form.contrasena);

                this.navController.navigateRoot('/set-courses');
                // this.navController.navigateRoot('/login');
              });
            }
          }
        })
        
      } else {
        this.alertMsg('Las contraseñas no coinciden');
      }
    }
  }

  addUserJS(correo: string) {
    this.asistenciasService.getUserByCorreo(correo).subscribe(
      (resp) => {
        let respString = JSON.parse(JSON.stringify(resp));   
        
        if(respString.length <= 0) {
          this.asistenciasService.addUser(this.newUser).subscribe();
        }
      }
    )
  } 

  async alertMsg(msg: string){
    const alert = await this.alertController.create({ 
      header: msg,
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  isTeacher(email: string) {    
    var r = new RegExp('^([a-zA-Z0-9_\.]+)@(profesor\.duoc)\.cl$');
    return r.test(email);
  }
}
