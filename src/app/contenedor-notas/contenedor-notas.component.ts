import { Component, OnInit } from '@angular/core';
import { Nota } from '../interfaces/nota';
import { NotaService } from '../services/nota.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EstudianteService } from '../services/estudiante.service';
import { ProfesorService } from '../services/profesor.service';
import { forkJoin } from 'rxjs';
import { ModalAddEdiNotasComponent } from './modal-add-edi-notas/modal-add-edi-notas.component';

@Component({
  selector: 'app-contenedor-notas',
  templateUrl: './contenedor-notas.component.html',
  styleUrls: ['./contenedor-notas.component.css']
})
export class ContenedorNotasComponent implements OnInit {

  columnas: string[] = ['No', 'estudiante', 'profesor', 'materia', 'nota', 'acciones'];
  notas: Nota[] = [];
  id: number = 0;
  nombre: string = '';
  idProfesor: number = -1;
  idEstudiante: number = -1;
  valornota: number = 0;

  CargaCompleta: boolean = false

  constructor(
    private notasService: NotaService,
    private estudianteService: EstudianteService,
    private profesorService: ProfesorService,
    private _snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getNotas();
  }

  getNotas(): void {
    this.notasService.getNotas().subscribe((data) => {
      data.forEach((nota) => {
        forkJoin({
          profesor: this.profesorService.getProfesorId(nota.idProfesor),
          estudiante: this.estudianteService.getEstudianteId(nota.idEstudiante)
        }).subscribe(({ profesor, estudiante }) => {
          nota.profesor = profesor
          nota.estudiante = estudiante
        })
      })
      this.notas = data
    })
  }

  editarNota(id: number, nombre: string, idProfesor: number, idEstudiante: number, valor: number) {
    this.id = id;
    this.nombre = nombre;
    this.idProfesor = idProfesor;
    this.idEstudiante = idEstudiante;
    this.valornota = valor
    this.openDialog();
  }

  eliminarNota(id: number) {
    console.log(id)
    this.notasService.deleteNota(id).subscribe((data) => {
      if (!data) {
        this.openSnackBar('No se ha podido eliminar la nota', 'close')
      } else {
        this.openSnackBar('Se elimino la nota satisfactoriamente', 'close')
        this.getNotas();
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddEdiNotasComponent, {
      data: {
        id: this.id,
        nombre: this.nombre,
        idProfesor: this.idProfesor,
        idEstudiante: this.idEstudiante
      }
    })

    dialogRef.afterClosed().subscribe(results => {
      if (results) {
        if (results.id == 0) {
          this.notasService.setNota(results).subscribe((data) => {
            if (!data) {
              this.openSnackBar('No se ha podido crear profesor', 'close')
            } else {
              this.openSnackBar('Se creo profesor satisfactoriamente', 'close')
              this.getNotas();
            }
          })
        } else {
          this.notasService.updateNota(results).subscribe((data) => {
            if (!data) {
              this.openSnackBar('No se ha podido actualizar la nota', 'close')
            } else {
              this.openSnackBar('Se actualizo la nota satisfactoriamente', 'close')
              this.getNotas();
            }
          })
        }
        this.resetprops();
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      verticalPosition: 'top',
      duration: 3000
    });
  }

  resetprops() {
    this.id = 0;
    this.nombre = '';
  };

}
