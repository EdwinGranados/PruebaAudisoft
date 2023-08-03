import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Profesor } from 'src/app/interfaces/profesor';


@Component({
  selector: 'app-modal-add-edi',
  templateUrl: './modal-add-edi.component.html',
})
export class ModalAddEdiProfesoresComponent implements OnInit {

  profesor: Profesor = {
    id: 0,
    nombre: ""
  }

  titulo: string = '';
  constructor(
    public dialogRef: MatDialogRef<ModalAddEdiProfesoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Profesor,
  ) { }

  ngOnInit(): void {
    this.profesor.id = this.data.id
    this.profesor.nombre = this.data.nombre
    this.titulo =(this.data.id) != 0 ? 'Editar':'Nuevo'
  }

  guardarCambios() {
    this.dialogRef.close(this.profesor)
  }

}

