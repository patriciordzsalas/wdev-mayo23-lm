import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { GruposComponent } from './grupos/grupos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'estudiantes',
    component: EstudiantesComponent
  },
  {
    path: 'grupos',
    component: GruposComponent
  },
  {
    path: 'profesores',
    component: ProfesoresComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
