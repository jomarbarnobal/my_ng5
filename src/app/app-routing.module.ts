import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCompoent } from './home';
// import { AdminComponent } from './auth/admin';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeCompoent }
  // { path: 'admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
