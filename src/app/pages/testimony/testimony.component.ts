import { Component, OnInit } from '@angular/core';
import {Picture} from '../../models/picture.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  comments: any ;
  x=50;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/comments.json').subscribe((data: any[]) => {
      this.comments = data;
      console.log(this.comments);
    });
  }

}
