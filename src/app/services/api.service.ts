import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl: any = '/api/';
  httOptions: any;
  constructor(
    public http: HttpClient
  ) { }

  get(url): any {
    this.getoken();
    return this.http.get(`${this.serverUrl}${url}`, this.httOptions);
  }

  post(url, data): any {
    this.getoken();
    return this.http.post(`${this.serverUrl}${url}`, data, this.httOptions);
  }

  put(url, data): any {
    this.getoken();
    return this.http.put(`${this.serverUrl}${url}`, data, this.httOptions);
  }

  delete(url): any {
    this.getoken();
    return this.http.delete(`${this.serverUrl}${url}`, this.httOptions);
  }

  getoken(): void {
    const tokenKey = localStorage.getItem('appToken');

    if (tokenKey !== null) {
      const data = JSON.parse(tokenKey);
      this.httOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          Authorization: 'Bearer ' + data.token
        })
      };
    }
  }

  register(email, password): any {
    return this.http.post(`${this.serverUrl}/auth/register`, {
      email,
      password
    });
  }

  login(email, password): any {
    return this.http.post(`${this.serverUrl}/auth/login`, {
      email,
      password
    });
  }

  upload(file): any {
    return this.http.post(`${this.serverUrl}/upload/book`, file);
  }
}
