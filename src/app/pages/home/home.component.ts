import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {DataService, Person} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any = [];

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  images = [1, 2, 3, 4, 5, 6].map((n) => `assets/carousel/carousel_${n}.jpg`);
  videoUrl = 'https://www.youtube.com/embed/_8kT9xbq5Vk';
  public safeURL: SafeResourceUrl;

  people$: Observable<Person[]>;
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

  constructor(private httpClient: HttpClient, private _sanitizer: DomSanitizer, private dataService: DataService) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngOnInit(){
    this.people$ = this.dataService.getPeople();
    this.httpClient.get('assets/data.json').subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

}
