import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeviceDetailsComponent } from './device-details/device-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DeviceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,// Importez le module HttpClientModule
  ],
  providers: [SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
