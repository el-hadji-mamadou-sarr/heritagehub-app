import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //appel async de données
import { Person, PersonQuerryResult } from '../interfaces/person.interface';
import { shareReplay, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../interfaces/event.interface';
import { PersonService } from '../persons/person.service';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  dev_url = 'http://localhost:8000';
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private personService: PersonService
  ) {}

  createEvent(event: Event): Observable<Event> {
    console.log(event);
    const token = this.authService.getToken();
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post<Event>(`${this.dev_url}/events/`, event, {
      headers: headers_object,
    });
  } 
  deleteEvent(id:number): Observable<Event> {
    const token = this.authService.getToken();
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.delete<Event>(`${this.dev_url}/events/${id}/`, {
      headers: headers_object,
    });
  } 

  
}
