import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoggingService } from '../../LoggingService.service';


@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})

export class FormularioClientesComponent implements OnInit {

  miFormulario: FormGroup=this.fb.group({
    name: this.fb.control('nombre desde rf'),
    cuit: this.fb.control('nombre desde rf'),
    date: this.fb.control(Date())
   
  })
  
  desabilitar=false;
  mensaje:string ="No se a agregado ninguna persona"

  agregarCliente(){
  this.mensaje = "cliente agregado"
  }
  
  titulo:string="";


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  
}
