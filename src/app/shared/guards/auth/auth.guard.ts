// Angular tools.
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Model and service
<<<<<<< Updated upstream
import { TokenService } from '../../services/token/token.service';

=======

// Services
import { TokenService } from '../../services/token/token.service';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

<<<<<<< Updated upstream
  constructor(private tokenService: TokenService) { }
=======
  constructor(
    private tokenService: TokenService
  ) { }
>>>>>>> Stashed changes

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
<<<<<<< Updated upstream
    const token = this.tokenService.getToken();
    return token ? true : false;
=======
    const token = this.tokenService.getToken()
    return token ? true : false; // nos permitira darle acceso o no a nuestro profile
>>>>>>> Stashed changes
  }

}
