import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, InfiniteScrollCustomEvent, NavController } from '@ionic/angular';
import { AsistenciasService } from '../../../services/asistencias.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  alumnos: any[] = [];
  class: any = localStorage.getItem("class");
  email: any = localStorage.getItem("email");

  usuario = {
    "id": 0,
    "nombre": "",
    "correo": "",
    "cursos": {}
  }
  
  constructor(private menuController: MenuController,
              private asistenciasService: AsistenciasService,
              private loadCtrl: LoadingController,
              private navController: NavController) { }
    
    ngOnInit() {
      this.loadAlumnos();
    }
   
    async loadAlumnos (event?: InfiniteScrollCustomEvent) {
      const loading = await this.loadCtrl.create({
        message: "Cargando...",
        spinner: "dots" 
      });
      await loading.present();
      
      this.alumnos = this.asistenciasService.listarAlumnosenCurso(this.class);

      loading.dismiss();
      event?.target.complete();
  
    }
    
  iniciarClase(){
    // console.log(this.class);
    this.asistenciasService.getUserByCorreo(this.email).subscribe(
      (resp: any)=> {
        const clases = [];
        let i = 0; 
        // buscar la clase unu
        while (Object.keys(resp[0].cursos)[i]) {
          let c = [];
          let key = Object.keys(resp[0].cursos)[i];
          let value = Object.values(resp[0].cursos)[i];
          c.push(key);
          if (key == this.class){
            let n : number = Number(value);
            c.push(n+1);
            
          } else {
            c.push(value);
          }
         clases.push(c);
         i += 1;
        } 

        const obj = Object.fromEntries(clases);
        // console.log(obj);

        this.usuario = {
            id: resp[0].id, 
            nombre: resp[0].nombre,
            correo: resp[0].correo,
            cursos: obj
          }
          console.log("this.usuario");
          console.log(this.usuario);

          this.asistenciasService.actualizarUser(this.usuario).subscribe();
      })

    this.navController.navigateRoot("/class");
  }

  showMenu(){
    this.menuController.open("first");
  }


}
