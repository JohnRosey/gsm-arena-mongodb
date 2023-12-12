import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../model/device';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeviceSearchService {
  constructor(private http: HttpClient) { }

  searchDevices(brand: string, ram: string, year: string) {
    // Replace with your actual backend URL
    const url = 'http://localhost:3000/api/search';
    return this.http.get<Device[]>(url, { params: { brand, ram, year } });  }
    
    getBrandOptions(): Observable<string[]> {
       return this.http.get<string[]>(`http://localhost:3000/api/brands`);
    }
}
