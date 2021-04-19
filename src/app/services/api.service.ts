import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceUrl: any = 'http://api.sunhouse.co.id/bookstore/index.php/';
  constructor(
    public http: HttpClient
  ) { }

  get(url): any {
    return this.http.get(`${this.serviceUrl}${url}`);
  }

  post(url, data): any {
    return this.http.post(`${this.serviceUrl}${url}`, data);
  }

  put(url, data): any {
    return this.http.put(`${this.serviceUrl}${url}`, data);
  }

  delete(url): any {
    return this.http.delete(`${this.serviceUrl}${url}`);
  }
}
