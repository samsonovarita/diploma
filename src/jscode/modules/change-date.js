import { days } from './constants.js';

const month = ['январь', 'февраль', 'марть', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const monthChangeEnd = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export function makeArrayOfDates() {
    const array = [];
    const firstDay = new Date(Date.now() - days * dayInMS);
    for (let i = 0; i <= days; i++) {
        array.push(new Date(firstDay.getTime() + dayInMS * i));
    }
    return array;
}

export function getCurrentMonth() {
    const averageMonth = makeArrayOfDates();
    return month[averageMonth[Math.floor(averageMonth.length / 2)].getMonth()];
}

function makeMonthAsString(number) {
    return monthChangeEnd[number];
}

export function makeFormattedDate(string) {
    const date = new Date(string);
    return `${date.getDate()} ${makeMonthAsString(date.getMonth())}, ${date.getFullYear()}`;
}