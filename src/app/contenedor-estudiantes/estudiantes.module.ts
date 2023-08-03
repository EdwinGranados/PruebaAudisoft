import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddEdiEstudiantesComponent } from './modal-add-edi-estudiantes/modal-add-edi-estudiantes.component';
import { ContenedorEstudiantesComponent } from './contenedor-estudiantes.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalAddEdiEstudiantesComponent,
    ContenedorEstudiantesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class EstudiantesModule { }
