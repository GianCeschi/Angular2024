import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Maneja la logica del carrito
export class ProductCartService {

  private _cartList : Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList); //Podria ser []

  constructor() { } 

  addToCart(product: Product) {
    let item = this._cartList.find((v1) => v1.nombre == product.nombre);
    if(!item){
      this._cartList.push({... product});  //Si pongo dos veces comprar en el mismo no lo agrega dos veces
                                          //Me pone todo lo que tiene el product pero en otro objeto ...
    }                                     // Lo clona(no hay problema de compartir misma informacion )
    else{
      item.cantidad += product.cantidad; 
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); //Equivalente al emitt de eventos
  }

}
