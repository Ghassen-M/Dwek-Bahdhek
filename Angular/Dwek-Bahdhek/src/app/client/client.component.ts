import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  sexe = ["homme", "femme"];
  data = { nom: "Flen Fouleni", dateN: "2000-01-01", sexe: "homme", email: "flenfouleni@gmail.com", num: "99999999", adr: "5 rue nahj, Ville" };

  modifForm = new FormGroup({
    nom: new FormControl(''),
    dateN: new FormControl(''),
    sexe: new FormControl(''),
    email: new FormControl(''),
    num: new FormControl(''),
    adr: new FormControl(''),
  });

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
