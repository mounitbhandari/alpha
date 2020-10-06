import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { faCoffee} from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faAtom} from '@fortawesome/free-solid-svg-icons/faAtom';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  twitter = faTwitter;
  person = faPersonBooth;
  faEnvelope = faEnvelope;
  faAtom = faAtom;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
// https://formspree.io
  onSubmit(contactForm: NgForm) {
    alert('sending mail');
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mdopagwk',
        { name: email.name, replyto: email.email, message: email.messages },
        { headers: headers }).subscribe(
        response => {
          console.log(response);
        }
      );
    }
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
