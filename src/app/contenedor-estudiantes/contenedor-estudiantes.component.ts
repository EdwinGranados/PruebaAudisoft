import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';
import { EstudianteService } from '../services/estudiante.service';
import { ModalAddEdiEstudiantesComponent } from './modal-add-edi-estudiantes/modal-add-edi-estudiantes.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contenedor-estudiantes',
  templateUrl: './contenedor-estudiantes.component.html',
  styleUrls: ['./contenedor-estudiantes.component.css']
})
export class ContenedorEstudiantesComponent implements OnInit {

  columnas: string[] = ['id', 'nombre', 'acciones']
  estudiantes: Estudiante[] = [];
  nombre: string = '';
  id: number = 0

  constructor(
    private estudianteService: EstudianteService,
    private _snackbar: MatSnackBar,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getEstudiantes()
  }

  getEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe((data) => {
      this.estudiantes = data
    })
  }

  editarEstudiante(id: number,nombre:string) {
    this.id = id;
    this.nombre = nombre
    this.openDialog()
  }

  eliminarEstudiante(id:number){
    this.estudianteService.deleteEstudiante(id).subscribe((data)=>{
      if (!data) {
        this.openSnackBar('No se ha podido Eliminar el Estudiante', 'close')
      } else {
        this.openSnackBar('Se Elimino el estudiante satisfactoriamente', 'close')
        this.getEstudiantes();
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAddEdiEstudiantesComponent, {
      data: { id: this.id, nombre: this.nombre },
    })

    dialogRef.afterClosed().subscribe(results => {
      if (results) {
        if (results.id == 0) {
          this.estudianteService.setEstudiante(results).subscribe((data) => {
            if (!data) {
              this.openSnackBar('No se ha podido crear sstudiante', 'close')
            } else {
              this.openSnackBar('Se creo estudiante satisfactoriamente', 'close')
              this.getEstudiantes();
            }
          })
        } else {
          this.estudianteService.updateEstudiante(results).subscribe((data) => {
            if (!data) {
              this.openSnackBar('No se ha podido actualizar el sstudiante', 'close')
            } else {
              this.openSnackBar('Se actualizo el estudiante satisfactoriamente', 'close')
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

  resetprops(){
    this.id = 0;
    this.nombre = '';
  };

}
