import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante } from 'src/app/interfaces/estudiante';
import { Nota } from 'src/app/interfaces/nota';
import { Profesor } from 'src/app/interfaces/profesor';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-modal-add-edi-notas',
  templateUrl: './modal-add-edi-notas.component.html',
  styleUrls: ['./modal-add-edi-notas.component.css'],
})
export class ModalAddEdiNotasComponent implements OnInit {
  nota: Nota = {
    id: 0,
    nombre: "",
    idEstudiante: 0,
    idProfesor: 0,
    valor: 0,
  }
  titulo: string = '';

  profesores: Profesor[] = [];

  estudiantes: Estudiante[] = [];

  constructor(
    private estudianteService: EstudianteService,
    private profesroService: ProfesorService,
    public dialogRef: MatDialogRef<ModalAddEdiNotasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Nota,
  ) { }

  ngOnInit(): void {
    this.nota.id = this.data.id;
    this.nota.nombre = this.data.nombre;
    this.nota.idEstudiante = this.data.idEstudiante;
    this.nota.idProfesor = this.data.idProfesor;
    this.nota.valor = this.data.valor;
    this.titulo = (this.data.id) != 0 ? 'Editar' : 'Nuevo'
    this.getProfesores();
    this.getEstudiantes();
  }

  getProfesores() {
    this.profesroService.getProfesor().subscribe((data) => {
      this.profesores = data
    })
  }

  getEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe((data) => {
      this.estudiantes = data
    })
  }

  guardarCambios() {
    this.dialogRef.close(this.nota)
  }
}
