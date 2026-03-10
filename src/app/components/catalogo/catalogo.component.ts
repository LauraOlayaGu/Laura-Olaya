import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  mostrarLista = false;
  misFavoritos: any[] = [];

  // Enlaces de las imágenes de tus capturas
  imgTendencia = 'https://i.pinimg.com/236x/1d/26/bd/1d26bd008a81a488461c9afce5eec18e.jpg';
  imgTerror = 'https://i.pinimg.com/474x/b3/bd/46/b3bd461d5b6e5dabcecfa76644f9bb0d.jpg';
  imgAccion = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSKce9qKbg8HF3vosGbnGBOSbRxHporTbMg&s';

  tendencias = [
    { id: '1', nombre: 'Supercool', img: this.imgTendencia, desc: 'Comedia adolescente.' },
    { id: '2', nombre: 'Qué pasó ayer?', img: this.imgTendencia, desc: 'Una resaca inolvidable.' },
    { id: '3', nombre: 'Son como niños', img: this.imgTendencia, desc: 'Amigos de infancia.' },
    { id: '4', nombre: 'John Wick', img: this.imgTendencia, desc: 'Acción y venganza.' }
  ];

  terror = [
    { id: '5', nombre: 'El Conjuro', img: this.imgTerror, desc: 'Terror sobrenatural.' },
    { id: '6', nombre: 'La Monja', img: this.imgTerror, desc: 'Oscuridad en el convento.' },
    { id: '7', nombre: 'It', img: this.imgTerror, desc: 'El payaso diabólico.' },
    { id: '8', nombre: 'Siniestro', img: this.imgTerror, desc: 'Cintas malditas.' }
  ];

  accion = [
    { id: '9', nombre: 'Rápido y Furioso', img: this.imgAccion, desc: 'Carreras de autos.' },
    { id: '10', nombre: 'Misión Imposible', img: this.imgAccion, desc: 'Espionaje extremo.' },
    { id: '11', nombre: 'Mad Max', img: this.imgAccion, desc: 'Persecución en el desierto.' },
    { id: '12', nombre: 'Gladiador', img: this.imgAccion, desc: 'Batallas en el coliseo.' }
  ];

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.misFavoritos = this.storage.obtenerLista();
  }

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
    this.misFavoritos = this.storage.obtenerLista();
  }

  prepararLink(url: string) {
    return encodeURIComponent(url);
  }
}