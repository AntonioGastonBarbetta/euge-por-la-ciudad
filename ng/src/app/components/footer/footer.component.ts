import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  foot = 'COPYRIGHT © 2018 - EUGE POR LA CIUDAD';

  constructor() { }

  ngOnInit() {
  }

}
