import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-signinclient',
  templateUrl: './signinclient.component.html',
  styleUrls: ['./signinclient.component.css']
})
export class SigninclientComponent implements OnInit {
  signinclient!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signinclient = this.fb.group({
      nom: ['', Validators.required,Validators.pattern('A-Za-z')],
      prenom: ['', Validators.required,Validators.pattern('A-Za-z')],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      dn: ['', Validators.required],
          });
          
  }
  get f() {
    return this.signinclient.controls;
  }

  onSubmit() {
    this.signinclient=this.signinclient.value;
    if (this.signinclient.valid) {
      alert('valider.');
      console.table(this.signinclient.value);
    }
  }

}

