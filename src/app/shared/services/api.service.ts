import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { IPet } from '../interfaces/wizard.interface';
import { ISaveContacts } from '../interfaces/wizard.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private domain = 'https://v0dqj.mocklab.io/';

  constructor(private http: HttpClient) { }

  getPetsList(): Observable<IPet[]> {
    return this.http.get<IPet[]>(this.domain + 'pets');
  }

  saveContacts(data: ISaveContacts): Observable<number> {
    return this.http.post<number>(this.domain + 'add/customer', data);
  }
}
