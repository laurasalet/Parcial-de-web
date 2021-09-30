import { Injectable } from '@angular/core';
import { Cuotas } from '../modelo/cuotas';

@Injectable({
  providedIn: 'root'
})
export class PagoCuotasService {

  constructor() { }
  get(): Cuotas[] { 
    return JSON.parse(localStorage.getItem('datosC')|| '[]'); 
  }
post(cuota:Cuotas) {
   let cuotas : Cuotas[] = []; 
  if (this.get() != null) { cuotas = this.get(); 
  } 
  cuotas.push(cuota);
 localStorage.setItem('datosC', JSON.stringify(cuotas)); }
}
