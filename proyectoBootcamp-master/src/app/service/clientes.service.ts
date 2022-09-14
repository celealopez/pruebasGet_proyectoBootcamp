import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientesList: Array <any>=[]
  constructor(private http:HttpClient) { 
    this.clientesList=new Array<any>()

  }



  public getList(url:string){
    return this.http.get(url)
  }
  

  
}
