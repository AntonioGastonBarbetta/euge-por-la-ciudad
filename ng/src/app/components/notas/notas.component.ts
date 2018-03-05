import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../services/notas/notas.service';
import { News } from '../../classes/nota.class';
import { Globals } from '../../variables/navegation.variable';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  news: News[]= [];

  constructor(private notasService: NotasService, private globals: Globals) { }

  ngOnInit() {

    this.globals.navbar = {
      home: 'navLink',
      notas:'notas',
      streetArt:'navLink',
      hola:'navLink',
      contacto:'navLink'
    }

    this.globals.headerAnimationToggle.section = 'titleNotasHover';
    
    this.globals.sectionNavBar=  this.globals.navbar;


    this.getNews();
  }

  getNews(): void {
    this.notasService.getNews()
        .subscribe(data => this.news = data);
  }
}
