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
                    return Promise.reject(json = "По вашему запросу ничего не найдено");
                }
                if (json.message === "Your API key is invalid or incorrect") {
                    return Promise.reject(json = "Ключ API указан некорректно");
                }
                return json;
            })
    }
}
