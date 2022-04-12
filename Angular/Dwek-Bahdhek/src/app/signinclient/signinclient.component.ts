import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators }  from '@angular/forms';


@Component({
  selector: 'app-signinclient',
  templateUrl: './signinclient.component.html',
  styleUrls: ['./signinclient.component.scss']
})
export class SigninclientComponent implements OnInit {
  title="créer un compte client"
  sexe = ["homme", "femme"];
  data = { nom:"",prenom:"",email:"",mdp:"", dn: "", sexe:""};
  client = new FormGroup({
    nom: new FormControl(this.data.nom, [Validators.required, Validators.pattern("[A-Za-z]*")]),
    prenom: new FormControl(this.data.prenom, [Validators.required, Validators.pattern("[A-Za-z]*")]),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    mdp:new FormControl(this.data.mdp, [Validators.required, Validators.minLength(6)]),
    dn: new FormControl(this.data.dn, [Validators.required]),
    sexe: new FormControl(this.data.sexe, [Validators.required]),
    
  })
  constructor() { }

  ngOnInit(): void {
   
  }
  get f() {
    return this.client.controls;
  }

  onSubmit() {
    this.client=this.client.value;
    if (this.client.valid) {
      alert('valider.');}
      else{
        alert('invalid ')
      }
    }
  
}
