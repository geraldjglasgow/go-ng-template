import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`);
  }
}
