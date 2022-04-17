import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacien',
  templateUrl: './pharmacien.component.html',
  styleUrls: ['./pharmacien.component.scss']
})
export class PharmacienComponent implements OnInit {
  sexe = ["homme", "femme"];

  dataRepresentation: any[] = [];

  ancienEmail='';
  
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
      this.ancienEmail=this.modifForm.value.email;

  }

  onSubmit(): void {
    this.isModif = !this.isModif;

    this.api.majCompte(this.ancienEmail,this.modifForm.value).subscribe((data) => {
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
    this.api.deletePharmacie(this.modifForm.value.email).subscribe();
    this.api.deleteCompte(this.modifForm.value.email).subscribe();
    this.router.navigateByUrl('/login');
  }
}
