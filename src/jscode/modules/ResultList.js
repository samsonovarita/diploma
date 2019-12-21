import NewsCard from './NewsCard.js';

export class ResultList {
  constructor(box) {
    this.box = box;
    this.moreButton = document.querySelector(".results__button");
    
    this.moreButton.addEventListener('click', this.renderMoreCards.bind(this));
  }

  setData(cardsData) {
    this.cards = cardsData;
    this.clearList();

    this.row = 0;
    this.render(cardsData);
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

  renderMoreCards() {
    this.row += 1;
    this.render();
    
    if ((this.row * 3 + 3) >= this.cards.length) {
      this.moreButton.classList.add('results__button_hidden');
    } else {
      this.moreButton.classList.remove('results__button_hidden');
    }
  }

  clearList() {
    const cards = document.querySelectorAll('.result-card');
    cards.forEach((card) => {
      this.box.removeChild(card);
    })
  }
}