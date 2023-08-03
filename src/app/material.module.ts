import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


const misModulos = [
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDividerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
];
@NgModule({
  imports: [
    CommonModule,
    misModulos
  ],
  exports: [misModulos]
})
export class MaterialModule { }
