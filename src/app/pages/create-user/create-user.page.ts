import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user_create={
    name:'',
    email:'',
    password:'',
    acc_type:'',
  }


  onSubmit(){
    console.log(this.user_create);
  }

}
