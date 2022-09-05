import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-password',
  templateUrl: './r-password.page.html',
  styleUrls: ['./r-password.page.scss'],
})
export class RPasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user_r_pasword={
    email:'',
  }


  onSubmit(){
    console.log(this.user_r_pasword);
  }

}
