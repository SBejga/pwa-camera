import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ready = false;
  imgSrc: string;

  constructor(public plt: Platform) {
    plt.ready().then(() => {
      this.ready = true;
    });
  }

  takePicture() {
    Camera.getPicture({
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then(
      imageData => { 
        console.log("took picture");
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.imgSrc = base64Image;
      },
      err => alert("Error taking picture " +err)
    );
  }

}
