import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AsistenciasService } from '../../services/asistencias.service';

@Component({
  selector: 'app-set-courses',
  templateUrl: './set-courses.page.html',
  styleUrls: ['./set-courses.page.scss'],
})
export class SetCoursesPage implements OnInit {

  formCurso: FormGroup; 
  email: any = localStorage.getItem("email");

  usuario = {
    "id": 0,
    "nombre": "",
    "correo": "",
    "cursos": {}
  }

  constructor(private alertController: AlertController,
              private navController: NavController,
              private asistenciasService: AsistenciasService,
              private fb: FormBuilder) { 
                this.formCurso = this.fb.group({
                  'curso' : new FormControl("", Validators.required)
                })
              }

  ngOnInit() {
  }

  /*
  isTeacher(email: string | null) {    
    var r = new RegExp('^([a-zA-Z0-9_\.]+)@(profesor\.duoc)\.cl$');
    if(r.test(email)) {
      this.setTeacher();

    } else {
      this.setStudent();
    }
  }
  setTeacher(){}
  setStudent(){}
  */

  async setCourses(){
      var form = this.formCurso.value;
  
      if (this.formCurso.invalid) {
        this.alertMsg('Completar el campo');
  
      } else {
        let curso = form.curso.toUpperCase();
        var r = new RegExp('^([a-zA-Z]{3}[0-9_\.]{4})$');

        if(r.test(curso)) {
          this.agregar(curso);
          this.alertMsg('Clase ingresada');

        } else {
          this.alertMsg('Clase invalida');
        }
      }
  }
  
  agregar(newCurso: string){
    this.asistenciasService.getUserByCorreo(this.email).subscribe(
      (resp: any)=> {
        const clases = [];
        let respString = JSON.parse(JSON.stringify(resp));   
        let c = [];
        
        c.push(newCurso);
        c.push(0);
        clases.push(c);
        
        if(respString.length > 0) { //si hay otras clases
          let i = 0; 
          while (Object.keys(resp[0].cursos)[i]) {
            let c = [];
            let key = Object.keys(resp[0].cursos)[i];
            let value = Object.values(resp[0].cursos)[i];
            c.push(key);
            c.push(value);
            clases.push(c);
            i += 1;
          }     
        }
        const obj = Object.fromEntries(clases);
        
        this.usuario = {
            id: resp[0].id, 
            nombre: resp[0].nombre,
            correo: resp[0].correo,
            cursos: obj
          }
          console.log(this.usuario);
          this.asistenciasService.actualizarUser(this.usuario).subscribe();
      })
  }

  terminar(){
    this.navController.navigateRoot('/login');
  }

  async alertMsg(msg: string){
    const alert = await this.alertController.create({ 
      header: msg,
      buttons: ['Aceptar']
    })
    await alert.present();
  }

}
