import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';



@NgModule({
  declarations: [
    ListaClientesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[ListaClientesComponent]
})
export class ListaClientesModule { }
