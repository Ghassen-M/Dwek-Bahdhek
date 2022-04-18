import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-signinpharmacien',
  templateUrl: './signinpharmacien.component.html',
  styleUrls: ['./signinpharmacien.component.scss']
})
export class SigninpharmacienComponent implements OnInit {

  title = "créer un compte pharmacien"
  sexe = ["homme", "femme"];

  constructor(private api: ApiService) { }

  pharmacien = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z]*")]),
    prenom: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z]*")]),
    cin: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mdp: new FormControl('', [Validators.required, Validators.minLength(6)]),
    dn: new FormControl('', [Validators.required]),
    sexe: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    file: new FormControl('', [Validators.required]),

  })

  ngOnInit(): void {

  }
  get f() {
    return this.pharmacien.controls;
  }

  onSubmit() {
    this.api.ajoutPharmacien(this.pharmacien.value).subscribe(data => console.log(data));
    alert('validé');

  }
}