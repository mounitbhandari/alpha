import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoUrl = 'https://www.youtube.com/embed/_8kT9xbq5Vk';
  videoUrl2 = 'https://www.youtube.com/embed/x6Q7c9RyMzk';
  public safeURL: SafeResourceUrl;


  videos: any;
  constructor( private _sanitizer: DomSanitizer, private http: HttpClient) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl2);
   }

  ngOnInit(): void {
    this.http.get('assets/video-gallery.json').subscribe((data: any[]) => {
      this.videos = data;
      for (const video of this.videos){
        video.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(video.url);
        // this.safeURLArray.push(this._sanitizer.bypassSecurityTrustResourceUrl(video.url));
      }
      console.log(this.videos);
    });
  }

}
