import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  private registerUrl = "http://localhost:6563/api/register";
  private loginurl = "http://localhost:6563/api/login";
  private videourl = "http://localhost:6563/api/getvideos";
  private uploadvideourl = "http://localhost:6563/api/postvideos";
  private dashvideourl = "http://localhost:6563/api/dashboardvideos";
  private likevideourl = "http://localhost:6563/api/likevideo";

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
