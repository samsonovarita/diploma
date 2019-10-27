import "./../style.css";
import { Api } from "./modules/Api.js";
import { apiNews, today, previousWeek } from "./modules/constants.js";
// import { NewsCard } from "./modules/NewsCard.js";
import { ResultList } from "./modules/ResultList.js";

// const searchButton = document.querySelector(".search__button");
// const newsCard = new NewsCard();

const search = function () {
  const searchInput = document.querySelector(".search__input").value;
  let res = new Api(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiNews}&pageSize=100&from=${today}&to=${previousWeek}&language=ru`);
  res.getApiData()
  // console.log(res);
    .then(res => {
    if (res && res.length > 0) {
      const List = new ResultList(document.querySelector('.results__list'), res);
      List.render(res);
    }
  })  
}

document.querySelector("#searchButton").addEventListener('click', search);