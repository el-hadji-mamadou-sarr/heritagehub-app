import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { TopbarComponent } from './common/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PersonCreateComponent } from './persons/person-create/person-create.component';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { EventsViewComponent } from './events/events-view/events-view.component';
import { RelationsViewComponent } from './relations/relations-view/relations-view.component';
import { EventViewComponent } from './events/event-view/event-view.component';
import { EventNewComponent } from './events/event-new/event-new.component';
import { RelationViewComponent } from './relations/relation-view/relation-view.component';
import { RelationNewComponent } from './relations/relation-new/relation-new.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TopbarComponent,
    HomeComponent,
    PersonCreateComponent,
    DashboardComponent,
    PersonDetailComponent,
    EventsViewComponent,
    RelationsViewComponent,
    EventViewComponent,
    EventNewComponent,
    RelationViewComponent,
    RelationNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
