import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8090/api/usuarios";
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  addUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }
  getUserById(id: number): Observable<Object> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  deleteUserById(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
