import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExpertiesComponent } from './pages/experties/experties.component';
import { ProjectComponent } from './pages/works/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: ExpertiesComponent },
  { path: 'projects', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:  true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }


