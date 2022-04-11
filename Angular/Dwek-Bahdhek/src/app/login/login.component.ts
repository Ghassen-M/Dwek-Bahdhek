import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  isInscri = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.loginForm.valid)
      console.log(this.loginForm.value);
  }

  inscri(): void {
    this.isInscri = true;
  }
  connecte(): void {
    this.isInscri = !this.inscri;
  }
}
