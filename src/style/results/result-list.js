import NewsCard from '../../style/result-card/news-card.js';
import { pictureInRow } from '../../jscode/modules/constants.js';

export class ResultList {
  constructor(box) {
    this._box = box;
    this._moreButton = document.querySelector(".results__button");
    
    this._moreButton.addEventListener('click', this.renderMoreCards.bind(this));
  }

  setData(cardsData) {
    this.cards = cardsData;
    this.clearList();

    this.row = 0;
    this.render(cardsData);
  }

  addCard(card) {
    const { cardElement } = new NewsCard(card.url, card.urlToImage, card.publishedAt, card.title, card.description, card.source);
    this._box.appendChild(cardElement);
  }

  render() {
    this.cards.slice(this.row * pictureInRow, this.row * pictureInRow + pictureInRow).forEach((elem) => {
      this.addCard(elem)
    })
    if ((this.row * pictureInRow + pictureInRow) >= this.cards.length) {
      this._moreButton.classList.add('results__button_hidden');
    } else {
      this._moreButton.classList.remove('results__button_hidden');
    }
  }

  renderMoreCards() {
    this.row += 1;
    this.render();
    if ((this.row * pictureInRow + pictureInRow) >= this.cards.length) {
      this._moreButton.classList.add('results__button_hidden');
    } else {
      this._moreButton.classList.remove('results__button_hidden');
    }
  }

  clearList() {
    const cards = document.querySelectorAll('.result-card');
    cards.forEach((card) => {
      this._box.removeChild(card);
    })
  }
}