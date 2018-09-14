import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export class Photos {

  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}//endof Photos class


@Injectable()
export class ApiProvider {

  apiUrl: string = 'http://jsonplaceholder.typicode.com/photos';

  constructor(public http: HttpClient) {
    console.log('[OK] Api provider is rolling');
  }//endof constructor

  getData() {
    return this.http.get(this.apiUrl+'?albumId='+1);
}//endof getDatas

  // public getData() {
  //   return this.http.get(this.apiUrl)
  //   .map(res => res.json())
  //   .catch(error => console.log(error));
  // }


    public getAlbumById(albumId: number): Observable<Photos[]> {
    return this.http.get(this.apiUrl + '?albumId=' + albumId)
        .map( res => {return new Photos(res);})
        .catch(error => console.log(error));
  }



}//endof api provider class
