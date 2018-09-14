import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from './../../providers/api/api';
import { Photos } from './../../providers/api/api';


// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // private albums: Photos[] = [];
    albums: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    // this.albums = this.apiProvider.getData().subscribe(data => {console.log(data);
    this.albums = this.apiProvider.getData();
  }//end of constructor

   randLike(){
     return Math.floor((Math.random() * 73) + 1);
   }//endof randlike

 // getAlbums(){this.apiProvider.getAlbumById(1).subscribe((albums: Photos[])=>{this.albums = albums;});}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}//endof constructor
