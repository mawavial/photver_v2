import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class CameraPage {

  private image: string;
  items: object[] = [];

  constructor(public navCtrl: NavController,
              private camera: Camera,
              public alertCtrl: AlertController,
              private domSanitizer: DomSanitizer,
              private platform: Platform) {

              }//endof constructor

              onTakePicture(sourceType:number) {
                console.log('Width: ' + this.platform.width());
                const options: CameraOptions = {
                  quality: 50,
                  sourceType:sourceType,
                  destinationType: this.camera.DestinationType.DATA_URL,
                  saveToPhotoAlbum: true,
                  mediaType: this.camera.MediaType.PICTURE
                }

                this.camera.getPicture(options).then((imageData) => {
                  this.image = 'data:image/jpeg;base64,' + imageData;
                  this.items.push(this.domSanitizer.bypassSecurityTrustUrl(this.image));
                  // console.log(this.items.length);
                  // console.log(typeof(this.items));
                  }, (err) => {
                    this.displayErrorAlert(err);
                  });
              }//endof on take picture

              displayErrorAlert(err){
                console.log(err);
                let alert = this.alertCtrl.create({
                   title: 'Error',
                   subTitle: 'Error while trying to capture picture',
                   buttons: ['OK']
                 });
                 alert.present();
              }//endof display error alert
              //
              // showList(){
              //   console.log(this.items.length);
              //   for(let i = 1; i < this.items.length; i++){
              //     console.log('Consoling the list: ');
              //     console.log(this.items[i]);
              //   }
              // }

}//endof class
