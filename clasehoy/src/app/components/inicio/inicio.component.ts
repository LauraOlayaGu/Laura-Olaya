import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // Asegúrate de importar esto
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  listaPokemones: any[] = [];

  constructor(
    private pokeService: DatosService,
    @Inject(PLATFORM_ID) private platformId: Object // Esto identifica si es el navegador
  ) {}

  ngOnInit() {
    // Solo cargamos los datos si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.obtenerDatos();
    }
  }

  obtenerDatos() {
    this.pokeService.getListaPokemon().subscribe((res: any) => {
      res.results.forEach((poke: any) => {
        this.pokeService.getDetalle(poke.url).subscribe((detalles: any) => {
          this.pokeService.getDescripcion(detalles.id).subscribe((desc: any) => {
            const texto = desc.flavor_text_entries.find((e: any) => e.language.name === 'es');
            this.listaPokemones.push({
              nombre: detalles.name,
              imagen: detalles.sprites.front_default,
              descripcion: texto ? texto.flavor_text : 'Sin descripción'
            });
          });
        });
      });
    });
  }
}