import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UsersComponent } from './components/users/users.component';
const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'crearUsuario',component:CreateUserComponent},
  {path:'actualizarUsuario/:id',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
