import { CommitCard } from "./CommitCard.js";

export class CommitList {
  constructor(box, commitData) {
    this.box = box;
    this.render(commitData);
  }

  addCard(commitDataItem) {
    const { cardElement } = new CommitCard(commitDataItem);
    this.box.appendChild(cardElement);
  }

  render(commitData) {
    commitData.forEach((elem) => {
      this.addCard(elem)
    })
  }
}