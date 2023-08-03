import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorEstudiantesComponent } from './contenedor-estudiantes/contenedor-estudiantes.component';
import { ContenedorProfesoresComponent } from './contenedor-profesores/contenedor-profesores.component';
import { ContenedorNotasComponent } from './contenedor-notas/contenedor-notas.component';

const routes: Routes = [
  {
    path: 'estudiantes',
    component: ContenedorEstudiantesComponent,
    children:[]
  },
  {
    path: 'profesores',
    component: ContenedorProfesoresComponent,
    children:[]
  },
  {
    path: 'notas',
    component: ContenedorNotasComponent,
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
