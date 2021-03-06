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
  
  constructor(private auth : AuthorizeService, private sanitizer: DomSanitizer) { }



  cleanURL(oldURL) {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }
  
  ngOnInit(): void {
    

    this.auth.getvideos().subscribe((result) => {this.videos = result;console.log(this.videos)});
  }

  

}
