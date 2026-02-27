import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importa tu componente aquí abajo:
import { InicioComponent } from './components/inicio/inicio.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Agrega InicioComponent a esta lista de imports:
  imports: [RouterOutlet, InicioComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clasehoy';
}