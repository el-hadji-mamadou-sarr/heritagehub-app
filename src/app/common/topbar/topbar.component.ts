import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { AuthStatusService } from '../../auth/auth-status.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  hide: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private authStatusService: AuthStatusService
  ) {}

  ngOnInit() {
    this.authStatusService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.hide = isLoggedIn;
    });
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }

  navigateToPersonCreate() {
    this.router.navigate(['person/create']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.authStatusService.setIsLogginStatus(false);
  }
  
  navigateToSearch(){
    this.router.navigate(['search']);
  }
}
