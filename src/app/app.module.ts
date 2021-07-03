import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NAVComponent } from './nav/nav.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ReguistroComponent } from './reguistro/reguistro.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LoginComponent } from './login/login.component';
import { GaleComponent } from './gale/gale.component';
import { Imagenes1Component } from './imagenes1/imagenes1.component';
import { Imagenes2Component } from './imagenes2/imagenes2.component';
import { Imagenes3Component } from './imagenes3/imagenes3.component';
import { Imagenes4Component } from './imagenes4/imagenes4.component';
import { Imagenes5Component } from './imagenes5/imagenes5.component';
import { Imagenes6Component } from './imagenes6/imagenes6.component';
import { Usario1Component } from './usario1/usario1.component';
import { Usario2Component } from './usario2/usario2.component';
import { Usario3Component } from './usario3/usario3.component';
import { Usario4Component } from './usario4/usario4.component';
import { Usario5Component } from './usario5/usario5.component';
import { Usario6Component } from './usario6/usario6.component';
import { CuadrodehonorComponent } from './cuadrodehonor/cuadrodehonor.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NAVComponent,
    NoticiasComponent,
    ReguistroComponent,
    GaleriaComponent,
    LoginComponent,
    GaleComponent,
    Imagenes1Component,
    Imagenes2Component,
    Imagenes3Component,
    Imagenes4Component,
    Imagenes5Component,
    Imagenes6Component,
    Usario1Component,
    Usario2Component,
    Usario3Component,
    Usario4Component,
    Usario5Component,
    Usario6Component,
    CuadrodehonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
