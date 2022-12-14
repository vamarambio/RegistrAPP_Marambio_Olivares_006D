import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { AsistenciasService } from '../../../services/asistencias.service';
import { NavController } from '@ionic/angular';

interface Pages{
  name: string;
  redirect: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  cursos: any[] = [];
  alumnos: any[] = [];
  
  constructor(private menuController: MenuController,
              private asistenciasService: AsistenciasService,
              private loadCtrl: LoadingController,
              private navController: NavController) { }

  ngOnInit() {
    this.loadCursos();
  }
  /*
  async loadCursos (event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadCtrl.create({
      message: "Cargando...",
      spinner: "circular"
    });
    await loading.present();
    
    this.asistenciasService.listarUsuarios().subscribe((data) => {
      loading.dismiss();
      let json: any;

      if (data) {
        let dataString = JSON.stringify(data);
        json = JSON.parse(dataString);   
      } else {
        return;
      }
 
      for (const obj of json) {
        if (localStorage.getItem("email") == obj.correo) {
          // var cursos = obj.cursos; //{ cursos: '[{"cur1234":0,"cur5678":0}]' }
          // console.log(Object.keys(obj)[0]);//id
          // console.log(Object.keys(obj)[1]);//nombre
          let i = 0;
          while (Object.keys(obj.cursos)[i]) {
            let c : any = [];

            console.log(Object.keys(obj.cursos)[i]);
            console.log(Object.values(obj.cursos)[i]);
            
            c.push(Object.keys(obj.cursos)[i]);
            c.push(Object.values(obj.cursos)[i]);
            letl = this.asistenciasService.listarCursos(Object.keys(obj.cursos)[i]).length;
            c.push(l);

            this.cursos.push(c);
            i = i+1;
          }
        }
      }
      event?.target.complete();

    },
    (err) => {
      console.log(err.message);
      loading.dismiss();
    }
    );
  }
  */

  async loadCursos (event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadCtrl.create({
      message: "Cargando...",
      spinner: "circular"
    });
    await loading.present(); 

    this.cursos = await this.asistenciasService.listarCursosProfesor(); 
    
    // this.alumnos = this.asistenciasService.listarCursos("CUR1234");

    loading.dismiss();
    
    event?.target.complete();


  }
  
  setClase(clase: string, num: string,){
    localStorage.setItem('class', clase);
    localStorage.setItem('numClass', num);
    this.navController.navigateRoot('/course');
    
  }

  showMenu(){
    this.menuController.open('first');
  }

}
