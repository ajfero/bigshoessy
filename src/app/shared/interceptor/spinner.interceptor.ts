import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    //Metodo intercept (Crea la request, next = Devuelve un observable de Http any)
    //Hacemos la implmentacion dentro.
    //Antes injectamos nustro Service.
    constructor(private spinerService: SpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinerService.show();
        return next.handle(req).pipe(
            finalize(() => this.spinerService.hide()));

    }
}