import { Component } from '@angular/core';
import { ClientesService } from './service/clientes.service';
import { FormularioClientesComponent } from './formulario-clientes/formulario-clientes/formulario-clientes.component';
import { Persona } from './persona/persona.model';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoggingService]
})
export class AppComponent {
  title = 'proyectoBootcamp';

  personas: Persona[] = [];

  nombreInput: string = '';
  cuitInput: string = '';
  dateInput: string = '';

  constructor ( private loggingService:LoggingService,ClientesService:ClientesService){
    
  }

  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput,
      this.cuitInput,
      this.dateInput
    );
    this.personas.push(persona1);
    this.loggingService.enviaMensajeAConsola("enviamos persona");
  }

 
}
