import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageKey = 'misPelis';

  constructor() { }

  // Agrega una película a la lista local
  agregarALista(pelicula: any) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const actual = this.obtenerLista();
      
      // Evita duplicados comparando por ID
      const existe = actual.find((p: any) => p.id === pelicula.id);
      
      if (!existe) {
        actual.push(pelicula);
        localStorage.setItem(this.storageKey, JSON.stringify(actual));
      }
    }
  }

  // Recupera la lista de películas guardadas
  obtenerLista(): any[] {
    // PROTECCIÓN: Solo accede a localStorage si estamos en el navegador
    if (typeof window !== 'undefined' && window.localStorage) {
      const lista = localStorage.getItem(this.storageKey);
      return lista ? JSON.parse(lista) : [];
    }
    // Si es el servidor (SSR), retorna un arreglo vacío para evitar el error ReferenceError
    return [];
  }

  // Limpia un elemento específico si lo necesitas
  eliminarDeLista(id: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      let actual = this.obtenerLista();
      actual = actual.filter((p: any) => p.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(actual));
    }
  }
}