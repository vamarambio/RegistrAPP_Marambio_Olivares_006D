import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
// import { QrResponse } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {

  qrCodeString = '';
  studentsInClass = 0;
  numClase = localStorage.getItem("numClass");

  constructor(private menuController: MenuController
              /* private http: HttpClient */) { }

  class = {
    code: '', // Esta pieza de codigo debe variar por la ID de clase creada
  }

  ngOnInit() {
  }

  showMenu(){
    this.menuController.open("first");
  }

  generateQR(){
    const date = new Date();
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    const today = yyyy + mm + dd + hh + min;
    this.qrCodeString = this.class.code + today;
  }
  
  // async getQRScans() {
  //   this.http.get("");
  // }
}
