import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {

  qrCodeString = '';
  studentsInClass = 0;

  constructor(private menuController: MenuController) { }

  class_code = localStorage.getItem("class");

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
    this.qrCodeString = this.class_code + today;
  }
}
