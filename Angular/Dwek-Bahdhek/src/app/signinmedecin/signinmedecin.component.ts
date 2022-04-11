import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormControl}  from '@angular/forms';

@Component({
  selector: 'app-signinmedecin',
  templateUrl: './signinmedecin.component.html',
  styleUrls: ['./signinmedecin.component.scss']
})
export class SigninmedecinComponent implements OnInit {
  title="créer un compte Médecin"
  sexe = ["homme", "femme"];
  data = { nom:"aaa",prenom:"bbbbb",cin:"11111111",email:"aàgmail.com",mdp:"aaaaaa", dn: "12/12/2000", sexe:"femme", tel:"12345678",  specialite:""};
  specialite = ["Acupuncture", "Allergologie", "Anatomie et cytologie pathologique", "Anesthésie - réanimation", "Angiologie", "Carcinologie médicale", "Cardiologie", "Crénothérapie", "Dermatologie", "Endocrinologie", "Gastro-entérologie", "Gériatrie", "Homéopathie", "Hygiène hospitalière", "Hématologie clinique", "Hémodialyse", "Imagerie médicale",
    "Maladies infectieuses", "Maladies professionnelles", "Médecine appliquée au sport",
    "Médecine aéronautique", "Médecine d'urgence", "Médecine du travail", "Médecine générale", "Médecine interne", "Médecine légale", "Médecine physique", "Médecine préventive et communautaire", "Médecine subaquatique et hyperbare,Neurologie", "Nutrition et maladies nutritionnelles", "Néphrologie", "Phytothérapie", "Pneumologie", "Psychiatrie", "Pédiatrie",
    "Pédopsychiatrie", "Radiothérapie carcinologique", "Rhumatologie", "Réanimation médicale", "Santé publique", "Sexologie", "Toxicologie"];

  medecin = new FormGroup({
    nom: new FormControl(this.data.nom, [Validators.required, Validators.pattern("[A-Za-z]")]),
    prenom: new FormControl(this.data.prenom, [Validators.required, Validators.pattern("[A-Za-z]")]),
    cin: new FormControl(this.data.cin, [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    mdp:new FormControl(this.data.mdp, [Validators.required, Validators.minLength(6)]),
    dn: new FormControl(this.data.dn, [Validators.required]),
    sexe: new FormControl(this.data.sexe, [Validators.required]),
    tel: new FormControl(this.data.tel, [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    specialite: new FormControl(this.data.specialite, [Validators.required]),

  })
 
  constructor() { }

  ngOnInit(): void {
    
  }
  get f() {
    return this.medecin.controls;
  }


  onSubmit() {
    
    
    this.data = this.medecin.value;
   

        
  }    
}

