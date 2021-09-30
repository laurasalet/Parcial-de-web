import { Component, OnInit } from '@angular/core';
import { Ayuda } from '../modelo/ayuda';
import { Cuotas } from '../modelo/cuotas';
import { AyudaService } from '../servicio/ayuda.service';
import { PagoCuotasService } from '../servicio/pago-cuotas.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
ayudas!: Ayuda[];
cuotas!:Cuotas[];
  constructor(private ayudaService: AyudaService, private pagoCuotasSercice: PagoCuotasService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.ayudas=this.ayudaService.get();
    this.cuotas=this.pagoCuotasSercice.get();
    
  }

}
