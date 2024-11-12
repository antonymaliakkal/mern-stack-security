import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  private apiUrl = 'http://localhost:3000/api/auth'

  getProductList():Observable<any> {
    
    return this.http.get(`${this.apiUrl}/get-product-name` ,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });

  }


  getProductDesc(id:any):Observable<any> {

    return this.http.post(`${this.apiUrl}/get-product-desc/${id}`,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });

  }


}
