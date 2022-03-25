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

  modifForm = new FormGroup({
    nom: new FormControl(this.data.nom, Validators.required),
    dateN: new FormControl(this.data.dateN),
    sexe: new FormControl(this.data.sexe),
    email: new FormControl(this.data.email),
    num: new FormControl(this.data.num),
    adr: new FormControl(this.data.adr),
  });

  get f() { return this.modifForm.controls; }


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
  }
  onSuppr(): void {
  }
}
