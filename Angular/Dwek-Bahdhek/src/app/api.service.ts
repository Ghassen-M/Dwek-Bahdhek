import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getcomptesAttente(): Observable<any> {
    return this.http.get<any[]>('http://localhost/dwek_bahdhek/comptesAttente.php');
  }
  deleteCompteAttente(email: String) {
    return this.http.delete<any[]>('http://localhost/dwek_bahdhek/deleteCompteAttente.php?email=' + email);
  }
  acceptCompteAttente(email: String, mdp: String) {
    let emailJson = { 'email': email, 'mdp': mdp };
    return this.http.put<any[]>('http://localhost/dwek_bahdhek/acceptCompteAttente.php?email=' + email + '&mdp=' + mdp, emailJson);
  }
  majCompte(data: any) {
    return this.http.put<any[]>('http://localhost/dwek_bahdhek/majCompteClient.php?email=' + data.email, data);
  }
  getCompte(): Observable<any> {
    return this.http.get<any[]>('http://localhost/dwek_bahdhek/Compte.php?email=' + 'khouloudtrabelsi@gmail.com');
  }
  deleteCompte(email: String) {
    return this.http.delete<any[]>('http://localhost/dwek_bahdhek/deleteCompte.php?email=' + email);
  }
  deletePharmacie(email: String) {
    return this.http.delete<any[]>('http://localhost/dwek_bahdhek/deletePharmacie.php?email=' + email);
  }
  deleteArticles(email: String) {
    return this.http.delete<any[]>('http://localhost/dwek_bahdhek/deleteArticles.php?email=' + email);
  }
  getAdr() {
    return this.http.get<any[]>('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAgyDaETZOaOTEFTe16PTheXpe1UrtVu1Y');
  }
}
