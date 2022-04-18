import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signinmedecin',
  templateUrl: './signinmedecin.component.html',
  styleUrls: ['./signinmedecin.component.scss']
})
export class SigninmedecinComponent implements OnInit {
  title = "créer un compte Médecin"
  sexe = ["homme", "femme"];
  specialite = ["Acupuncture", "Allergologie", "Anatomie et cytologie pathologique", "Anesthésie - réanimation", "Angiologie", "Carcinologie médicale", "Cardiologie", "Crénothérapie", "Dermatologie", "Endocrinologie", "Gastro-entérologie", "Gériatrie", "Homéopathie", "Hygiène hospitalière", "Hématologie clinique", "Hémodialyse", "Imagerie médicale",
    "Maladies infectieuses", "Maladies professionnelles", "Médecine appliquée au sport",
    "Médecine aéronautique", "Médecine d'urgence", "Médecine du travail", "Médecine générale", "Médecine interne", "Médecine légale", "Médecine physique", "Médecine préventive et communautaire", "Médecine subaquatique et hyperbare,Neurologie", "Nutrition et maladies nutritionnelles", "Néphrologie", "Phytothérapie", "Pneumologie", "Psychiatrie", "Pédiatrie",
    "Pédopsychiatrie", "Radiothérapie carcinologique", "Rhumatologie", "Réanimation médicale", "Santé publique", "Sexologie", "Toxicologie"];

  medecin = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z]*")]),
    prenom: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z]*")]),
    cin: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mdp: new FormControl('', [Validators.required, Validators.minLength(6)]),
    dn: new FormControl('', [Validators.required]),
    sexe: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    specialite: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
  })

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }
  get f() {
    return this.medecin.controls;
  }


  onSubmit() {
    this.api.ajoutMedecin(this.medecin.value).subscribe(data => console.log(data));
    alert('validé');

  }
}