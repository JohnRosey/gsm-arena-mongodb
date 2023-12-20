import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from './AuthGuard';
import { LogoutComponent } from './logout/logout.component';



const routes: Routes = [
  {
    path: 'protected',
    component: ProfilComponent, 
    canActivate: [AuthGuard] // Utilisez votre garde de route ici
  },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'profil', component: ProfilComponent },
  { path: 'device-details', component: DeviceDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'device-details/:phoneId', component: DeviceDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
