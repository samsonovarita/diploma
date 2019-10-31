import {createNode} from "./NewsCard.js";
import {makeFormattedDate} from "./changeDate.js";

export default class CommitCard {
    constructor(date, avatar_url, name, email, message) {
        this.date = date;
        this.avatar_url = avatar_url;
        this.name = name;
        this.title = title;
        this.email = email;
        this.message = message;
        this.cardElement = this.create();
    }

    create() {
        const commitCard = createNore('div', 'swiper__slide');
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