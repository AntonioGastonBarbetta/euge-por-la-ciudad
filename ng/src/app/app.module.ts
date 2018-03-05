import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotasComponent } from './components/notas/notas.component';
import { NotaComponent } from './components/nota/nota.component';
import { MuralsComponent } from './components/murals/murals.component';
import { MuralComponent } from './components/mural/mural.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

import { HomeService } from './services/home/home.service';
import { NotasService } from './services/notas/notas.service';
import { NotaService} from './services/nota/nota.service';
import { MuralsService} from './services/murals/murals.service';
import { MuralService } from './services/mural/mural.service';
import { AboutUsService } from './services/about-us/about-us.service';
import { ContactService } from './services/contact/contact.service';

import { Globals } from './variables/navegation.variable';
import { Animation } from './variables/nota&mural.variable';


import { AppRoutingModule } from './/app-routing.module';










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotasComponent,
    NotaComponent,
    MuralsComponent,
    MuralComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HomeService,
    NotasService,
    NotaService,
    MuralsService,
    MuralService,
    AboutUsService,
    ContactService,
    Globals,
    Animation
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
