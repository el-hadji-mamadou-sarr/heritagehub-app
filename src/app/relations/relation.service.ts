import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { PersonService } from '../persons/person.service';
import { Observable } from 'rxjs';
import { Relation } from '../interfaces/relation.interface';

@Injectable({
  providedIn: 'root',
})
export class RelationService {
  url = ' http://4.210.225.238/api';
  dev_url = 'http://localhost:8000';
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private personService: PersonService
  ) {}

  createRelation(relation: Relation): Observable<Relation> {
    console.log(relation);
    const token = this.authService.getToken();
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post<Relation>(`${this.dev_url}/relations/`, relation, {
      headers: headers_object,
    });
  }
}
