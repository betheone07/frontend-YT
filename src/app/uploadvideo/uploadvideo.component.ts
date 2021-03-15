import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthorizeService } from '../authorize.service';


@Component({
  selector: 'app-uploadvideo',
  templateUrl: './uploadvideo.component.html',
  styleUrls: ['./uploadvideo.component.css']
})
export class UploadvideoComponent implements OnInit {

  Url = {
    title : null,
    url : null,
    email : null
  
  }

  constructor(private auth: AuthorizeService, private router: Router) { }

  ngOnInit(): void {
  }

  upload() {
    this.auth.postvideos(this.Url).subscribe(
      res => {
        console.log(res)
        alert(`${this.Url.title} Added!` )
      },
      err => console.log(err) 
    )
  }

}


