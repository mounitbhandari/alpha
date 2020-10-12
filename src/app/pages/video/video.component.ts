import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoUrl = 'https://www.youtube.com/embed/_8kT9xbq5Vk';
  public safeURL: SafeResourceUrl;
  constructor( private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
   }

  ngOnInit(): void {
  }

}
