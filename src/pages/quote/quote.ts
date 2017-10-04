import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
    public person:string;
    public text:string;

    constructor(private viewController:ViewController,
                private navParams:NavParams){}

    ionViewDidLoad () {
      this.person = this.navParams.get('person');
      this.text = this.navParams.get('text');
    }

    onClose (remove = false) {
        this.viewController.dismiss(remove);
    }

}
