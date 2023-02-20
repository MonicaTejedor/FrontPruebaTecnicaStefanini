import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: number;
  user: User = new User();
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  updateUser() {
    this.id = this.route.snapshot.params['id']; 
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe(data => {
      console.log("Usuario actualizado correctamente");
      this.changeView();
    }, error => console.log(error));

  }

  changeView() {
    this.router.navigate([""]);
  }
  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.changeView();
    }, error => console.log(error));
  }
}
