export const apiNews = '744ea2ddd9ad4c13982f718c39af935e';

export const regexDateOne = /(\d{1,2}\.\d{1,2}\.\d{1,4})/g;
export const regexDateTwo = /(\d{1,2})\.(\d{1,2})\.(\d{1,4})/g;

// export const retrievedNewsArray = localStorage.getItem('newsArray');
// export const retrievedRequest = localStorage.getItem('request');
// export const monthRussian = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
// export const regexDateTransform = /(\d{1,4})-(\d{1,2})-(\d{1,2})/g;


//  export const today = new Date(Date.now() + 60 * 60 * 1000).toLocaleString().match(regexDateOne).join('').replace(regexDateTwo,(date, month, year) => `${year}-${month}-${date}`);
//  export const previousWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleString().match(regexDateOne).join('').replace(regexDateTwo,(date, month, year) => `${year}-${month}-${date}`);

const dat = new Date();
export const today = `${dat.getFullYear()}-${dat.getMonth() + 1}-${dat.getDate()}`;
export const previousWeek = `${dat.getFullYear()}-${dat.getMonth() + 1}-${dat.getDate()-7}`;