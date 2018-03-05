import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {AboutUsComponent} from './components/about-us/about-us.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {MuralComponent} from './components/mural/mural.component';
import {MuralsComponent} from './components/murals/murals.component';
import {NotaComponent} from './components/nota/nota.component';
import {NotasComponent} from './components/notas/notas.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {flag: 'flag'} },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'hola', component: AboutUsComponent },
  { path: 'street-art', component: MuralsComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'notas/:slug', component: NotaComponent },
  { path: 'street-art/:slug', component: MuralComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}