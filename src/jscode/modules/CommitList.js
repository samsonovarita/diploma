import { CommitCard } from "./CommitCard.js";

export class CommitList {
  constructor(box, commits) {
    this.box = box;
    this.commits = commits;
    this.render(commits);
  }

  addCard(commit) {
    const { cardElement } = new CommitCard(commit.date, commit.avatar_url, commit.name, commit.email, commit.message);
    // console.log(cardElement);
    this.box.appendChild(cardElement);
  }

  render(commits) {
    // console.dir(this.commits);
    // this.cards.forEach((elem) => {
    commits.forEach((elem) => {
      // console.log(elem);
      this.addCard(elem)
    })
  }
}