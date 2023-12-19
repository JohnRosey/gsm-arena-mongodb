import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const urlApi='http://localhost:3000/api/' // Replace 'your_api_endpoint' with the actual API endpoint

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getPhoneDetails(phoneId: string| null ) {
    return this.http.get(`${this.urlApi}phones/${phoneId}`);
  }
  private urlApi = urlApi;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  searchDevice(brand: string, internal_memory: string, year: string) {
    return this.http.get(`${this.urlApi}phones?brand=${brand}&internal_memory=${internal_memory}&year=${year}`);
  }
  getBrandOptions(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/api/phones/brands`);
 }
}
