import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  usuario={
    email:'',
    password:'',
  }


  onSubmit(){
    console.log(this.usuario);
  }
}
