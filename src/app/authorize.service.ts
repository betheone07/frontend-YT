import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  private registerUrl = "https://backend-youtube.herokuapp.com/api/register";
  private loginurl = "https://backend-youtube.herokuapp.com/api/login";
  private videourl = "https://backend-youtube.herokuapp.com/api/getvideos"

  constructor(private http: HttpClient, private router: Router) { }


  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this.loginurl,user)
  }

  getvideos() {
    return this.http.get<any>(this.videourl)
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
    this.router.navigate(['/dashboard'])
  }
}
