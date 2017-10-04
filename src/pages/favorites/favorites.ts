import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular'

import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public quotes:Quote[];

  constructor (private quotesService:QuotesService,
               private modalController:ModalController) {}

  ionViewWillEnter () {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote (quote:Quote) {
      const modal = this.modalController.create(QuotePage, quote);
      modal.present();
  }
}
