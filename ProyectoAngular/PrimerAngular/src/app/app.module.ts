import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosComponent } from './cursos/cursos.component';
import { GruposComponent } from './grupos/grupos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    GruposComponent,
    ProfesoresComponent,
    EstudiantesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
