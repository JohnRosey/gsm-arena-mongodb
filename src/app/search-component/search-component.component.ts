import { Component, OnInit } from '@angular/core';
import { DeviceSearchService } from '../service/device-search.service';
import {  Device } from '../model/device';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
// Variables for search criteria
brand: string = '';
internal_memory: string = '';
year: string = '';
devices: Device[] = []; // Utilisez l'interface ici
paginatedDevices: Device[] = []; // Et ici aussicurrentPage = 1;
itemsPerPage = 32; // Nombre d'éléments par page
  currentPage = 1; // Page actuelle

  pages: number[] = [];
  brandOptions: string[] = [];
constructor(private deviceSearchService: DeviceSearchService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
// Method to handle search
search() {
  // Logic to perform search, likely making a call to a backend service
  console.log(`Searching for Brand: ${this.brand}, RAM: ${this.internal_memory}, Year: ${this.year}`);
  this.deviceSearchService.searchDevices(this.brand, this.internal_memory, this.year)
    .subscribe(data => {
      this.devices = data.filter(device =>
        (!this.brand || device.brand === this.brand) &&
        (!this.internal_memory || device.internal_memory === this.internal_memory) &&
        (!this.year || device.announced === this.year)
      ) as Device[];
      this.onDevicesUpdated();
    });

}
calculateTotalPages(): number {
  return Math.ceil(this.devices.length / this.itemsPerPage);
}
// Method to handle pagination
changePage(pageNumber: number) {
  // Logic to change page
  console.log(`Change to page ${pageNumber}`);
}

  // Méthode pour mettre à jour les appareils paginés
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDevices = this.devices.slice(startIndex, endIndex);
  }
  

  // Méthode pour changer de page
  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updatePagination();
  }
  updateBrandOptions() {
   this.deviceSearchService.getBrandOptions().subscribe(data => this.brandOptions = data);
  }
  calculatePages() {
    const totalPages = Math.ceil(this.devices.length / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  // Appelez cette méthode chaque fois que les appareils sont mis à jour
  // Par exemple, après avoir reçu les données du serveur
  onDevicesUpdated() {
    this.updatePagination();
    this.calculatePages();  }
  
}
