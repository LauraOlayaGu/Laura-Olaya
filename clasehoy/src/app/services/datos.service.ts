import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  constructor(private http: HttpClient) { }

  getListaPokemon() {
    
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=12');
  }

  getDetalle(url: string) {
    return this.http.get(url);
  }

  getDescripcion(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
}