import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RegistrarAyudaComponent } from './registrar-ayuda/registrar-ayuda.component';
import { RegistroPagoCuotasComponent } from './registro-pago-cuotas/registro-pago-cuotas.component';
import { MostrarComponent } from './mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    RegistrarAyudaComponent,
    RegistroPagoCuotasComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
