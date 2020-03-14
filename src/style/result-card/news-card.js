import {makeFormattedDate} from "../../jscode/modules/change-date.js";

export function createNode(tag, tagClass) {
    const element = document.createElement(tag);
    element.classList.add(tagClass);
    return element;
}

export default class NewsCard {
    constructor(url, urlToImage, publishedAt, title, description, source) {
        this._url = url;
        this._urlToImage = urlToImage;
        this._publishedAt = publishedAt;
        this._title = title;
        this._description = description;
        this._source = source;
        this.cardElement = this.create();
    }

    create() {
        const newsCard = createNode('div', 'result-card');
        const newsCardImageSize = createNode('div', 'result-card__image-size');
        const newsCardImage = createNode('img', 'result-card__image');
        const newsCardInfo = createNode('div', 'result-card__info');
        const newsCardDate = createNode('div', 'result-card__date');
        const newsCardBox = createNode('div', 'result-card__box');
        const newsCardTitle = createNode('a', 'result-card__title');
        const newsCardText = createNode('p', 'result-card__text');
        const newsCardSource = createNode('p', 'result-card__source');

        newsCardImage.src = this._urlToImage;
        newsCardDate.textContent = makeFormattedDate(this.publishedAt);
        newsCardTitle.setAttribute('href', this._url);
        newsCardTitle.textContent = this._title;
        newsCardText.textContent  = this._description;
        newsCardSource.textContent = this._source.name;


        newsCard.appendChild(newsCardImageSize);
        newsCardImageSize.appendChild(newsCardImage);
        newsCard.appendChild(newsCardInfo);

        newsCardInfo.appendChild(newsCardDate);
        newsCardInfo.appendChild(newsCardBox);
        newsCardInfo.appendChild(newsCardSource);

        newsCardBox.appendChild(newsCardTitle);
        newsCardBox.appendChild(newsCardText);

        return newsCard;
    }
}