import { Estudiante } from './estudiante';
import { Profesor } from "./profesor"
export interface Nota {
    id: number
    nombre: string
    idProfesor: number
    idEstudiante: number
    valor: number
    estudiante?:Estudiante,
    profesor?:Profesor
}
