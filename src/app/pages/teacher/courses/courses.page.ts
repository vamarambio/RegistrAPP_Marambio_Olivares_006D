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

  async loadCursos (event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadCtrl.create({
      message: "Cargando...",
      spinner: "circular"
    });
    await loading.present(); 
    this.cursos = await this.asistenciasService.listarCursosUsuario(); 
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
