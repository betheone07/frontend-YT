import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  videos : null
  likes : 0

  
  constructor(public authService: AuthorizeService, private sanitizer: DomSanitizer) { }

  cleanURL(oldURL) {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }



  ngOnInit(): void{
    this.authService.dashvideos().subscribe((result) => {this.videos = result;});
  }

  

  Like(url) {
    this.authService.likevideo({myurl : url}).subscribe(
      res => {
        this.likes = res.like;
        console.log(res)
      },
      err => console.log(err)
    )

  }

}