import "./../css/about.css";

import {Api} from "./modules/Api.js";
import {CommitList} from "./modules/CommitList.js";
import Swiper from "swiper";
import {swiperConfig} from "./modules/swiperConfig.js";

const getCommits = new Api("https://api.github.com/repos/samsonovarita/diploma/commits?per_page=20");
getCommits.getApiData()
.then(res => {
    if (res && res.length > 0) { 
    new CommitList(document.querySelector('.swiper-wrapper'), res);

    const mySwiper = new Swiper(swiperConfig.container, swiperConfig.settings);
  }
  })
