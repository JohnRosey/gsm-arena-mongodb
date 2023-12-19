import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'device-details',component:DeviceDetailsComponent},
  {path:'search',component:SearchComponent},
  { path: 'device-details/:phoneId', component: DeviceDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
