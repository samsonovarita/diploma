import "./../style.css";

import {Api} from "./modules/Api.js";

const getCommits = new Api("https://api.github.com/repos/samsonovarita/diploma/commits?per_page=20");
getCommits.getApiData();

import Swiper from "swiper";
import {swiperConfig} from "./modules/swiperConfig.js";

const mySwiper = new Swiper(swiperConfig.container, swiperConfig.settings);
