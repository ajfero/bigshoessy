import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// Service
import { TokenService } from '../../services/token/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request);
    return next.handle(request);
  }
  // Method add token.
  private addToken(request: HttpRequest<unknown>) {
    const token = this.tokenService.getToken();
    if (!token) return request;
    const headers = request.clone({
      headers: request.headers.set('Authorization', `Baerer ${token}`)
    });
    return headers;
  }
}