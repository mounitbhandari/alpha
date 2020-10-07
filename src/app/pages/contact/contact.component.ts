import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { faCoffee} from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faAtom} from '@fortawesome/free-solid-svg-icons/faAtom';
import { faFlickr} from '@fortawesome/free-brands-svg-icons/faFlickr';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  twitter = faTwitter;
  person = faUser;
  faEnvelope = faEnvelope;
  faAtom = faAtom;
  flicker = faFlickr;
  facebook = faFacebook;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
// https://formspree.io
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      contactForm.resetForm(); // or form.reset();
      this.http.post('https://formspree.io/f/mdopagwk',
        { name: email.name, replyto: email.email, message: email.messages },
        { headers: headers }).subscribe(
        response => {

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mail Sent',
            showConfirmButton: false,
            timer: 3000
        }).then(r => {
        });
        }
      );
    }
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
