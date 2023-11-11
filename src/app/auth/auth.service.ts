import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = ' http://4.210.225.238';
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const requestBody = {
      username,
      password,
    };
    return this.http.post(`${this.url}'/login/'`, requestBody);
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  isAuthenticated(): boolean {
    //return bool
    return !!this.getToken();
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }
}
