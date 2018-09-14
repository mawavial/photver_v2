import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  apiUrl = 'http://jsonplaceholder.typicode.com/photos';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }//endof constructor

//   getUsers() {
//   return new Promise(resolve => {
//     this.http.get(this.apiUrl+'/users').subscribe(data => {
//       resolve(data);
//     }, err => {
//       console.log(err);
//     });
//   });
// }//endof getUsers

  getData() {
    return this.http.get('http://jsonplaceholder.typicode.com/photos');
  }

}
