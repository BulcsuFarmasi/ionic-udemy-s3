import { Component, OnInit } from '@angular/core';

import { AlertController, NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
    public quoteGroup:{category: string, quotes:Quote[], icon:string};

    constructor (
        private navParams:NavParams,
        private alertController:AlertController) {}

    ngOnInit () {
        this.quoteGroup = this.navParams.data;
    }

    //ionViewDidLoad () {
    //  this.quoteGroup = this.navParams.data;
    //  Add elvis operator (?) in template to use this approch
    //}

    onAddToFavorite (selectedQuote:Quote) {
        const alert = this.alertController.create({
            title: 'Add Quote',
            subTitle: 'Are you sure?',
            message: 'Are you to add the quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: () => {
                        console.log('Ok')
                    }
                },
                {
                    text: 'No, I changed my mind',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelled!')
                    }
                }
            ]
        })
        alert.present();
    }
}
