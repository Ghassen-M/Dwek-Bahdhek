import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharmacien',
  templateUrl: './pharmacien.component.html',
  styleUrls: ['./pharmacien.component.scss']
})
export class PharmacienComponent implements OnInit {
  sexe = ["homme", "femme"];
  data = { nom: "Flen Fouleni", dateN: "2000-01-01", sexe: "homme", email: "flenfouleni@gmail.com", num: "99999999" };


  dataRepresentation = [
    ["Nom d'utilisateur", this.data.nom],
    ["Date de naissance", this.data.dateN],
    ["Sexe", this.data.sexe],
    ["Email", this.data.email],
    ["Numéro de téléphone", this.data.num],
  ];


  modifForm = new FormGroup({
    nom: new FormControl(this.data.nom, [Validators.required]),
    dateN: new FormControl(this.data.dateN, [Validators.required]),
    sexe: new FormControl(this.data.sexe, [Validators.required]),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    num: new FormControl(this.data.num, [Validators.required, Validators.pattern("^[0-9]{8}$")]),
  });

  get f() { return this.modifForm.controls; }
  get valid() { return this.modifForm.valid; }

  isModif = false;
  constructor() { }
  ngOnInit(): void {
  }
  onModif(): void {
    this.isModif = true;
  }

  onSubmit(): void {
    this.data = this.modifForm.value;
    this.isModif = !this.isModif;
    this.dataRepresentation = [
      ["Nom d'utilisateur", this.data.nom],
      ["Date de naissance", this.data.dateN],
      ["Sexe", this.data.sexe],
      ["Email", this.data.email],
      ["Numéro de téléphone", this.data.num],
    ];
  }
  onSuppr(): void {
  }
}
