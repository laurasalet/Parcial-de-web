import { Component, OnInit } from '@angular/core';
import { Ayuda } from '../modelo/ayuda';
import { AyudaService } from '../servicio/ayuda.service';

@Component({
  selector: 'app-registrar-ayuda',
  templateUrl: './registrar-ayuda.component.html',
  styleUrls: ['./registrar-ayuda.component.css']
})
export class RegistrarAyudaComponent implements OnInit {
  ayuda!:Ayuda;
  constructor(private ayudaService: AyudaService) { }

  ngOnInit(): void {
    this.ayuda = new Ayuda;
  }
  add(){
    if(this.ayuda.id_ayuda==null){
      alert('Llene los campos vacios')
    }else{
      alert('Se agrego una ayuda')
    }
    this.ayudaService.post(this.ayuda);
  }

}
