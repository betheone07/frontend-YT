import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';



@Component({
  selector: 'app-showvideos',
  templateUrl: './showvideos.component.html',
  styleUrls: ['./showvideos.component.css']
})
export class ShowvideosComponent implements OnInit {

  videos:any;
  localemail:any;
  
  constructor(private auth : AuthorizeService, private sanitizer: DomSanitizer) { }



  cleanURL(oldURL) {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }
  
  ngOnInit(): void {
    
    this.localemail = localStorage.getItem('localuser')

    this.auth.getvideos({email : this.localemail}).subscribe((result) => {this.videos = result.videos;
      console.log(this.videos)});
  }

  

}
