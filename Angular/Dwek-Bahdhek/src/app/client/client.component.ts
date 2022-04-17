import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  sexe = ["homme", "femme"];
  dataRepresentation: any[] = [];

  modifForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    dateN: new FormControl('', [Validators.required]),
    sexe: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    adr: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
    mdp: new FormControl('', [Validators.required])
  });

  get f() { return this.modifForm.controls; }
  get valid() { return this.modifForm.valid; }

  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    this.api.getCompte().subscribe(
      (data) => {

        this.dataRepresentation = [
          ["Nom d'utilisateur", data.username],
          ["Date de naissance", data.dateN],
          ["Sexe", data.sexe],
          ["Email", data.email],
          ["Numéro de téléphone", data.tel],
          ["Adresse", data.adr]
        ];
        this.modifForm.patchValue(data);

      });

  }
  isModif = false;
  onModif(): void {

    this.isModif = true;
    this.api.getCompte().subscribe(
      (data) => {
        this.modifForm.patchValue(data);
      });
  }

  onSubmit(): void {
    this.isModif = !this.isModif;

    this.api.majCompte(this.modifForm.value).subscribe((data) => {
      this.dataRepresentation = [
        ["Nom d'utilisateur", this.modifForm.value.username],
        ["Date de naissance", this.modifForm.value.dateN],
        ["Sexe", this.modifForm.value.sexe],
        ["Email", this.modifForm.value.email],
        ["Numéro de téléphone", this.modifForm.value.tel],
        ["Adresse", this.modifForm.value.adr]
      ];
    });

  }

  onSuppr(): void {
    this.api.deleteCompte(this.modifForm.value.email).subscribe();
    this.router.navigateByUrl('/login');
  }
}
