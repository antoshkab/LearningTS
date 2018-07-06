import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:64604/api/contacts';

  constructor(private httpClient: HttpClient, private loggerService: LoggerService) { }

  getContacts(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiUrl).pipe(tap(_ => this.loggerService.log('persons is loaded')));
  }

  getContact(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.apiUrl}/${id}`).pipe(tap(_ => this.loggerService.log('person is loaded')));
  }

  updateContact(person: Person): void {
    this.httpClient.put(`${this.apiUrl}}/${person.id}`, person).pipe(tap(_ => this.loggerService.log('person is updated')));
  }

  insertContact(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(`${this.apiUrl}}`, person).pipe(tap(_ => this.loggerService.log('person is inserted')));
  }

  deleteContact(id: number): Observable<Person> {
    return this.httpClient.delete<Person>(`${this.apiUrl}}/${id}`).pipe(tap(_ => this.loggerService.log('person is deleted')));
  }
}
