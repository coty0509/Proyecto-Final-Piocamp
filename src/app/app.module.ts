import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FooterPageComponent } from './footer-page/footer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    ContactoComponent,
    NoticiasComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
