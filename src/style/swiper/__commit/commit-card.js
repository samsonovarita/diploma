import {createNode} from "../../result-card/news-card.js";
import {makeFormattedDate} from "../../../jscode/modules/change-date.js";

export class CommitCard {
    constructor(commit_data_item) {
        this._date = commit_data_item.commit.committer.date;
        this._avatar_url = commit_data_item.author.avatar_url;
        this._name = commit_data_item.commit.author.name;
        this._email = commit_data_item.commit.author.email;
        this._message = commit_data_item.commit.message;

        this.cardElement = this.create();
    }

    create() {
        const commitCard = createNode('div', 'swiper__slide');
        const commitDate = createNode('div', 'swiper__date');
        const commitInfobox = createNode('div', 'swiper__infobox');
        const commitImg = createNode('div', 'swiper__img');
        const commitContact = createNode('div', 'swiper__contact');
        const commitName = createNode('div', 'swiper__name');
        const commitEmail = createNode('div', 'swiper__email');
        const commitCommit = createNode('div', 'swiper__commit')

        commitImg.src = this._avatar_url;
        commitImg.style.backgroundImage = `url(${this._avatar_url})`;
        commitDate.textContent = makeFormattedDate(this._date);
        commitName.textContent = this._name;
        commitEmail.textContent  = this._email;
        commitCommit.textContent = this._message;

        commitCard.appendChild(commitDate);
        commitCard.appendChild(commitInfobox);
        commitCard.appendChild(commitCommit);
        commitInfobox.appendChild(commitImg);
        commitInfobox.appendChild(commitContact);
        commitContact.appendChild(commitName);
        commitContact.appendChild(commitEmail);

        return commitCard;
    }
}