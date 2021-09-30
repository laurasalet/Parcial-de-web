import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrarAyudaComponent } from './registrar-ayuda/registrar-ayuda.component';
import { RegistroPagoCuotasComponent } from './registro-pago-cuotas/registro-pago-cuotas.component';
import { MostrarComponent } from './mostrar/mostrar.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'registrar-ayuda', component: RegistrarAyudaComponent},
  {path:'pago-cuotas', component: RegistroPagoCuotasComponent},
  {path:'mostrar', component: MostrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
