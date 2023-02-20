import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_BASE= 'http://localhost:8090';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http:HttpClient
  ) { }
  getAll ( ) {
    return this.http.get (`${API_BASE}/usuarios`);
  }

  create(user:any){
    return this.http.post ( `${API_BASE}/usuarios`,user) ;
  }

  update (id:string,user: any ) {
    return this.http.put( `${API_BASE}/usuarios/${id}`,user) ;
}
delete (id:string){
  return this.http.delete( `${API_BASE}/usuarios/${id}`) ;
}

}
