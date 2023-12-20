import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
interface UserProfile {
    username: string;
    email: string;
    // ... autres propriétés du profil ...
  }

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userProfile: UserProfile = {
    username: '',
    email: '',
    // initialiser les autres propriétés si nécessaire
  };

  editFields: { [key: string]: boolean } = {};

  toggleEdit(field: string) {
    this.editFields[field] = !this.editFields[field];
  }
  updateProfile() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.service.updateUserProfile(userId, this.userProfile).subscribe(
        response => {
          console.log('Profil mis à jour avec succès', response);
          // Gérer la suite après la mise à jour du profil
        },
        error => {
          console.error('Erreur lors de la mise à jour du profil', error);
          // Gérer les erreurs ici
        }
      );
    } else {
      console.log('ID utilisateur non trouvé');
    }
  }
  
user: any;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.initializeEditFields();
    this.getUserProfile();
  }
  initializeEditFields() {
    // Initialisez tous les champs à false pour commencer
    this.editFields = {
      username: false,
      email: false,
      
    };
  }
  getUserProfile() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.service.getUserProfile(userId).subscribe(
        profile => {
          this.userProfile = profile; // Assumer que 'profile' est la réponse contenant les données du profil
        },
        error => {
          console.error('Erreur lors de la récupération du profil', error);
          // Gérer les erreurs ici
        }
      );
    } else {
      console.log('Aucun ID utilisateur trouvé');
      // Gérer l'absence d'ID de l'utilisateur ici
    }
  }
}

