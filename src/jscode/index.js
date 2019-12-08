import "../css/index.css";
import { Api } from "./modules/Api.js";
import { apiNews, today, previousWeek } from "./modules/constants.js";
import { ResultList } from "./modules/ResultList.js";
import { makeFormattedDate } from "./modules/changeDate.js";

const submitButton = document.querySelector('.search__button');
const searchField = document.querySelector(".search__input");

function activateFormButton(btnElement, state) {
  if (state) {
    console.log('Активирую кнопку');
    btnElement.removeAttribute('disabled');
    btnElement.classList.add('search__button_active');
  }
  else {
    console.log('Деактивирую кнопку');
    btnElement.setAttribute('disabled', true);
    btnElement.classList.remove('search__button_active');
  }
};

function validateInput() {
  event.preventDefault();
  if (searchField.value.length > 0) {
    document.querySelector(".search__error-message").classList.add("search__error-message_hidden");
    activateFormButton(submitButton, true);
    document.querySelector("#searchButton").addEventListener('click', search);
  }
  else {
    document.querySelector(".search__error-message").classList.remove("search__error-message_hidden");
    activateFormButton(submitButton, false);
  }
}

function search(event) {
  submitButton.setAttribute('disabled', true);
  const searchInput = document.querySelector(".search__input").value;
  let res = new Api(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiNews}&pageSize=100&from=${today}&to=${previousWeek}&language=ru`);
  document.querySelector(".preloader").classList.remove("preloader_hidden");
  document.querySelector(".error").classList.add("error_hidden");
  document.querySelector(".results").classList.add("results_hidden");
  res.remove;
  res.getApiData()
    .then(res => {
      document.querySelector(".preloader").classList.add("preloader_hidden");
      document.querySelector(".results").classList.remove("results_hidden");
      document.querySelectorAll(".result-card").forEach(function (elem) {
        elem.remove();
        console.log('123');
      })
      let newList = new ResultList(document.querySelector(".results__list"), res.articles);
      localStorage.setItem('title', JSON.stringify(searchInput));
      const total = res.totalResults;
      localStorage.setItem('total', JSON.stringify(total));
      document.querySelector("#searchButton").removeEventListener;
      const titles = res.articles.map((item) => {
        return item.title
      });
      const titleCount = titles.filter((item) => { return item.toLowerCase().includes(`${searchInput}`.toLowerCase()) });
      localStorage.setItem('titles', JSON.stringify(titleCount.length));

      // //новая попытка
      // const dates = titles.map((item) => {
      //   const weekDay = new Date(item.publishedAt);
      //   return weekDay.getDay()
      // });

      // const sun = dates.filter((item) => { return item === 0 });
      // const sunCount = `${sun.length}`;
      // // console.log(monCount);
      // localStorage.setItem('sun', JSON.stringify(sunCount));
      // const mon = dates.filter((item) => { return item === 1 });
      // const monCount = `${mon.length}`;
      // localStorage.setItem('mon', JSON.stringify(monCount));
      // const tue = dates.filter((item) => { return item === 2 });
      // const tueCount = `${tue.length}`;
      // localStorage.setItem('tue', JSON.stringify(tueCount));
      // const wed = dates.filter((item) => { return item === 3 });
      // const wedCount = `${wed.length}`;
      // localStorage.setItem('wed', JSON.stringify(wedCount));
      // const thu = dates.filter((item) => { return item === 4 });
      // const thuCount = `${thu.length}`;
      // localStorage.setItem('thu', JSON.stringify(thuCount));
      // const fri = dates.filter((item) => { return item === 5 });
      // const friCount = `${fri.length}`;
      // localStorage.setItem('fri', JSON.stringify(friCount));
      // const sat = dates.filter((item) => { return item === 6 });
      // const satCount = `${sat.length}`;
      // localStorage.setItem('sat', JSON.stringify(satCount));
      // //Новая попытка

    })
    .catch(res => {
      document.querySelector(".preloader").classList.add("preloader_hidden");
      document.querySelector(".error").classList.remove("error_hidden");
    })
}

// function test(data, query) {
//   let stats = {};
//   // let totalResults
//   // let data = 
//   // const query = document.querySelector(".search__input");
//   // console.log(data);
//   data.forEach(function (element) {
//     let date = makeFormattedDate(element.publishedAt);
//     if (stats[date] == undefined) {
//       stats[date] = 0;
//     }
//     // console.log(query);
//     stats[date] += element.description.split(query).length - 1;
//   });
//   localStorage["stats"] = JSON.stringify(stats);
//   // localStorage["query"] = JSON.stringify(query);
//   localStorage.setItem('title', JSON.stringify(query));

//   console.log(res.articles);

//   const titles = res.articles.map((item) => {
//     return item.title
//   });
//   const titleCount = titles.filter((item) => { return item.toLowerCase().includes(`${query}`.toLowerCase()) });
//   localStorage.setItem('titles', JSON.stringify(titleCount.length));

//   localStorage["data.length"] = data.length;
//   // console.log(stats);
// }
// JSON.parse(localStorage["stats"]) вызвать на странице analysis.js

searchField.addEventListener('input', validateInput);