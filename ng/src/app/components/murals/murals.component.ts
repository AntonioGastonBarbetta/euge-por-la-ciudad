import { Component, OnInit } from '@angular/core';
import { MuralsService } from '../../services/murals/murals.service';
import { Mural } from '../../classes/mural.class';
import { Globals } from '../../variables/navegation.variable';

@Component({
  selector: 'app-murals',
  templateUrl: './murals.component.html',
  styleUrls: ['./murals.component.css']
})
export class MuralsComponent implements OnInit {

  murals: Mural[]= [];

  constructor(private muralsService: MuralsService, private globals: Globals) { }

  ngOnInit() {

    this.globals.navbar = {
      home: 'navLink',
      notas:'navLink',
      streetArt:'artStreet',
      hola:'navLink',
      contacto:'navLink'
    }

    this.globals.headerAnimationToggle.section = 'titleStreetArtHover';

    this.globals.sectionNavBar=  this.globals.navbar;

    this.getMural();
  }

  getMural(): void {
    this.muralsService. getMurals()
        .subscribe(data => this.murals = data);
  }

}
