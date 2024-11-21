import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:3000/api/auth'

  constructor(private http:HttpClient) { }

  viewCart(id:any):Observable<any> {

    return this.http.get(`${this.apiUrl}/view-cart/${id}` , {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });

  }

}
