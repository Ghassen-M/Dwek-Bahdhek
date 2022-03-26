import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  sexe = ["homme", "femme"];
  data = { nom: "Flen Fouleni", dateN: "2000-01-01", sexe: "homme", email: "flenfouleni@gmail.com", num: "99999999", adr: "5 rue nahj, Ville" };


  dataRepresentation = [
    ["Nom d'utilisateur", this.data.nom],
    ["Date de naissance", this.data.dateN],
    ["Sexe", this.data.sexe],
    ["Email", this.data.email],
    ["Numéro de téléphone", this.data.num],
    ["Adresse", this.data.adr]
  ];


  modifForm = new FormGroup({
    nom: new FormControl(this.data.nom, [Validators.required]),
    dateN: new FormControl(this.data.dateN, [Validators.required]),
    sexe: new FormControl(this.data.sexe, [Validators.required]),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    num: new FormControl(this.data.num, [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    adr: new FormControl(this.data.adr, [Validators.required]),
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
      ["Adresse", this.data.adr]
    ];
  }
  onSuppr(): void {
  }
}
