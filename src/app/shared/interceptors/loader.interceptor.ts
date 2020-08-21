import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from '../services/loader.service';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = localStorage.getItem('jwt');
        let headers:HttpHeaders;
        if(token){
            headers=new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization':`Bearer ${token}`,
              })
        }else{
            headers=new HttpHeaders({
                'Content-Type':  'application/json'
              })
        }

        const newReq = req.clone({
            headers: headers
          });

        this.loaderService.show();
        return next.handle(newReq).pipe(
            finalize(() => this.loaderService.hide())
        );
    }
}