import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
// import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { PacificComponent } from './pacific/pacific.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:[ BrowserModule, FormsModule,RouterModule,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, IndiaUsaComponent, AtlanticComponent, PacificComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
