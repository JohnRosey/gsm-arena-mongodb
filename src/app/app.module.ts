import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceSearchService } from './service/device-search.service';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import{MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [DeviceSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
