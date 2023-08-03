import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EstudiantesModule } from './contenedor-estudiantes/estudiantes.module';
import { ProfesoresModule } from './contenedor-profesores/profesores.module';
import { NotasModule } from './contenedor-notas/notas.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    EstudiantesModule,
    ProfesoresModule,
    NotasModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
