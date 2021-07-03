import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {InicioComponent} from './inicio/inicio.component'
import {NAVComponent} from './nav/nav.component'
import {NoticiasComponent} from './noticias/noticias.component'
import {ReguistroComponent} from './reguistro/reguistro.component'
import {GaleriaComponent} from './galeria/galeria.component'
import {LoginComponent} from './login/login.component'
import {GaleComponent } from './gale/gale.component'
import {Imagenes1Component} from './imagenes1/imagenes1.component'
import {Imagenes2Component} from './imagenes2/imagenes2.component'
import {Imagenes3Component} from './imagenes3/imagenes3.component'
import {Imagenes4Component} from './imagenes4/imagenes4.component'
import {Imagenes5Component} from './imagenes5/imagenes5.component'
import {Imagenes6Component} from './imagenes6/imagenes6.component'
import {Usario1Component} from './usario1/usario1.component'
import {Usario2Component} from './usario2/usario2.component'
import {Usario3Component} from './usario3/usario3.component'
import {Usario4Component} from './usario4/usario4.component'
import {Usario5Component} from './usario5/usario5.component'
import {Usario6Component} from './usario6/usario6.component'
import {CuadrodehonorComponent} from './cuadrodehonor/cuadrodehonor.component'


CuadrodehonorComponent

const routes: Routes = [

{path: '', component: InicioComponent},
{path: 'usu1', component: Usario1Component},
{path: 'cua', component: CuadrodehonorComponent},
{path: 'usu2', component: Usario2Component},
{path: 'usu3', component: Usario3Component},
{path: 'usu4', component: Usario4Component},
{path: 'usu5', component: Usario5Component},
{path: 'usu6', component: Usario6Component},
{path: 'ima1', component: Imagenes1Component},
{path: 'ima2', component: Imagenes2Component},
{path: 'ima3', component: Imagenes3Component},
{path: 'ima4', component: Imagenes4Component},
{path: 'ima5', component: Imagenes5Component},
{path: 'ima6', component: Imagenes6Component},
{path: 'regi', component: ReguistroComponent},
{path: 'nav', component: NAVComponent},
{path: 'noti', component: NoticiasComponent},
{path: 'dato', component: GaleriaComponent},
{path: 'login', component: LoginComponent},
{path: 'gale', component: GaleComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
