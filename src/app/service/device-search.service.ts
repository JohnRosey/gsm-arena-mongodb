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
    const url = 'https://servergsmarenamongodb.vercel.app/api/search';
    return this.http.get<Device[]>(url, { params: { brand, ram, year } });  }

    getBrandOptions(): Observable<string[]> {
       return this.http.get<string[]>(`https://servergsmarenamongodb.vercel.app/api/brands`);
    }
}
