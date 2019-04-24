import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  
  constructor(private http:HttpClient) {
    }
    getproduct()
    {
    let url="assets/productBrands.json";
    return this.http.get(url)
    }
}
