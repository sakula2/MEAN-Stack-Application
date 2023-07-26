import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from './menu';
@Injectable({
  providedIn: 'root'

})
export class MenuService {
 
  constructor(private http: HttpClient) { }
  private apiBaseUrl = 'http://localhost:3000/api';
  public getmenuById(menuId: string): Promise<Product[]> {         
    const url: string = `${this.apiBaseUrl}/menu`;     
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Product[])                             
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {                 
    console.error('Something has gone wrong', error);             
    return Promise.reject(error.message || error);                
  }   
}
