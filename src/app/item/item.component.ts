import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  itemData:any =[];
  constructor(
    private itemService : ItemService,
  ) { }
  ngOnInit() {
    this.getAllCateogry()
  }


  getAllCateogry(){
    let param = {
      RequestID : '2',
      page:'0'
    }

    this.itemService.getAllItem(param).toPromise().then((response : any) => {
      this.itemData =  JSON.parse(response.d)
    })
  }
}
