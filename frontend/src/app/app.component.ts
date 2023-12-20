import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: any;
  logout() {
    // Logique de déconnexion
    this.service.logout();
    // Redirection optionnelle
    this.router.navigate(['localhost:4200']);
  }
  
  constructor(public service: ServiceService) {}
  title = 'frontend';
}
