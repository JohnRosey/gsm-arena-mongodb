import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/internal/operators/tap';

const urlApi='http://localhost:3000/api/' // Replace 'your_api_endpoint' with the actual API endpoint

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  logout() {
    // Supprimer le token de l'utilisateur
    localStorage.removeItem('token');
    // Mettre à jour l'état de connexion
    this.loggedIn.next(false);
  }
  private loggedIn = new BehaviorSubject<boolean>(false);

  

  constructor(private http: HttpClient) {
    this.checkLoginStatus();
    this.http = http;
  }
  checkLoginStatus() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }
get isLoggedIn() {
    return this.loggedIn.asObservable(); // {1}
  }
  getPhoneDetails(phoneId: string| null ) {
    return this.http.get(`${this.urlApi}phones/${phoneId}`);
  }
  private urlApi = urlApi;
  searchDevice(brand: string, internal_memory: string, year: string) {
    return this.http.get(`${this.urlApi}phones?brand=${brand}&internal_memory=${internal_memory}&year=${year}`);
  }
  getBrandOptions(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/api/phones/brands`);
 }
 register(user: any) {
  return this.http.post(`${this.urlApi}users/register`, user);
}

login(credentials: any) {
  return this.http.post(`${this.urlApi}users/login`, credentials).pipe(
    tap((response: any) => {
      // Supposons que la réponse contient un token
      localStorage.setItem('token', response.token as string); // stocker le token
      this.loggedIn.next(true); // mettre à jour l'état de connexion
    })
  );
}

getUserProfile(userId: string):Observable<any> {
  return this.http.get(`${this.urlApi}users/profile/${userId}`);
}

updateUserProfile(userId: string, userProfile: any) {
  return this.http.put(`${this.urlApi}users/profile/${userId}`, userProfile);
}

}
