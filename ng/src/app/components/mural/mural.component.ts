import { Component, OnInit } from '@angular/core';
import { MuralService } from '../../services/mural/mural.service';
import { Mural } from '../../classes/mural.class';
import { Globals } from '../../variables/navegation.variable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  mural: Mural;
  slug: string;

  constructor(private route: ActivatedRoute, private muralService: MuralService, private globals: Globals) { }

  ngOnInit() {

   
    this.globals.navbar = {
      home: 'navLink',
      notas:'navLink',
      streetArt:'artStreet',
      hola:'navLink',
      contacto:'navLink'
    }

    this.globals.sectionNavBar=  this.globals.navbar;

    this.getMural();
  }

  getMural(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.muralService.getMural(this.slug)
        .subscribe(data => this.mural = data);
  }

}
