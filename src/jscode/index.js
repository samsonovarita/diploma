import "../css/index.css";
import { Api } from "./modules/api.js";
import { apiNews, today, previousWeek } from "./modules/constants.js";
import { ResultList } from "./modules/result-list.js";

const submitButton = document.querySelector('.search__button');
const searchField = document.querySelector(".search__input");
const errorMessage = document.querySelector(".search__error-message");
const preloader = document.querySelector(".preloader");
const error = document.querySelector(".error");
const sectionResults = document.querySelector(".results");
const resultList = new ResultList(document.querySelector(".results__list"));

checkLocalStorage();
submitButton.classList.add('search__button_active');
function checkLocalStorage() {
  const results = localStorage.getItem('results');
  const query = localStorage.getItem('title');

  if (results != undefined && query != undefined) {
    sectionResults.classList.remove("results_hidden");
    resultList.setData(JSON.parse(results).articles);

    searchField.value = query;
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
submitButton.addEventListener('click', search);

function validateInput() {
  event.preventDefault();
  if (searchField.value.length > 0) {
    errorMessage.classList.add("search__error-message_hidden");
    activateFormButton(submitButton, true);
  }
  else {
    errorMessage.classList.remove("search__error-message_hidden");
    activateFormButton(submitButton, false);
  }
}

function search(event) {
  submitButton.setAttribute('disabled', true);
  searchField.setAttribute('disabled', true);
  const searchInput = searchField.value;
  const request = new Api(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiNews}&pageSize=100&from=${today}&to=${previousWeek}&language=ru`);

  preloader.classList.remove("preloader_hidden");
  error.classList.add("error_hidden");
  sectionResults.classList.add("results_hidden");

  request.getApiData()
    .then(results => {

      preloader.classList.add("preloader_hidden");
      //активация кнопки и поля поиска
      submitButton.removeAttribute('disabled');
      submitButton.classList.add('search__button_active');
      searchField.removeAttribute('disabled');
      sectionResults.classList.remove("results_hidden");

      resultList.setData(results.articles);

      localStorage.setItem('results', JSON.stringify(results));
      localStorage.setItem('title', searchInput);

    })
    .catch(res => {
      preloader.classList.add("preloader_hidden");
      if (res.toString() === "TypeError: Failed to fetch") {
        error.classList.remove("error_hidden");
        document.querySelector(".error__text").textContent = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
    } else {
      error.classList.remove("error_hidden");
      document.querySelector(".error__text").textContent = "К сожалению по вашему запросу ничего не найдено.";
    }
      submitButton.removeAttribute('disabled');
      searchField.removeAttribute('disabled');
    })

}

searchField.addEventListener('input', validateInput);
