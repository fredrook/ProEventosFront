import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiURL;
  empresas: any;

  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}api/Account/Login`, data);
  }
}
