import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { venta } from '../interfaces/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
private myAppUrl: string;
private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environments.endpoint;
    this.myApiUrl = 'ventas/';
   }

   getAllVentas(): Observable<venta[]>{
    return this.http.get<venta[]>(this.myAppUrl + this.myApiUrl);
   }

   deleteVenta(id: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id)
   }

   saveVenta(venta: venta): Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, venta)
   }

   getVenta(id: number): Observable<venta>{
    return this.http.get<venta>(this.myAppUrl + this.myApiUrl + id)
   }

   updateVenta(id: number, venta: venta): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, venta)
   }
}
