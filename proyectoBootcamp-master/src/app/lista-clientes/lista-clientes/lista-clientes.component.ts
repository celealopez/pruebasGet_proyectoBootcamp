import { Component, OnInit, Input } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {


  clientesList: Array <any>=[]

  constructor(private clientesService: ClientesService) {
    clientesService.getList('https://citenik-nodocker.azurewebsites.net/api/clientes').subscribe((res:any)=>{
     
      this.clientesList=res
      
    })
   }

  ngOnInit(): void {
   
  }

}
