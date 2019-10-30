import NewsCard from './NewsCard.js';

export class ResultList {
  constructor(box, cards) {
    this.box = box;
    this.cards = cards;
    this.render(cards);
    this.moreCards();
  }

  addCard(card) {
    const { cardElement } = new NewsCard(card.url, card.urlToImage, card.publishedAt, card.title, card.description, card.source);
    this.box.appendChild(cardElement);
  }

  render(cards) {
    // console.dir(this.cards);
    // this.cards.forEach((elem) => {
      cards.slice(0,3).forEach((elem) => {
      // console.log(elem);
      this.addCard(elem)
    })
  }

  cards(array, num) {
    const arr = array.filter((item) => {
      return !num.includes(item)
    });
    const line = arr.slice(0, 3);
    console.log(line);
    return line
  }

  moreCards() {
    const button = document.querySelector('.results__button');
    const added = this.cards.slice(0, 3);
    const cards = this.cards;
    button.addEventListener('click', () => {
      if (added.length !== cards.length) {
        const line = this.cards(cards, added)
        this.render(line);
        line.forEach(element => {
          return added.push(element)
        });
        // console.log(added);
        this.cards(cards, added);
        if (added.length === cards.length) {
          button.classList.add('results__button_hidden')
        }
      }
    });
  }
}