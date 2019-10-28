import NewsCard from './NewsCard.js';

export class ResultList {
    constructor (box, cards) { 
      this.box = box;
      this.cards = cards; 
      this.render();
    }
  
    addCard(card) { 
      const { cardElement } = new NewsCard(card.url, card.urlToImage, card.publishedAt, card.title, card.description, card.source);
      this.box.appendChild(cardElement);
    }
  
    render() {
      // console.dir(this.cards);
      this.cards.forEach((elem) => {
        console.log(elem);
        this.addCard(elem)})
    }
  }