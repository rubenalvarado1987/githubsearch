import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { User } from 'app/models/user.model';

@Injectable()
export class SettingsService {
  public sidebarImageIndex = 0;
  public sidebarImageIndexUpdate: EventEmitter<number> = new EventEmitter();
  public sidebarFilter = '#fff';
  public sidebarFilterUpdate: EventEmitter<string> = new EventEmitter();
  public sidebarColor = '#D80B0B';
  public sidebarColorUpdate: EventEmitter<string> = new EventEmitter();
  public users: User[];
  public favorities: any;
  
  avatar_url: string = '';
  bio: string= '';
  email: string= '';
  following: number= 0;
  name: string= '';
 
  constructor(private http: HttpClient) { }

  getSidebarImageIndex(): number {
    return this.sidebarImageIndex;
  }
  setSidebarImageIndex(id) {
    this.sidebarImageIndex = id;
    this.sidebarImageIndexUpdate.emit(this.sidebarImageIndex);
  }
  getSidebarFilter(): string {
    return this.sidebarFilter;
  }
  setSidebarFilter(color: string) {
    this.sidebarFilter = color;
    this.sidebarFilterUpdate.emit(this.sidebarFilter);
  }
  getSidebarColor(): string {
    return this.sidebarColor;
  }
  setSidebarColor(color: string) {
    this.sidebarColor = color;
    this.sidebarColorUpdate.emit(this.sidebarColor);
  }
  getUserByName(name: string): Observable<any>{
    return this.http.get<any>(environment.url_api + environment.endpoint_search + name)
  }
  getRepos(name: string): Observable<any>{
    return this.http.get<any>(environment.url_api+ environment.endpoint_search + name + environment.endpoint_repos)
  }
 
}
