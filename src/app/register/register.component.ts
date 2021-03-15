import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../authorize.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    name: null,
    email: null,
    password: null
  }
  constructor(private auth: AuthorizeService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        alert(`User ${this.registerUserData.name} Registered!`)

        this.router.navigate(['/login'])
      },
      err => console.log(err)
    )
  }

}
