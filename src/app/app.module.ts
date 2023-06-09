import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule } from "@angular/material/tabs"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaugeModule } from 'angular-gauge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
