import "./../style.css";
import {Api} from "./modules/Api.js";
import "./index.js";

const apiNews = '744ea2ddd9ad4c13982f718c39af935e';
const searchInput = document.querySelector(".search__input").elements.keyword;

export const today = new Date(Date.now() + 60 * 60 * 1000).toLocaleString().match(regexOne).join('').replace(regexTwo,(match, date, month, year) => `${year}-${month}-${date}`);
//Получение даты 7 дней назад
export const pastWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleString().match(regexOne).join('').replace(regexTwo,(match,date,month,year) => `${year}-${month}-${date}`);

const getNews = new Api(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiNews}&pageSize=100&from=${today}&to=${pastWeek}&language=ru`);