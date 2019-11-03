import "./../style.css";
import { Api } from "./modules/Api.js";
import { apiNews, today, previousWeek } from "./modules/constants.js";
import { ResultList } from "./modules/ResultList.js";
import { makeFormattedDate } from "./modules/changeDate.js";


const search = function () {
  const searchInput = document.querySelector(".search__input").value;
  let res = new Api(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiNews}&pageSize=100&from=${today}&to=${previousWeek}&language=ru`);

  document.querySelector(".preloader").classList.remove("preloader_hidden");
  res.getApiData()

    .then(res => {
      document.querySelector(".preloader").classList.add("preloader_hidden");
      if (res.articles.length === 0) {
        document.querySelector(".error").classList.remove("error_hidden");
      }

      document.querySelector(".results").classList.remove("results_hidden");
      
      if (res.articles && res.articles.length > 0) {
        test(res.articles, searchInput);
        const List = new ResultList(document.querySelector('.results__list'), res.articles);
      } else {

      }
    })
}

function test(data, query) {
  let stats = {};
  // let totalResults
  // let data = 
  // const query = document.querySelector(".search__input");

  data.forEach(function (element) {
    let date = makeFormattedDate(element.publishedAt);
    if (stats[date] == undefined) {
      stats[date] = 0;
    }
    console.log(query);
    stats[date] += element.description.split(query).length - 1;
  });
  localStorage["stats"] = JSON.stringify(stats);
  localStorage["query"] = query;
  localStorage["data.length"] = data.length;
  // console.log(stats);
}
// JSON.parse(localStorage["stats"]) вызвать на странице analysis.js

// document.querySelectorAll(".result-card").forEach(function(elem) {
//   elem.remove();
// })

document.querySelector("#searchButton").addEventListener('click', search);