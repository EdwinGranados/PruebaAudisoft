import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddEdiProfesoresComponent } from './modal-add-edi/modal-add-edi.component';
import { ContenedorProfesoresComponent } from './contenedor-profesores.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContenedorProfesoresComponent,
    ModalAddEdiProfesoresComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  providers:[]
})
export class ProfesoresModule { }
