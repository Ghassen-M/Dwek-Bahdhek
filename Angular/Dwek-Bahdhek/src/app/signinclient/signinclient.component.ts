import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signinclient',
  templateUrl: './signinclient.component.html',
  styleUrls: ['./signinclient.component.scss']
})
export class SigninclientComponent implements OnInit {
  title = "créer un compte client"
  sexe = ["homme", "femme"];
  data = { nom: "", prenom: "", email: "", mdp: "", dn: "", sexe: "" };
  client = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z]*$")]),
    prenom: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z]*$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mdp: new FormControl('', [Validators.required, Validators.minLength(6)]),
    dn: new FormControl('', [Validators.required]),
    sexe: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    cin: new FormControl('', [Validators.required])
  })
  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }
  get f() {
    return this.client.controls;
  }

  onSubmit() {

    this.api.ajoutClient(this.client.value).subscribe(data => console.log(data));
    alert('validé');

  }
}

