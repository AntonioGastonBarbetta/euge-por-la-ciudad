import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
import { NewsHome } from '../../classes/homeNews.class';
import { Globals } from '../../variables/navegation.variable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: NewsHome[]= [];


  constructor(private homeService: HomeService, private globals: Globals) { }

  
  ngOnInit() {
   
    this.globals.navbar = {
      home: 'home',
      notas:'navLink',
      streetArt:'navLink',
      hola:'navLink',
      contacto:'navLink'
    }

    this.globals.headerAnimationToggle.section = 'titleHomeHover';

    this.globals.sectionNavBar=  this.globals.navbar;

    this.getNewsHome();
  }

  getNewsHome(): void {
    this.homeService.getNewsHome()
        .subscribe(data => this.news = data);
  }

}
