import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-modal-add-edi-estudiantes',
  templateUrl: './modal-add-edi-estudiantes.component.html',
})
export class ModalAddEdiEstudiantesComponent implements OnInit {

  estudiante: Estudiante = {
    id: 0,
    nombre: ""
  }

  titulo: string = '';
  constructor(
    public dialogRef: MatDialogRef<ModalAddEdiEstudiantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Estudiante,
  ) { }

  ngOnInit(): void {
    this.estudiante.id = this.data.id
    this.estudiante.nombre = this.data.nombre
    this.titulo =(this.data.id) != 0 ? 'Editar':'Nuevo'
  }

  guardarCambios() {
    this.dialogRef.close(this.estudiante)
  }

}
