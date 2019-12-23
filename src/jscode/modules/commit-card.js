import {createNode} from "./news-card.js";
import {makeFormattedDate} from "./change-date.js";

export class CommitCard {
    constructor(commit_data_item) {
        this.date = commit_data_item.commit.committer.date;
        this.avatar_url = commit_data_item.author.avatar_url;
        this.name = commit_data_item.commit.author.name;
        this.email = commit_data_item.commit.author.email;
        this.message = commit_data_item.commit.message;

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

        commitImg.src = this.avatar_url;
        commitImg.style.backgroundImage = `url(${this.avatar_url})`;
        commitDate.textContent = makeFormattedDate(this.date);
        commitName.textContent = this.name;
        commitEmail.textContent  = this.email;
        commitCommit.textContent = this.message;

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