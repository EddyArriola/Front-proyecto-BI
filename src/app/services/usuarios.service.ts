import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
private myAppUrl: string;
private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environments.endpoint;
    this.myApiUrl = 'user/';
   }

   getAll(): Observable<user[]>{
    return this.http.get<user[]>(this.myAppUrl + this.myApiUrl);
   }

   delete(id: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id)
   }

   save(venta: user): Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, venta)
   }

   get(id: number): Observable<user>{
    return this.http.get<user>(this.myAppUrl + this.myApiUrl + id)
   }

   update(id: number, venta: user): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, venta)
   }
}
