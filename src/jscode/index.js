import "./../style.css";
import { Api } from "./modules/Api.js";
import { apiNews, today, previousWeek } from "./modules/constants.js";
import { ResultList } from "./modules/ResultList.js";

const search = function () {
  const searchInput = document.querySelector(".search__input").value;
  let res = new Api(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiNews}&pageSize=100&from=${today}&to=${previousWeek}&language=ru`);
  res.getApiData()
  
    .then(res => {
      console.log(res);
    if (res.articles && res.articles.length > 0) {
      const List = new ResultList(document.querySelector('.results__list'), res.articles);
      List.render(res.articles);
    }
  })  
}

document.querySelector("#searchButton").addEventListener('click', search);