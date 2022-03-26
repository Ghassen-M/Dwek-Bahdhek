import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-signinmedecin',
  templateUrl: './signinmedecin.component.html',
  styleUrls: ['./signinmedecin.component.css']
})
export class SigninmedecinComponent implements OnInit {
  signinmedecin!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signinmedecin = this.fb.group({
      nom: ['', Validators.required,Validators.pattern('A-Za-z')],
      prenom: ['', Validators.required,Validators.pattern('A-Za-z')],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      cin: ['', [Validators.required, Validators.maxLength(8),Validators.pattern('0-9')]],
      tel: ['', [Validators.required, Validators.maxLength(8),Validators.pattern('0-9')]],
      dn: ['', Validators.required],
          });
          
  }
  get f() {
    return this.signinmedecin.controls;
  }

  onSubmit() {
    if (this.signinmedecin.valid) {
      alert('valide ');
      console.table(this.signinmedecin.value);
    }
  }


}
