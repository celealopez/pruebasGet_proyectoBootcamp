import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioClientesModule } from './formulario-clientes/formulario-clientes.module';
import { ListaClientesModule } from './lista-clientes/lista-clientes.module';

import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { LoggingService } from './LoggingService.service';

import { ThemeDirective } from './directivas/theme.directive';
import { PlanesModule } from './planes/planes.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ThemeDirective,
    
    
  ],
  imports: [
    BrowserModule,
    FormularioClientesModule,
    ListaClientesModule,
    FormsModule,
    PlanesModule
    
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
