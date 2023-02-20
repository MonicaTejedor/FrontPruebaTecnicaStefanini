import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
user:User=new User();

  constructor(private userservice: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(){
this.userservice.addUser(this.user).subscribe(data=>{
console.log("Usuario creado correctamente");
this.changeView();
},error=>console.log(error));

  }

  changeView(){
    this.router.navigate([""]);
    }
onSubmit(){
 this.saveUser();
}

}
