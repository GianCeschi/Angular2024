import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-list/Product';
import { max } from 'rxjs';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  alcanzoMaximo : EventEmitter<string> = new EventEmitter<string>();

  aumentarCantidad(): void {
    if (this.cantidad < this.max){ 
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.alcanzoMaximo.emit("Se alcanzó el max");
    }
  }

  decrementarCantidad(): void {
    if (this.cantidad > 0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
  }

  cambiarCantidad(nuevoValor: number): void {
    if (nuevoValor > this.max) {
      console.log("ERROR: El valor no puede ser mayor que el stock.");
      this.cantidad = 0; // Reseteamos en 0 si ponemos un valor que supere el stock 
    } else {
      this.cantidad = nuevoValor;
      this.cantidadChange.emit(this.cantidad);
    }
  }
}
