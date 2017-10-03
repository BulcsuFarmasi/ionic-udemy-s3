import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  public quoteCollection: {category: string, quotes:Quote[], icon:string}[];
  public quotesPage = QuotesPage;

  ngOnInit () {
    this.quoteCollection = quotes;
  }
}
