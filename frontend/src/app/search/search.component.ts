import { Component, OnInit } from '@angular/core';
import { Device } from '../model/Device';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

itemsPerPage = 32; // Nombre d'éléments par page
  currentPage = 1; // Page actuelle
  brand: string = '';
  internal_memory: string = '';
  year: string = '';
  devices: Device[] = []; // Utilisez l'interface ici
  brandOptions: string[] = [];
  paginatedDevices: Device[] = []; // Et ici aussicurrentPage = 1;
  isloading = false;
  constructor(private service: ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.updateBrandOptions();

   }
  

   openDeviceDetails(phoneId: string) {
    this.router.navigate(['/device-details', phoneId]);
  }
  searchDevice() {
    let memoryValue = this.internal_memory ? `${this.internal_memory} GB` : '';
    this.isloading=true
    this.service.searchDevice(this.brand, this.internal_memory, this.year).subscribe((data: any) => {
      this.devices = data.filter((device: Device) =>
        (!this.brand || device.brand === this.brand) &&
        (!memoryValue || device.internal_memory === memoryValue) &&
        (!this.year || device.announced && device.announced.includes(this.year))
      ) as Device[];
      
      this.onDevicesUpdated();this.isloading=false
    });
  }
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDevices = this.devices.slice(startIndex, endIndex);
  }
  onDevicesUpdated() {
    this.updatePagination();
      }
  

  updateBrandOptions() {
    this.service.getBrandOptions()
      .subscribe(options => {
        this.brandOptions = options;
      }, error => {
        console.error('Erreur lors du chargement des options de marque', error);
      });
  }
}  


