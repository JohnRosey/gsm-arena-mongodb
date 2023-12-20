import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: ServiceService , private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    // Appeler la méthode de déconnexion de votre service d'authentification
    this.service.logout();

    // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
    this.router.navigate(['/']); // ou 'home' ou toute autre route appropriée
  }

}
