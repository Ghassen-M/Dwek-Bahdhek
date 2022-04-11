import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-signinpharmacien',
  templateUrl: './signinpharmacien.component.html',
  styleUrls: ['./signinpharmacien.component.scss']
})
export class SigninpharmacienComponent implements OnInit {

  signinpharmacie!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signinpharmacie = this.fb.group({
      nom: ['', Validators.required,Validators.pattern('A-Za-z')],
      prenom: ['', Validators.required,Validators.pattern('A-Za-z')],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      cin: ['', [Validators.required, Validators.maxLength(8),Validators.pattern('0-9')]],
      tel: ['', [Validators.required, Validators.maxLength(8),Validators.pattern('0-9')]],
      lr: ['', [Validators.required,]],
      dn: ['', Validators.required],
          });
          
  }
  get f() {
    return this.signinpharmacie.controls;
  }

  onSubmit() {
    if (this.signinpharmacie.valid) {
      alert('valide ');
      console.table(this.signinpharmacie.value);
    }
  }
}
