import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BooksService } from "./books/books.service";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component'
@NgModule({
    declarations:[AppComponent, CartComponent, CategoryComponent, ItemComponent],
    imports:[BrowserModule,BooksModule,AppRoutingModule,AuthModule,HttpClientModule],
    providers:[BooksService],
    bootstrap:[AppComponent]
})
export class AppModule{}