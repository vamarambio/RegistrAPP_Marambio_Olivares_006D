import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AsistenciasService } from '../../../services/asistencias.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit, OnDestroy {

  scannedResult: any;
  scannedCourse: any;
  content_visibility = '';
  email: any = localStorage.getItem("email");

  usuario = {
    "id": 0,
    "nombre": "",
    "correo": "",
    "cursos": {}
  }

  constructor(private menuController: MenuController,
              private asistenciasService: AsistenciasService) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      // @ts-ignore: Object is possibly 'null'.
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      // @ts-ignore: Object is possibly 'null'.
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        this.scannedCourse = Array.from(this.scannedResult).slice(0,7).join("");
        console.log(this.scannedResult);
        this.sendScan();
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
      // @ts-ignore: Object is possibly 'null'.
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
    this.stopScan();
  }

  async sendScan(){
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
          if (key == this.scannedCourse){
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
  }
}
