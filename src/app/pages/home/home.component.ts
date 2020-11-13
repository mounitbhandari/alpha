import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from "../../services/common.service";


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
  isDeviceXs: boolean;

  constructor(private httpClient: HttpClient, public common: CommonService) {

  }

  ngOnInit(){
    this.httpClient.get('assets/data.json').subscribe(data => {
      console.log(data);
      this.products = data;
    });
    this.isDeviceXs = this.common.isDeviceXs;
  }

}
