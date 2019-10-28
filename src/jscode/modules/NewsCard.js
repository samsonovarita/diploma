export function createNode(tag, tagClass) {
    const element = document.createElement(tag);
    element.classList.add(tagClass);
    return element;
}

export default class NewsCard {
    constructor(url, urlToImage, publishedAt, title, description, source) {
        this.url = url;
        
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        // console.log(publishedAt);
        // this.title = title;
        this.description = description;
        // this.source = source.name;
        this.cardElement = this.create();
    }

    create() {
        const newsCard = createNode('a', 'result-card');
        const newsCardImage = createNode('img', 'result-card__image');
        const newsCardInfo = createNode('div', 'result-card__info');
        const newsCardDate = createNode('div', 'result-card__date');
        const newsCardBox = createNode('div', 'result-card__box');
        // const newsCardTitle = createNode('div', 'result-card__title');
        const newsCardText = createNode('p', 'result-card__text');
        
        // const newsCardSource = createNode('p', 'result-card__source');

        newsCard.setAttribute('href', this.url);
        newsCardImage.src = this.urlToImage;
        newsCardDate.textContent = this.publishedAt;
        // newsCardTitle = this.title;
        newsCardText.textContent  = this.description;
        // newsCardSource = this.source.name;


        newsCard.appendChild(newsCardImage);
        newsCard.appendChild(newsCardInfo);

        newsCardInfo.appendChild(newsCardDate);
        newsCardInfo.appendChild(newsCardBox);
        // newsCardInfo.appendChild(newsCardSource);

        // newsCardBox.appendChild(newsCardTitle);
        newsCardBox.appendChild(newsCardText);

        return newsCard;
    }
}