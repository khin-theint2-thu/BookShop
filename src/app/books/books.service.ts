import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BooksService {

  constructor() { }

  getBooks(){
    return  [
      {
        name:"Book 1",
        author:"Hiruti ",
        price:55000,
        image:"https://cdn.shopify.com/s/files/1/2725/7282/products/LibraryofFuture_coversmall_464x.png?v=1645109494"
      },
      {
        name:"Book 2",
        author:"Hiruti ",
        price:78000,
        image:"https://cdn.shopify.com/s/files/1/2725/7282/products/LibraryofFuture_coversmall_464x.png?v=1645109494"
      },
      {
        name:"Book 3",
        author:"Hiruti ",
        price:78000,
        image:"https://cdn.shopify.com/s/files/1/2725/7282/products/LibraryofFuture_coversmall_464x.png?v=1645109494"
      },
      {
        name:"Book 4",
        author:"Hiruti ",
        price:78000,
        image:"https://cdn.shopify.com/s/files/1/2725/7282/products/LibraryofFuture_coversmall_464x.png?v=1645109494"
      },
      {
        name:"Book 5",
        author:"Hiruti ",
        price:78000,
        image:"https://cdn.shopify.com/s/files/1/2725/7282/products/LibraryofFuture_coversmall_464x.png?v=1645109494"
      },
      {
        name:"Book 6",
        author:"Hiruti ",
        price:78000,
        image:"https://cdn.shopify.com/s/files/1/2725/7282/products/LibraryofFuture_coversmall_464x.png?v=1645109494"
      },
    ];
  }
}
