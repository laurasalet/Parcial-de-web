import { Injectable } from '@angular/core';
import { Ayuda } from '../modelo/ayuda';

@Injectable({
  providedIn: 'root'
})
export class AyudaService {

  constructor() { }
  get(): Ayuda[] { 
    return JSON.parse(localStorage.getItem('datosA')|| '[]'); 
  }
post(ayuda:Ayuda) {
   let ayudas : Ayuda[] = []; 
  if (this.get() != null) { ayudas = this.get(); 
  } 
  ayudas.push(ayuda);
 localStorage.setItem('datosA', JSON.stringify(ayudas)); }
}
