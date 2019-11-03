import { CommitCard } from "./CommitCard.js";

export class CommitList {
  constructor(box, commit_data) {
    this.box = box;
   // this.commit_data = commit_data;
    this.render(commit_data);
  }

  addCard(commit_data_item) {
    const { cardElement } = new CommitCard(commit_data_item);
    this.box.appendChild(cardElement);
  }

  render(commit_data) {
    // console.dir(this.commits);
    // this.cards.forEach((elem) => {
    commit_data.forEach((elem) => {
      // console.log(elem);
      this.addCard(elem)
    })
  }
}