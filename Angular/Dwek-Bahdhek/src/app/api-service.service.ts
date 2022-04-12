import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http':
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public _HttpClient: HttpClient) { }
}
