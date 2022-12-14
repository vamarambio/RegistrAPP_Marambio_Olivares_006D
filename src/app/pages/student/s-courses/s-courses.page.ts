import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, MenuController } from '@ionic/angular';
import { AsistenciasService } from '../../../services/asistencias.service';

@Component({
  selector: 'app-s-courses',
  templateUrl: './s-courses.page.html',
  styleUrls: ['./s-courses.page.scss'],
})
export class SCoursesPage implements OnInit {

  clases: any[] = [];

  constructor(private menuController: MenuController,
              private asistenciasService: AsistenciasService,
              private loadCtrl: LoadingController) { }


  ngOnInit() {
    this.mostrarAsistencia();
  }

  async mostrarAsistencia(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadCtrl.create({
      message: "Cargando...",
      spinner: "circular"
    });
    await loading.present(); 
    this.clases = await this.asistenciasService.listarCursosUsuario(); 
    loading.dismiss();
    event?.target.complete();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
