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
  majCompte(ancienEmail:String, data: any) {
    data['ancienEmail']=ancienEmail;
    return this.http.put<any[]>('http://localhost/dwek_bahdhek/majCompte.php?email=' + data.email, data);
  }
  getCompte(): Observable<any> {
    return this.http.get<any[]>('http://localhost/dwek_bahdhek/Compte.php?email=' + 'houcemkorbi@gmail.com');
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
  getPharmacie(): Observable<any> {
    return this.http.get<any[]>('http://localhost/dwek_bahdhek/pharmacie.php?email=' + 'khouloudtrabelsi@gmail.com');
  }
  majPharmacie(ancienAdr:String,data: any) {
    data['ancienAdr']=ancienAdr;
    return this.http.put<any[]>('http://localhost/dwek_bahdhek/majPharmacie.php?', data);
  }
}
