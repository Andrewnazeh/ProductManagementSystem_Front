import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private HttpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.HttpClient.get(`${this.apiUrl}/api/products`);
  }
  createProduct(product: any, image: File, token: string): Observable<any> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('imageUrl', image);
    const headers: HttpHeaders = new HttpHeaders({
      authorization: `Bearer ${token}`,
    });

    return this.HttpClient.post(`${this.apiUrl}/api/products`, formData, {
      headers,
    });
  }
}
