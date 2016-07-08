declare var navigator:any;

import {Component} from '@angular/core';
import {WebcamVideoPlayer} from './video/video';
import {Modal, NavController, ViewController} from 'ionic-angular';

@Component({
  template:`
  <ion-content padding class="camera">
    <terry-video [stream]="webCamUrl">Loading</terry-video>
  </ion-content>
  `,
  directives:[WebcamVideoPlayer]
})
export class CameraPage {

  webCamStream:any;
  webCamUrl:string;

  constructor(private viewCtrl: ViewController  ) {
    console.log('im alive');

    navigator.getUserMedia =  navigator.getUserMedia ||
                              navigator['webkitGetUserMedia'] ||
                              navigator['mozGetUserMedia'] ||
                              navigator['msGetUserMedia'];

    navigator.getUserMedia({video:true},(stream) => {
      console.log(stream);

      this.webCamStream = stream;
      this.webCamUrl = window.URL.createObjectURL(stream);

      console.log(this.webCamUrl);
      // let video = document.getElementsByTagName('video');
      // video[0].src = window.URL.createObjectURL(stream);
      // localMediaStream = stream;
    }, (err) => {
      console.log(err);
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
