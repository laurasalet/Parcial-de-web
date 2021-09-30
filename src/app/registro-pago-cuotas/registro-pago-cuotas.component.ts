import { Component, OnInit } from '@angular/core';
import { Ayuda } from '../modelo/ayuda';
import { Cuotas } from '../modelo/cuotas';
import { PagoCuotasService } from '../servicio/pago-cuotas.service';
import { AyudaService } from '../servicio/ayuda.service';

@Component({
  selector: 'app-registro-pago-cuotas',
  templateUrl: './registro-pago-cuotas.component.html',
  styleUrls: ['./registro-pago-cuotas.component.css']
})
export class RegistroPagoCuotasComponent implements OnInit {
cuota!:Cuotas;
ayudas!:Ayuda[];
ayuda!:Ayuda;
revisar:boolean=false;
  constructor(private pagoCuotasService: PagoCuotasService, private ayudaService: AyudaService) { }

  ngOnInit(): void {
    this.cuota = new Cuotas;
    this.ayudas=this.ayudaService.get();
  }
  add(){
    if(this.cuota.id_cuota==null){
      alert('Llene los campos vacíos');
    }else{
      this.ayudas.forEach(ayuda => {
        if(ayuda.id_ayuda === this.cuota.id_cuota){  
          alert('Este estudiante ya recibió una ayuda');
        } else{
          alert('Se agregó una persona');
          this.pagoCuotasService.post(this.cuota);
        }
       
        });  
 
       switch(this.cuota.tipo_ayuda){
        case "Portátil":{           
         break;
         }
         case "Tablet":{            
          break;
         }
         case "Bicicleta":{           
          break;
          }    
                     
         } 
           
       this.ayuda.cant_ayuda-=1;  
       this.ayudaService.post(this.ayuda);   
         }  
        }  
      
      }
      

      
    
   
  
  


