import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.scss']
})
export class BarreRechercheComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAdr().subscribe((data) => console.log(data));
  }

}
