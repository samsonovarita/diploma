import NewsCard from './NewsCard.js';

export class ResultList {
  constructor(box, cards) {
    this.box = box;
    this.cards = cards;
    this.render();
    this.cardLine = cards;
  }

  addCard(card) {
    const { cardElement } = new NewsCard(card.url, card.urlToImage, card.publishedAt, card.title, card.description, card.source);
    this.box.appendChild(cardElement);
  }

  render() {
    // console.dir(this.cards);
    this.cards.forEach((elem) => {
      // console.log(elem);
      this.addCard(elem)
    })
  }

  // array(arr, dif) {
  //   const array = arr.filter((item) => {
  //     return !dif.includes(item)
  //   });
  //   const bar = array.slice(0, 3);
  //   return bar
  // }

  // moreCards() {
  //   const button = document.querySelector('.results__button');
  //   const added = this.cardLine.slice(0, 3);
  //   const array = this.cardLine;
  //   button.addEventListener('click', () => {
  //     if (added.length !== array.length) {
  //       const bar = this.array(array, added)
  //       this.render(bar);
  //       bar.forEach(element => {
  //         return added.push(element)
  //       });
  //       // console.log(added);
  //       this.array(array, added);
  //       if (added.length === array.length) {
  //         button.classList.add('results__button_hide')
  //       }
  //     }
  //   });
  // }
}