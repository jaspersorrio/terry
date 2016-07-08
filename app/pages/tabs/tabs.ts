import {Component} from '@angular/core'
import {MainPage} from '../main/main';
import {CameraPage} from '../camera/camera';
import {Camera, Transfer} from 'ionic-native';
import {Modal, NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2root: any;
  private fileTransfer:any;

  constructor(private nav: NavController) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = MainPage;
    this.tab2root = CameraPage;
    this.fileTransfer = new Transfer();
  }

  scanImage(){

    console.log('console working');

    let options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      quality: 75,
      allowEdit: false,
      saveToPhotoAlbum: false
    }

    Camera.getPicture(options).then((fileUrl)=>{
      console.log(fileUrl);
      this.fileTransfer.upload(fileUrl, 'http://terry.jasperyap.com').then( (results)=>{
        alert(JSON.stringify(results));
      });
    },(err) => {
      if(err === 'cordova_not_available'){
        // switch out to normal
        let modal = Modal.create(CameraPage);
        this.nav.present(modal);
      }
    });
  }
}
