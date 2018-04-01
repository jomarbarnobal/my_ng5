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
  MzCardModule
  } from 'ng2-materialize';

import { AdminComponent } from './auth/admin';
import { HomeCompoent } from './home';
import { AppComponent } from './app.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MainComponent } from './ui/main/main.component';
import { CardComponent } from './ui/card/card.component';
import { AboutComponent } from './ui/about/about.component';
import { ServicesComponent } from './ui/service/service.component';
import { AuthLinksComponent } from './auth/auth-links.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeCompoent,
    NavigationComponent,
    FooterComponent,
    MainComponent,
    CardComponent,
    AuthLinksComponent,
    AboutComponent,
    ServicesComponent
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
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
