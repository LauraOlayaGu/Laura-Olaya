import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoComponent },
  // Esta línea debe tener los 4 parámetros para que el routerLink funcione:
  { path: 'detalle/:id/:nombre/:descripcion/:img', component: DetalleComponent },
  { path: '**', redirectTo: 'catalogo' }
];