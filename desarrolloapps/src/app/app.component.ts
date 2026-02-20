import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necesario para capturar lo que escribes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // Importante: habilita el uso de [(ngModel)]
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Variable que guarda lo que escribes en el cuadro de texto
  nuevaTarea: string = ''; 
  
  // Arreglo (lista) donde se guardan todas las tareas
  listaTareas: string[] = []; 

  // Función para añadir la tarea a la lista
  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.listaTareas.push(this.nuevaTarea); // Agrega al arreglo
      this.nuevaTarea = ''; // Limpia el input para la siguiente tarea
    }
  }

  // Función extra: para borrar una tarea si te equivocas
  borrarTarea(indice: number) {
    this.listaTareas.splice(indice, 1);
  }
}