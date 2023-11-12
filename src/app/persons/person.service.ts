import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //appel async de données
import { Person, PersonQuerryResult } from '../interfaces/person.interface';
import { shareReplay, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  url = ' http://4.210.225.238/api';
  dev_url = 'http://localhost:8000';

  private personsCache$?: Observable<PersonQuerryResult>;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getPersons(): Observable<PersonQuerryResult> {
    if (!this.personsCache$) {
      this.personsCache$ = this.http
        .get<PersonQuerryResult>(`${this.dev_url}/persons/`)
        .pipe(shareReplay(1));
    }
    return this.personsCache$;
  }

  getPersonDetail(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.dev_url}/persons/${id}/`);
  }

  createPerson(person: Person): Observable<Person> {
    console.log(person);
    const token = this.authService.getToken();
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post<Person>(`${this.dev_url}/persons/`, person, {
      headers: headers_object,
    });
  }
}