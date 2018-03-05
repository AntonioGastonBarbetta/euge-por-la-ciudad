import { Injectable } from '@angular/core';
import { Navbar } from '../classes/nabvar.class';
import { headerAnimation } from '../classes/header-animation.class';

@Injectable()
export class Globals {
  navbar: Navbar = {
    home: '',
    notas:'',
    streetArt:'',
    hola:'',
    contacto:''
  };
  
  sectionNavBar: Navbar = {
    home: '',
    notas:'',
    streetArt:'',
    hola:'',
    contacto:''
  };

  headerAnimationToggle: headerAnimation = {
    title: 'title',
    avion: 'avion',
    bool: true,
    section:''
  };
}
  
