import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStatusService {
  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  constructor(private authService: AuthService) {}

  setIsLogginStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }

  hydrateIsLogginStatus() {
    const token = this.authService.getToken();
    if (token) {
      this.isLoggedInSubject.next(true);
    }
  }
}
