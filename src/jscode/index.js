import "../css/index.css";
import { Api } from "./modules/Api.js";
import { apiNews, today, previousWeek } from "./modules/constants.js";
import { ResultList } from "./modules/ResultList.js";
import { makeFormattedDate } from "./modules/changeDate.js";

const submitButton = document.querySelector('.search__button');
const searchField = document.querySelector(".search__input");

function checkLocalStorage () {
  if (JSON.parse(results) !== null) {
      searchField.setAttribute('placeholder',JSON.parse(searchInput));
      new ResultList(document.querySelector(".results__list"), results);
  }
}

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
  res.getApiData()
    .then(res => {
      document.querySelector(".preloader").classList.add("preloader_hidden");
      document.querySelector(".results").classList.remove("results_hidden");
      document.querySelectorAll(".result-card").forEach(function (elem) {
        elem.remove();
        console.log('123');
      })
      new ResultList(document.querySelector(".results__list"), res.articles);
      let results = res;
      localStorage.setItem('results', JSON.stringify(results));
      localStorage.setItem('title', JSON.stringify(searchInput));
      document.querySelector("#searchButton").removeEventListener;
    })
    .catch(res => {
      document.querySelector(".preloader").classList.add("preloader_hidden");
      document.querySelector(".error").classList.remove("error_hidden");
    })
}

searchField.addEventListener('input', validateInput);
checkLocalStorage();