import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


import { MyApp } from './app.component';


import { CameraPage } from '../pages/camera/camera';
import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//things of my own
import { ApiProvider } from '../providers/api/api';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
// import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    HomePage
    // TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    HomePage,
    // TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    Camera,
    // RestProvider
    //{ provide: Camera, useClass: CameraMock} //if running on browser
  ]
})
export class AppModule {}
