import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from './../../providers/api/api';


// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  // public loading = Loading.create();
  albums: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    // this.navCtrl.present(this.loading);
    this.albums = this.apiProvider.getData();
    console.log('All data: ', this.albums);
    // console.log('Length: ', this.albums.length);
  }//end of constructor

  // constructor(public navCtrl: NavController, public httpClient: HttpClient) {
  //   this.films = this.httpClient.get('https://swapi.co/api/films');
  //   this.films
  //   .subscribe(data => {
  //     console.log('my data: ', data);
  //   })

//   openDetails(film) {
//   this.navCtrl.push('FilmDetailsPage', {film: film});
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}//endof constructor
