import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  isInscri = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
  }

  inscri(): void {
    this.isInscri = true;
  }
  connecte(): void {
    this.isInscri = !this.inscri;
  }
}
