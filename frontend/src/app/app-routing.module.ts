import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path:'device-details',component:DeviceDetailsComponent},
  {path:'search',component:SearchComponent},
  { path: 'device-details/:phoneId', component: DeviceDetailsComponent },
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profil/',component:ProfilComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
