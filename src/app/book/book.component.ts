import { Component,EventEmitter, Input,Output } from '@angular/core';
import { Book } from '../books/types/Book';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
@Input() book: Book = {} as Book;
@Output() emitBook = new EventEmitter<Book>();
ngOnInit(): void {
}
constructor(private cartService:CartService){

}
isInCart : boolean = false;
addToCart(){
  this.isInCart = true;
this.emitBook.emit(this.book);
this.cartService.add(this.book);
}

removeFromCart(){
  this.isInCart = false;
this.cartService.remove(this.book);
}
}
