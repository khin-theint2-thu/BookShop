import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

 REST_API_SERVER = "http://43.228.125.24:4142/Modules/EMR/WebServices/WebService_POS_API.asmx/";
  constructor(private httpClient: HttpClient  ) { 
    
  }



  getAllItem(param  : any) {
    return this.postRequest('GetAllItemAPIJSON' , param )
  }

   postRequest(url: string, data : any) {
    return this.httpClient.post(this.REST_API_SERVER + url, data)
  }



  


}
