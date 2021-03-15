import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  private registerUrl = "https://backend-yt.herokuapp.com/api/register";
  private loginurl = "https://backend-yt.herokuapp.com/api/login";
  private videourl = "https://backend-yt.herokuapp.com/api/getvideos";
  private uploadvideourl = "https://backend-yt.herokuapp.com/api/postvideos";
  private dashvideourl = "https://backend-yt.herokuapp.com/api/dashboardvideos";
  private likevideourl = "https://backend-yt.herokuapp.com/api/likevideo";

  constructor(private http: HttpClient, private router: Router) { }


  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this.loginurl,user)
  }

  getvideos(url) {
    return this.http.post<any>(this.videourl, url)
  }

  postvideos(url) {
    return this.http.post<any>(this.uploadvideourl, url)
  }

  dashvideos() {
    return this.http.get<any>(this.dashvideourl)
  }


  likevideo(url) {
    return this.http.post<any>(this.likevideourl, url)
  }

  //whether token found in localstorage or not-boolean val
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('localuser')
    this.router.navigate(['/dashboard'])
  }
}
