import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {
    username: '',
    password: ''
  };
  constructor(private service: ServiceService,private router: Router) { }
  login() {
    this.service.login(this.credentials).subscribe(
      response => {
        console.log('Connexion réussie', response);
        console.log('UserID', response.userId)
        //redirect('/search');
        localStorage.setItem('token', response.token);
        // Si l'ID de l'utilisateur est inclus dans la réponse, stockez-le également
        localStorage.setItem('userId', response.userId);

        // Gérer la suite après une connexion réussie
        // Par exemple, stocker le token, mettre à jour l'état de connexion, etc.
        const info = this.service.getUserProfile(response.userId).toString();
        console.log(info);
    // Gérer la suite après avoir obtenu les informations utilisateur
    // Par exemple, stocker les informations utilisateur dans un service
    this.router.navigate(['/search']); 
   
  

      },
      error => {
        alert('Utilisateur introuvable')
        console.error('Erreur lors de la connexion', error);
        // Gérer les erreurs de connexion ici
      }
    );
  }

}
