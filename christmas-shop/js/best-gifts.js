//import {giftsRandom} from "./gifts-content.js"
import gifts from "./gifts.json";


const giftsItems = document.querySelectorAll(".best-gifts__item");
const giftsArray = [...gifts];

const giftsRandom = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

giftsRandom(giftsArray);

const bestGifts = (giftsArray) => {
    giftsItems.forEach((e, i) => {
        //const randomIndex = Math.floor(Math.random() * gifts.length);
        const category = e.querySelector(".best-gifts__category");
        const title = e.querySelector(".best-gifts__title");
        const text = e.querySelector(".best-gifts__text");
        const img = e.querySelector(".best-gifts__img");


        if (giftsArray[i]["category"].toLowerCase() === "for health") {
            category.classList.add("g");
            img.setAttribute('src', './assets/img/gift-for-health.png');
        } else if (giftsArray[i]["category"].toLowerCase() === "for work") {
            category.classList.add("b");
            img.setAttribute('src', './assets/img/gift-for-work.png');
        } else if (giftsArray[i]["category"].toLowerCase() === "for harmony") {
            category.classList.add("p");
            img.setAttribute('src', './assets/img/gift-for-harmony.png');
        }


        category.innerText = giftsArray[i]["category"];
        title.innerText = giftsArray[i]["name"];
        text.innerText = giftsArray[i]["description"];

    })
}

bestGifts(giftsArray)

//console.log(gifts);
