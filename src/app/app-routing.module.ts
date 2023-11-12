import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { PersonCreateComponent } from './persons/person-create/person-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { GuestGard } from './auth/guest.guard';
import { AuthGard } from './auth/auth.guard';
import { SearchComponent } from './persons/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGard],
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [AuthGard],
  },
  {
    path: 'register',
    component: RegisterFormComponent,
    canActivate: [AuthGard],
  },
  {
    path: 'person/create',
    component: PersonCreateComponent,
    canActivate: [GuestGard],
  },
  {
    path: 'person/:id',
    component: PersonDetailComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuestGard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuestGard, AuthGard],
})
export class AppRoutingModule {}
