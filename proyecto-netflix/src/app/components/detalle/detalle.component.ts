import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  pelicula: any;

  constructor(
    private route: ActivatedRoute,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pelicula = {
        id: params.get('id'),
        nombre: params.get('nombre'),
        // Aquí capturamos la descripción única de la película
        descripcion: params.get('descripcion'), 
        img: decodeURIComponent(params.get('img') || '')
      };
    });
  }

  guardar() {
    this.storage.agregarALista(this.pelicula);
    alert(`"${this.pelicula.nombre}" se ha guardado en tu lista.`);
  }
}