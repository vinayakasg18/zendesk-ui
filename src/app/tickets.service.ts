import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/api/v1/tickets/list";
  }

  public getTickets(){
    return this.http.get(this.url);
  }
}
