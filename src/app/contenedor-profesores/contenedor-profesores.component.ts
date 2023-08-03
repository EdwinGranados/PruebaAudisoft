import { Component, OnInit } from '@angular/core';
import { Profesor } from '../interfaces/profesor';
import { ProfesorService } from '../services/profesor.service';
import { ModalAddEdiProfesoresComponent } from './modal-add-edi/modal-add-edi.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contenedor-profesores',
  templateUrl: './contenedor-profesores.component.html',
  styleUrls: ['./contenedor-profesores.component.css']
})
export class ContenedorProfesoresComponent implements OnInit {
  columnas: string[] = ['id', 'nombre', 'acciones']
  profesores: Profesor[] = [];
  nombre: string = '';
  id: number = 0

  constructor(
    private profesorService: ProfesorService,
    private _snackbar: MatSnackBar,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getEstudiantes()
  }

  getEstudiantes() {
    this.profesorService.getProfesor().subscribe((data) => {
      this.profesores = data
    })
  }

  editarProfesor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre
    this.openDialog()
  }

  eliminarProfesor(id: number) {
    this.profesorService.deleteProfesor(id).subscribe((data) => {
      if (!data) {
        this.openSnackBar('No se ha podido eliminar el profesor', 'close')
      } else {
        this.openSnackBar('Se elimino el profesor satisfactoriamente', 'close')
        this.getEstudiantes();
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddEdiProfesoresComponent, {
      data: { id: this.id, nombre: this.nombre },
    })

    dialogRef.afterClosed().subscribe(results => {
      if (results) {
        if (results.id == 0) {
          this.profesorService.setProfesor(results).subscribe((data) => {
            if (!data) {
              this.openSnackBar('No se ha podido crear profesor', 'close')
            } else {
              this.openSnackBar('Se creo profesor satisfactoriamente', 'close')
              this.getEstudiantes();
            }
          })
        } else {
          this.profesorService.updateProfesor(results).subscribe((data) => {
            if (!data) {
              this.openSnackBar('No se ha podido actualizar el profesor', 'close')
            } else {
              this.openSnackBar('Se actualizo el profesor satisfactoriamente', 'close')
              this.getEstudiantes();
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
