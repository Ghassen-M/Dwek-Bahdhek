import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators }  from '@angular/forms';


@Component({
  selector: 'app-signinpharmacien',
  templateUrl: './signinpharmacien.component.html',
  styleUrls: ['./signinpharmacien.component.scss']
})
export class SigninpharmacienComponent implements OnInit {

  title="créer un compte pharmacien"
  sexe = ["homme", "femme"];
  data = { nom:"",prenom:"",cin:"",email:"",mdp:"", dn: "", sexe:"", tel:"",  lr:""};
  
  pharmacien = new FormGroup({
    nom: new FormControl(this.data.nom, [Validators.required, Validators.pattern("[A-Za-z]*")]),
    prenom: new FormControl(this.data.prenom, [Validators.required, Validators.pattern("[A-Za-z]*")]),
    cin: new FormControl(this.data.cin, [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    mdp:new FormControl(this.data.mdp, [Validators.required, Validators.minLength(6)]),
    dn: new FormControl(this.data.dn, [Validators.required]),
    sexe: new FormControl(this.data.sexe, [Validators.required]),
    tel: new FormControl(this.data.tel, [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    lr: new FormControl(this.data.lr, [Validators.required]),

  })

  ngOnInit(): void {
    
  }
  get f() {
    return this.pharmacien.controls;
  }

  onSubmit() {
    if (this.pharmacien.valid) {
      alert('valide ');
      console.table(this.pharmacien.value);
    }
  }
}
