import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { Contact } from '../../classes/contact.class';
import { Globals } from '../../variables/navegation.variable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contact: Contact= {
    name: '',
    email: '',
    topic: '',
    message: ''
  };


  constructor(private contactService: ContactService, private globals: Globals) {}

  ngOnInit() {

    this.globals.navbar = {
      home: 'navLink',
      notas:'navLink',
      streetArt:'navLink',
      hola:'navLink',
      contacto:'contacto'
    }

    this.globals.headerAnimationToggle.section = 'titleContactHover';

    this.globals.sectionNavBar=  this.globals.navbar;
  }

  addContact( ): void {
    if ( this.contact.topic && this.contact.message ) {
      this.contactService.addContact(this.contact)
          .subscribe();
    }
  }
}

