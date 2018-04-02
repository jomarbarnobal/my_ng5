import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Angular2TokenService } from 'angular2-token'


import { 
  MzParallaxModule,
  MzButtonModule, 
  MzInputModule,
  MzNavbarModule,
  MzCardModule,
  MzSidenavModule
  } from 'ng2-materialize';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SideNavComponent } from './ui/sidenav/sidenav.compoent';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent
  ],

  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MzButtonModule,
    MzInputModule,
    MzParallaxModule,
    MzNavbarModule,
    MzCardModule,
    MzSidenavModule,
    ReactiveFormsModule
  ],
  providers: [
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
