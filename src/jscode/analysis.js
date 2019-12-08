import "./../css/analysis.css";
import { apiNews, today, previousWeek } from "./modules/constants.js";

const month = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];

document.querySelector('.answer__title').textContent = `Вы спросили: «${localStorage.getItem('title').replace(/[\"]/gim, "")}»`
document.querySelector('.answer__news_total').textContent = localStorage.getItem('total').replace(/[\"]/gim, "");
document.querySelector('.answer__news_in-title').textContent = localStorage.getItem('titles').replace(/[\"]/gim, "");
document.querySelector('.diagram__text').textContent = `Дата (${month[new Date().getMonth()]})`;

//новая попытка
const date = new Date();
const ago = new Date(date.getTime() - previousWeek);
const week = arrOfDays(ago);
const data = JSON.parse(localStorage.getItem('data'));
console.log(data.articles);
// Массив дат полученных из API
const dayOfArticle = data.articles.map((el) => { return el.publishedAt });
const renderedDate = dayOfArticle.map((el) => { return new Date(el).getDate() });

// Получение массива чисел дней
function arrOfDays(a) {
    let arr = [];
    for (let i = 0; i < 7; i += 1) {
        arr.push(new Date(ago.getTime() + today*i).getDate());
    }
    return arr
}

// Количество новостей за каждый из дней
function newsInDay(n) {
    return renderedDate.filter((el) => {
        return el == n
    }).length
}

// День недели 
function dayOfWeek() {
    return days.map((el) => { return day[el] })
}

// Первый день в списке
document.querySelector('.table__progress_mon').setAttribute('style', `width: ${newsInDay(week[0])}%`);
document.querySelector('.table__value_mon').textContent = newsInDay(week[0]);
document.querySelector('.first-day').textContent = `${week[0]}, ${dayOfWeek()[0]}`;

// Второй день в списке
document.querySelector('.table__progress_tue').setAttribute('style', `width: ${newsInDay(week[1])}%`);
document.querySelector('.table__value_tue').textContent = newsInDay(week[1]);
document.querySelector('.second-day').textContent = `${week[1]}, ${dayOfWeek()[1]}`;

// Третий день в списке
document.querySelector('.table__progress_wed').setAttribute('style', `width: ${newsInDay(week[2])}%`);
document.querySelector('.table__value_wed').textContent = newsInDay(week[2]);
document.querySelector('.third-day').textContent = `${week[2]}, ${dayOfWeek()[2]}`;

// Четвертый день в списке
document.querySelector('.table__progress_thu').setAttribute('style', `width: ${newsInDay(week[3])}%`);
document.querySelector('.table__value_thu').textContent = newsInDay(week[3]);
document.querySelector('.fourth-day').textContent = `${week[3]}, ${dayOfWeek()[3]}`;

// Пятый день в списке
document.querySelector('.table__progress_fri').setAttribute('style', `width: ${newsInDay(week[4])}%`);
document.querySelector('.table__value_fri').textContent = newsInDay(week[4]);
document.querySelector('.fifth-day').textContent = `${week[4]}, ${dayOfWeek()[4]}`;

// Шестой день в списке
document.querySelector('.table__progress_sat').setAttribute('style', `width: ${newsInDay(week[5])}%`);
document.querySelector('.table__value_sat').textContent = newsInDay(week[5]);
document.querySelector('.sixth-day').textContent = `${week[5]}, ${dayOfWeek()[5]}`;

// Седьмой день в списке
document.querySelector('.table__progress_sun').setAttribute('style', `width: ${newsInDay(week[6])}%`);
document.querySelector('.table__value_sun').textContent = newsInDay(week[6]);
document.querySelector('.seventh-day').textContent = `${week[6]}, ${dayOfWeek()[6]}`;

//новая попытка






// document.querySelector('.table__progress_mon').setAttribute('style', `width: ${localStorage.getItem('mon').replace(/[\"]/gim, "")}%`);
// document.querySelector('.table__value_mon').textContent = localStorage.getItem('mon').replace(/[\"]/gim, "");

// document.querySelector('.table__progress_tue').setAttribute('style', `width: ${localStorage.getItem('tue').replace(/[\"]/gim, "")}%`);
// document.querySelector('.table__value_tue').textContent = localStorage.getItem('tue').replace(/[\"]/gim, "");

// document.querySelector('.table__progress_wed').setAttribute('style', `width: ${localStorage.getItem('wed').replace(/[\"]/gim, "")}%`);
// document.querySelector('.table__value_wed').textContent = localStorage.getItem('wed').replace(/[\"]/gim, "");

// document.querySelector('.table__progress_thu').setAttribute('style', `width: ${localStorage.getItem('thu').replace(/[\"]/gim, "")}%`);
// document.querySelector('.table__value_thu').textContent = localStorage.getItem('thu').replace(/[\"]/gim, "");

// document.querySelector('.table__progress_fri').setAttribute('style', `width: ${localStorage.getItem('fri').replace(/[\"]/gim, "")}%`);
// document.querySelector('.table__value_fri').textContent = localStorage.getItem('fri').replace(/[\"]/gim, "");

// document.querySelector('.table__progress_sat').setAttribute('style', `width: ${localStorage.getItem('sat').replace(/[\"]/gim, "")}%`);
// document.querySelector('.table__value_sat').textContent = localStorage.getItem('sat').replace(/[\"]/gim, "");

// document.querySelector('.table__progress_sun').setAttribute('style', `width: ${localStorage.getItem('sun').replace(/[\"]/gim, "")}%`);
// document.querySelector('.table__value_sun').textContent = localStorage.getItem('sun').replace(/[\"]/gim, "");