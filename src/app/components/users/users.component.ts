import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  updateUser(id: number) {
    
    this.router.navigate(['actualizarUsuario', id]);
  }

  private getUser() {
    this.userservice.getAllUsers().subscribe(data => {
      this.users = data;

    });
  }
  deleteUser(id: number) {
    this.userservice.deleteUserById(id).subscribe(data => {
      console.log("Usuario eliminado correctamente");
      this.getUser();
    });
    
  }

}
