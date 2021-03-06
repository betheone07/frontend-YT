import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadvideo',
  templateUrl: './uploadvideo.component.html',
  styleUrls: ['./uploadvideo.component.css']
})
export class UploadvideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  afuConfig = {
    uploadAPI: {
      url:"http://localhost:6563/api/upload",
      method: "POST"
    }
};

}


