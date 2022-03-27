import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  data = { nom: "Flen Fouleni", dateN: "2000-01-01", sexe: "homme", email: "flenfouleni@gmail.com", num: "99999999", specialite: "Médecine générale" };


  dataRepresentation = [
    ["Nom d'utilisateur", this.data.nom],
    ["Date de naissance", this.data.dateN],
    ["Sexe", this.data.sexe],
    ["Email", this.data.email],
    ["Numéro de téléphone", this.data.num],
    ["Spécialité", this.data.specialite]
  ];


  modifForm = new FormGroup({
    nom: new FormControl(this.data.nom, [Validators.required]),
    dateN: new FormControl(this.data.dateN, [Validators.required]),
    sexe: new FormControl(this.data.sexe, [Validators.required]),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    num: new FormControl(this.data.num, [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    specialite: new FormControl(this.data.specialite, [Validators.required]),
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
      ["Spécialité", this.data.specialite]

    ];
  }
  onSuppr(): void {
  }
}
