import { Component, OnInit, Input} from '@angular/core';
import { Navbar } from '../../classes/nabvar.class';
import { Globals } from '../../variables/navegation.variable';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  mainTitle = 'Euge por la ciudad';
  public titleId: string = 'algo';

  constructor(private globals: Globals) {
  }

  ngOnInit() {

  }

  titleOverMethod(){
 
      this.globals.headerAnimationToggle.title = this.globals.headerAnimationToggle.section ;
      this.globals.headerAnimationToggle.avion = 'titleHoverAvion';
  
  }

  titleOutMethod(){
    this.globals.headerAnimationToggle.title = 'title';
    this.globals.headerAnimationToggle.avion = 'avion';
  }



  avionOverMethod(){
    this.globals.headerAnimationToggle.bool = false;
    this.globals.headerAnimationToggle.avion = 'avionHover';
    this.globals.headerAnimationToggle.title = 'avionHoverTitle'
  }

  avionOutMethod(){
    this.globals.headerAnimationToggle.avion = 'avion';
    this.globals.headerAnimationToggle.bool = true;
    this.globals.headerAnimationToggle.title = 'title'
  }

  sectionMethod(){
   this.globals.navbar = this.globals.sectionNavBar;
  }

  homeMethod(){
    this.globals.navbar = {
      home: 'home',
      notas:'navLink',
      streetArt:'navLink',
      hola:'navLink',
      contacto:'navLink'
    }
  }

  notasMethod(){
    this.globals.navbar = {
      home: 'navLink',
      notas:'notas',
      streetArt:'navLink',
      hola:'navLink',
      contacto:'navLink'
    }
  }

  streetArtMethod(){
    this.globals.navbar = {
      home: 'navLink',
      notas:'navLink',
      streetArt:'artStreet',
      hola:'navLink',
      contacto:'navLink'
    }
  }

  holaMethod(){
    this.globals.navbar = {
      home: 'navLink',
      notas:'navLink',
      streetArt:'navLink',
      hola:'hola',
      contacto:'navLink'
    }
  }

  contactoMethod(){
    this.globals.navbar = {
      home: 'navLink',
      notas:'navLink',
      streetArt:'navLink',
      hola:'navLink',
      contacto:'contacto'
    }
  }

}
