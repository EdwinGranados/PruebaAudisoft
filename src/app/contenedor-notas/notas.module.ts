import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorNotasComponent } from './contenedor-notas.component';
import { ModalAddEdiNotasComponent } from './modal-add-edi-notas/modal-add-edi-notas.component';
import { MaterialModule } from '../material.module';
import {FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    ContenedorNotasComponent,
    ModalAddEdiNotasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ]
})
export class NotasModule { }
