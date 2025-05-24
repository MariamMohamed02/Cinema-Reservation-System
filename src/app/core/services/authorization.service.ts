
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { authorization } from '../interfaces/authorization';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private readonly httpClient = inject(HttpClient);
  private readonly router = inject(Router);

  userToken: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.setUserToken();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  setUserToken(): void {
    if (this.isBrowser()) {
      const token = localStorage.getItem('token');
      if (token !== null) {
        this.userToken.next(token);
      }
    }
  }

  processLoginToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
      this.userToken.next(token); // Notify subscribers like navbar
    }
  }

  handleRegister(userInfo: authorization): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'signUp', userInfo);
  }

  handleLogin(userInfo: authorization): Observable<any> {
    return this.httpClient.post("http://127.0.0.1:8000/api/login/", userInfo);
  }

  logOut(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }
    this.userToken.next(null); // Notify logout
    this.router.navigate(['/movies']);
  }
}
