import { Component, OnInit } from '@angular/core';
import { AuthStatusService } from './auth/auth-status.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoginOrRegisterPage: boolean = false;

  constructor(
    private router: Router,
    private authStatusService: AuthStatusService
  ) {}

  ngOnInit(): void {
    this.authStatusService.hydrateIsLogginStatus();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginOrRegisterPage = ['/login', '/register'].includes(
          event.url
        );
      }
    });
  }
}
