import "./../css/analysis.css";

document.querySelector('.answer__title').textContent = `Вы спросили: «${localStorage.getItem('title').replace(/[\"]/gim, "")}»`
document.querySelector('.answer__news_total').textContent = localStorage.getItem('total').replace(/[\"]/gim, "");
document.querySelector('.answer__news_in-title').textContent = localStorage.getItem('titles').replace(/[\"]/gim, "");


document.querySelector('.table__progress_mon').setAttribute('style', `width: ${localStorage.getItem('mon').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_mon').textContent = localStorage.getItem('mon').replace(/[\"]/gim, "");

document.querySelector('.table__progress_tue').setAttribute('style', `width: ${localStorage.getItem('tue').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_tue').textContent = localStorage.getItem('tue').replace(/[\"]/gim, "");

document.querySelector('.table__progress_wed').setAttribute('style', `width: ${localStorage.getItem('wed').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_wed').textContent = localStorage.getItem('wed').replace(/[\"]/gim, "");

document.querySelector('.table__progress_thu').setAttribute('style', `width: ${localStorage.getItem('thu').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_thu').textContent = localStorage.getItem('thu').replace(/[\"]/gim, "");

document.querySelector('.table__progress_fri').setAttribute('style', `width: ${localStorage.getItem('fri').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_fri').textContent = localStorage.getItem('fri').replace(/[\"]/gim, "");

document.querySelector('.table__progress_sat').setAttribute('style', `width: ${localStorage.getItem('sat').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_sat').textContent = localStorage.getItem('sat').replace(/[\"]/gim, "");

document.querySelector('.table__progress_sun').setAttribute('style', `width: ${localStorage.getItem('sun').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_sun').textContent = localStorage.getItem('sun').replace(/[\"]/gim, "");