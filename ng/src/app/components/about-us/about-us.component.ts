import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../../services/about-us/about-us.service';
import { AboutUs } from '../../classes/about-us.class';
import { Globals } from '../../variables/navegation.variable';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutUs: AboutUs[]=[] ;


  constructor(private aboutUsService: AboutUsService, private globals: Globals) { }

  ngOnInit() {

    this.globals.navbar = {
      home: 'navLink',
      notas:'navLink',
      streetArt:'navLink',
      hola:'hola',
      contacto:'navLink'
    }

    this.globals.headerAnimationToggle.section = 'titleHolaHover';

    this.globals.sectionNavBar=  this.globals.navbar;


    this.getAboutUs();
  }

  getAboutUs(): void {
    this.aboutUsService.getAboutUs()
        .subscribe(data => this.aboutUs = data);
  }
}

