import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.scss']
})
export class BarreRechercheComponent implements OnInit {
  chercher !:FormGroup

  constructor() { }

  ngOnInit(): void {
  }
  cherchermed(){

  }

}
