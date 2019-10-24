export class Api {
    constructor(url) {
        this.url = url;
    }
    getResponseJSON(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }

    getApiData() {
        return fetch(this.url)
            .then((res) => this.getResponseJSON(res))
            .then(json => {
                if (json.totalResults === 0) {
                    return Promise.reject(json = "К сожалению по вашему запросу ничего не найдено");
                }
                if (json.message === "Your API key is invalid or incorrect") {
                    return Promise.reject(json = "Ключ API указан некорректно");
                }
                return json;
            })
    }
}



// const api = new Api(UserConfig);

// api.getInitialCards()
//     .then(res => {
//         if (res && res.length > 0) {
//             new CardList(document.querySelector('.places-list'), res);
//         }
//     })

// api.getUserData()
//     .then(user => {
//         if (!(user.name === null && user.about === null)) {
//             document.querySelector('.user-info__name').textContent = user.name;
//             document.querySelector('.user-info__job').textContent = user.about;
//             document.querySelector('.user-info__photo').setAttribute('style', `background-image: url(${user})`);
//         }
//     })
//     .catch();
