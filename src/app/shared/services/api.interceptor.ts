import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import { Router } from '@angular/router';
import { SpinnerService } from './spinner.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private router: Router, private spinnerSrv: SpinnerService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      this.spinnerSrv.startSpinner();

        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                    this.spinnerSrv.stopSpinner();
                    this.router.navigate(["/error"]);
                    return throwError(errorMsg);
                })
            )
    }
}