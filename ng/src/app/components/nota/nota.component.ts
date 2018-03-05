import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota/nota.service';
import { News } from '../../classes/nota.class';
import { Globals } from '../../variables/navegation.variable';
import { Animation } from '../../variables/nota&mural.variable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  new: News;
  slug: string;

  constructor(private route: ActivatedRoute, private notaService: NotaService, private globals: Globals, private animation: Animation) { }

  ngOnInit() {

    this.globals.navbar = {
      home: 'navLink',
      notas:'notas',
      streetArt:'navLink',
      hola:'navLink',
      contacto:'navLink'
    }



    this.globals.sectionNavBar=  this.globals.navbar;
    this.globals.headerAnimationToggle.section = 'titleNotasHover';

    this.getNew();
    this.imgToggle();
  }

  titleMetodOver(): void{
    this.animation.notaMuralAnimation.title = 'titleHover';
  }

  titleMetodOut(): void{
    this.animation.notaMuralAnimation.title = 'title';
  }

  getNew(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.notaService.getNew(this.slug)
        .subscribe(data => {this.new = data;  this.imgToggle();});

  }

  imgToggle():void{

    if (this.new.image_1_url){
      this.animation.notaMuralAnimation.imgToggle1 = 'image';
    }
    if (this.new.image_2_url){
      this.animation.notaMuralAnimation.imgToggle2 = 'image';
    }
    if (this.new.image_3_url){
      this.animation.notaMuralAnimation.imgToggle3 = 'image';
    }
    if (this.new.image_4_url){
      this.animation.notaMuralAnimation.imgToggle4 = 'image';
    }
    if (this.new.image_5_url){
      this.animation.notaMuralAnimation.imgToggle5 = 'image';
    }
    if(this.new.body_1){
      this.animation.notaMuralAnimation.bodytoggle1 = 'body1';
    }
    if(this.new.body_2){
      this.animation.notaMuralAnimation.bodytoggle2 = 'body2';
    }
    if(this.new.body_3){
      this.animation.notaMuralAnimation.bodytoggle3 = 'body3';
    }
    if(this.new.body_4){
      this.animation.notaMuralAnimation.bodytoggle4 = 'body4';
    }
    if(this.new.body_5){
      this.animation.notaMuralAnimation.bodytoggle5 = 'body5';
    }
    if(this.new.body_6){
      this.animation.notaMuralAnimation.bodytoggle6 = 'body6';
    }
  }
}
