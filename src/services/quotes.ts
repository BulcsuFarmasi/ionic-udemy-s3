import { Quote } from '../data/quote.interface'

export class QuotesService {
    private favoriteQuotes:Quote[] = [];

    addQuoteToFavorites (quote:Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites (quote:Quote) {
        const postion = this.favoriteQuotes.findIndex((quoteEl:Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(postion, 1);
    }

    getFavoriteQuotes () {
       return this.favoriteQuotes.slice();
    }
}