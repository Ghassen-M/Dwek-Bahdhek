import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

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
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.api.login(this.loginForm.value).subscribe(data => console.log(data));
    alert('validé');
  }
  inscri(): void {
    this.isInscri = true;
  }
  connecte(): void {
    this.isInscri = !this.inscri;
  }
}
