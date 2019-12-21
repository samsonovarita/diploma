import "./../css/analysis.css";

const month = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
const day = [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

//получение данных со страницы поиска
const results = JSON.parse(localStorage.getItem('results'));
const query = localStorage.getItem('title').toLowerCase();

//подстановка данных в верхнюю часть страницы
document.querySelector("#query").textContent=query
document.querySelector(".answer__news_total").textContent=results.totalResults

const today = new Date();
const millisecondsIn24HRS = 60 * 60 * 24 * 1000;

let datesStr = [] // то же смое но в формате ГГГГ - ММ - ДД
let dateLabels = [] //массив дней недели

for (let i = 0; i < 7; i++) {
    let tempDate = new Date(today - millisecondsIn24HRS * i)
    let tempDateStr = tempDate.getFullYear() + "-" + myGetMonth(tempDate) + "-" + myGetDate(tempDate)
    let tempDayLabel = tempDate.getDate() + ", " + day[tempDate.getDay()]

    datesStr.push(tempDateStr)
    dateLabels.push(tempDayLabel)
}

function myGetDate(date) {
    const day = date.getDate();
    if (day >= 10) {
        return day;
    } else {
        return '0' + day;
    }
}

function myGetMonth(date) {
    const month = date.getMonth() + 1;
    if (month >= 10) {
        return month;
    } else {
        return '0' + month;
    }
}

const dateDivs = document.querySelectorAll(".diagram__date");
const barDivs = document.querySelectorAll(".diagram__bar");
let totalMentions = 0

for (let i = 0; i < 7; i++) {
    dateDivs[6 - i].textContent = dateLabels[i];
    
    const resultInDay = countResultsForQueryAndDate(results.articles, query, datesStr[i]);
    totalMentions += resultInDay;

    barDivs[6 - i].textContent = resultInDay;
    barDivs[6 - i].style.width = resultInDay + "%";
}

function countResultsForQueryAndDate(results, query, date) {
    let counter = 0;

    results.forEach(function(result) {
        if (result.title.toLowerCase().includes(query.toLowerCase()) && result.publishedAt.includes(date)) {
            counter++;
        }
    });

    return counter;
}

document.querySelector(".answer__news_in-title").textContent=totalMentions
document.querySelector("#month").textContent=month[today.getMonth()]