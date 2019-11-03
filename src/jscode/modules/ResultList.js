import NewsCard from './NewsCard.js';

export class ResultList {
  constructor(box, cards) {
    this.box = box;
    this.cards = cards;

    this.row = 0;
    this.render(cards);
    this.moreCards();
  }

  addCard(card) {
    const { cardElement } = new NewsCard(card.url, card.urlToImage, card.publishedAt, card.title, card.description, card.source);
    this.box.appendChild(cardElement);
  }

  render() {
    this.cards.slice(this.row * 3, this.row * 3 + 3).forEach((elem) => {
      this.addCard(elem)
    })
  }

  moreCards() {
    const button = document.querySelector(".results__button");
    button.addEventListener('click', () => {
      this.row += 1;
      this.render();
      if ((this.row * 3 + 3) >= this.cards.length) {
        button.classList.add('results__button_hidden');
      }
    });
    if ((this.row * 3 + 3) >= this.cards.length) {
      button.classList.add('results__button_hidden');
    }
  }
}