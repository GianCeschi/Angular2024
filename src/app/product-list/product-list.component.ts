import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products : Product [] = [];

 constructor(
  private cart : ProductCartService,
  private productsDataService: ProductDataService ){
  
 }

 //Buen punto para consumir la api, cuando angular levanto componente y lo metio en la pantalla
 ngOnInit(): void{
  this.productsDataService.getAll() //Esto devuelce un observable
  .subscribe(products => this.products = products);  //Siempre que te suscribis hay que desuscribirse, el pipe lo hace por si solo
 }

 addToCart(product : Product): void{
  this.cart.addToCart(product);
  product.stock -= product.cantidad;
  product.cantidad = 0; //Se reinicia a 0 para siguiente compra
 }

 alcanzoMaximo(m : string){
  alert(m);
 }
}
