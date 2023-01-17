import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryData:any =[];
  constructor(
    private categoryService : CategoryService,
  ) { }
  ngOnInit() {
    this.getAllCateogry()
  }


  getAllCateogry(){
    let param = {
      RequestID : '2'
    }

    this.categoryService.getAllCategory(param).toPromise().then((response : any) => {
      this.categoryData =  JSON.parse(response.d)
    })
  }
}
