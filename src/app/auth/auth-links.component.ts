import { Component } from '@angular/core'

import { AuthService } from './auth.service';

@Component({
  selector: 'auth-links',
  template: `
   <button> Logout</button>
   <button> dashboard </button>
  `
})

export class AuthLinksComponent {
  constructor(private _authService: AuthService){}

    isLoggedIn(): boolean {
      return this._authService.isLoggedIn();
    }
    
    isLoggedOut(): boolean {
      return !this._authService.isLoggedIn();
    }

    logOut(): void {
      this._authService.logOut();
    }

  }
