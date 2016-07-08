declare var unescape:any;

import {Component, Input} from '@angular/core';
import {Transfer} from 'ionic-native';

@Component({
  selector: 'terry-video',
  template: `
    <video autoplay ></video>
    <button light (click)="captureImage()">Capture</button>
  `
})

export class WebcamVideoPlayer {
  @Input()
  stream: any;

  fileTransfer:any;

  constructor(){
    this.fileTransfer = new Transfer();
    console.log(this.stream);
  }

  ngOnInit(){

    //if undefined, redo
    this.checkUndefined();

  }

  checkUndefined(){
    // if undefined sleep 300ms
    if(this.stream === undefined){

      setTimeout(()=>{
        this.checkUndefined();
      },300)

    } else {
      document.getElementsByTagName('video')[0].src = this.stream;
    }
  }

  captureImage(){
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    ctx.drawImage(document.getElementsByTagName('video')[0], 0, 0);


    this.fileTransfer.upload(canvas.toDataURL('image/jpeg'),'localhost:8191');

    // var blob = this.dataURItoBlob(canvas.toDataURL('image/jpeg'));
    // var fd = new FormData(document.forms[0]);
    // fd.append("canvasImage", blob);
    //
    // console.log(fd);

    // console.log(blob);
  }

  dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

}
