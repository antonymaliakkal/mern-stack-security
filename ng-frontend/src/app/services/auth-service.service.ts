import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import* as jwt from 'jwt-decode'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/auth'

  registerUser(username: string , email : string , password: string):Observable<any> {

      console.log('register user')
      return this.http.post(`${this.apiUrl}/register` , {username : username , email : email , password : password} ,{
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      });

  }

  loginUser(email: string , password: string):Observable<any> {

    console.log(password)
    return this.http.post(`${this.apiUrl}/login` , { email : email , password : password } , {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });

  }


  isTokenValid(token:string) {
    if(token === '') return false
    try {
      
      const decoded: any = jwt.jwtDecode(token);
      const expiryDate = new Date(0);
      expiryDate.setUTCSeconds(decoded.exp)
      return expiryDate > new Date();
  
    } catch (error) {
      console.error('Error decoding token', error);
      return false;
  
    }
  }




}
