import "./../css/analysis.css";
import { apiNews, today, previousWeek } from "./modules/constants.js";

const date = new Date();
const oneDay = 24 * 60 * 60 * 1000;
const weekAgoTimestamp = 6 * oneDay;
const ago = new Date(date.getTime() - weekAgoTimestamp);

// Массив чисел дней
const weekDays = arrOfDays(ago);
const days = daysWeek(ago);

const month = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
const day = [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

//получение данных со страницы поиска
const results = JSON.parse(localStorage.getItem('results'));

//получение массива дат с API из LocalStorage
const publishedDate = results.articles.map((el) => {return el.publishedAt});
const renderedDate = publishedDate.map((el) => {return new Date(el).getDate()});

const countTitles = 
    results.articles.filter(el => {
        return el.title.toLowerCase().includes(`${localStorage.getItem('title').toLowerCase()}`) }
    ).length;

// получение массива чисел дней
function arrOfDays(a) {
    const arr = [];
    for (let i = 0; i < 7; i += 1) {
        arr.push(new Date(ago.getTime() + oneDay*i).getDate());
    }
    return arr
}

// получение массива дней недели 
function daysWeek(a) {
    const arr = [];
    for (let i = 0; i < 7; i += 1) {
        arr.push(new Date(ago.getTime() + oneDay*i).getDay());
    }
    return arr
}

// количество новостей за каждый из дней
function newsInDay(n) {
    return renderedDate.filter((el) => {
        return el == n
    }).length
}

// день недели 
function dayOfWeek() {
    return days.map((el) => { return day[el] })
}

//общая информация
document.querySelector('.answer__title').textContent = `Вы спросили: «${localStorage.getItem('title').replace(/[\"]/gim, "")}»`
document.querySelector('.answer__news_total').textContent = results.totalResults;
document.querySelector('.answer__news_in-title').textContent = countTitles;
document.querySelector('.diagram__text').textContent = `Дата (${month[new Date().getMonth()]})`;


// первый день
document.querySelector('.diagram__bar_one').setAttribute('style', `width: ${newsInDay(weekDays[0])}%`);
document.querySelector('.diagram__bar_one').textContent = newsInDay(weekDays[0]);
document.querySelector('.diagram__date_one').textContent = `${weekDays[0]}, ${dayOfWeek()[0]}`;

// второй день
document.querySelector('.diagram__bar_two').setAttribute('style', `width: ${newsInDay(weekDays[1])}%`);
document.querySelector('.diagram__bar_two').textContent = newsInDay(weekDays[1]);
document.querySelector('.diagram__date_two').textContent = `${weekDays[1]}, ${dayOfWeek()[1]}`;

// третий день
document.querySelector('.diagram__bar_three').setAttribute('style', `width: ${newsInDay(weekDays[2])}%`);
document.querySelector('.diagram__bar_three').textContent = newsInDay(weekDays[2]);
document.querySelector('.diagram__date_three').textContent = `${weekDays[2]}, ${dayOfWeek()[2]}`;

// четвертый день
document.querySelector('.diagram__bar_four').setAttribute('style', `width: ${newsInDay(weekDays[3])}%`);
document.querySelector('.diagram__bar_four').textContent = newsInDay(weekDays[3]);
document.querySelector('.diagram__date_four').textContent = `${weekDays[3]}, ${dayOfWeek()[3]}`;

// пятый день
document.querySelector('.diagram__bar_five').setAttribute('style', `width: ${newsInDay(weekDays[4])}%`);
document.querySelector('.diagram__bar_five').textContent = newsInDay(weekDays[4]);
document.querySelector('.diagram__date_five').textContent = `${weekDays[4]}, ${dayOfWeek()[4]}`;

// шестой день
document.querySelector('.diagram__bar_six').setAttribute('style', `width: ${newsInDay(weekDays[5])}%`);
document.querySelector('.diagram__bar_six').textContent = newsInDay(weekDays[5]);
document.querySelector('.diagram__date_six').textContent = `${weekDays[5]}, ${dayOfWeek()[5]}`;

// седьмой день
document.querySelector('.diagram__bar_seven').setAttribute('style', `width: ${newsInDay(weekDays[6])}%`);
document.querySelector('.diagram__bar_seven').textContent = newsInDay(weekDays[6]);
document.querySelector('.diagram__date_seven').textContent = `${weekDays[6]}, ${dayOfWeek()[6]}`;