import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})



export class CartComponent {
  book :any;
  constructor(private cartsService:CartService){}
getCart(){
  return this.cartsService.get();
}
}
