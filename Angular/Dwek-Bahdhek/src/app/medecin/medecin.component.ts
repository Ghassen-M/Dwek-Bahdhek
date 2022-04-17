import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent implements OnInit {
  sexe = ["homme", "femme"];
  specialite = ["Acupuncture", "Allergologie", "Anatomie et cytologie pathologique", "Anesthésie - réanimation", "Angiologie", "Carcinologie médicale", "Cardiologie", "Crénothérapie", "Dermatologie", "Endocrinologie", "Gastro-entérologie", "Gériatrie", "Homéopathie", "Hygiène hospitalière", "Hématologie clinique", "Hémodialyse", "Imagerie médicale",
    "Maladies infectieuses", "Maladies professionnelles", "Médecine appliquée au sport",
    "Médecine aéronautique", "Médecine d'urgence", "Médecine du travail", "Médecine générale", "Médecine interne", "Médecine légale", "Médecine physique", "Médecine préventive et communautaire", "Médecine subaquatique et hyperbare,Neurologie", "Nutrition et maladies nutritionnelles", "Néphrologie", "Phytothérapie", "Pneumologie", "Psychiatrie", "Pédiatrie",
    "Pédopsychiatrie", "Radiothérapie carcinologique", "Rhumatologie", "Réanimation médicale", "Santé publique", "Sexologie", "Toxicologie"];


  dataRepresentation: any[] = [];


  modifForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    dateN: new FormControl('', [Validators.required]),
    sexe: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    adr: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
    mdp: new FormControl('', [Validators.required]),
  });

  get f() { return this.modifForm.controls; }
  get valid() { return this.modifForm.valid; }

  isModif = false;
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
          ["Adresse", data.adr],
        ];
        this.modifForm.patchValue(data);

      });
  }
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
        ["Adresse", this.modifForm.value.adr],
      ];
    });
  }
  onSuppr(): void {
    this.api.deleteArticles(this.modifForm.value.email).subscribe();
    this.api.deleteCompte(this.modifForm.value.email).subscribe();
    this.router.navigateByUrl('/login');
  }
}
