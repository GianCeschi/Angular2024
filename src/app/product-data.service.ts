import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://62beefd2be8ba3a10d5fa0a4.mockapi.io/api/v1/tiendaNike';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  //Consume api de productos y devuelve un observable a la respuesta
  public getAll(): Observable<Product[]>{
    //fetch('url', {method: 'GET'})

    return this.http.get<Product[]>(URL)
          .pipe(
            tap((products:Product[]) => products.forEach(product => product.cantidad = 0))   //Tap sirve para transformar
          );                                                                                //Inicializamos con 0 las cant
  }
}
