import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 items:any[];
  constructor(public navCtrl: NavController) {
      this.items =[];
      for(let i=0 ; i<10 ; i++){
        this.items.push(
          {
            text: 'Item '+i ,
            id :i
          }

        );
      }
  }

// list item click method .
itemSelected(item){
  this.navCtrl.push(DetailPage , {
    item: item 
  })
}
}
