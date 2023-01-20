import { ICliente } from '../models/cliente.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesRequestService {

  constructor( private http: HttpClient ) { }

  getCliente(){
    return this.http.get(environment.url + 'clientes')

  }
  postCliente(cliente:ICliente){
    return this.http.post<ICliente>(environment.url + 'clientes/',cliente)
  }

  updateCliente(cliente:ICliente){
    return this.http.put<ICliente>(environment.url + 'clientes/',cliente)
  }

  deleteCliente(id:number){
    return this.http.delete<ICliente>(environment.url + `clientes/${id}`)
  }

}
