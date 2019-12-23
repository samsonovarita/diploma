import "./../css/about.css";

import { Api } from "./modules/api.js";
import { CommitList } from "./modules/commit-list.js";
import Swiper from "swiper";
import { swiperConfig } from "./modules/swiper-config.js";

const getCommits = new Api("https://api.github.com/repos/samsonovarita/diploma/commits?per_page=20");
getCommits.getApiData()
  .then(res => {
    if (res && res.length > 0) {
      new CommitList(document.querySelector('.swiper-wrapper'), res);

      new Swiper(swiperConfig.container, swiperConfig.settings);
    }
  })
  .catch(error => {
    console.log('Ошибка получения коммита с GitHub:' + error);
  }
  )
