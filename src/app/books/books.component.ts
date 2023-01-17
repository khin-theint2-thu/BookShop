import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './types/Book';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})


export class BooksComponent implements OnInit{

  books :Book[]=[];
 

isDisabled:boolean =false;
isShowing:boolean = true;
constructor(private bookService:BooksService){
  this.books = bookService.getBooks();
}

ngOnInit(): void {
  
}

handleClick(){
this.isDisabled = true;
}

inputName:string ="";
toogleBooks(){
  this.isShowing = ! this.isShowing;
}

addToCart(event:any){
  console.log(event);
}
}
