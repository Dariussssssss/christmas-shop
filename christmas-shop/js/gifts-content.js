import gifts from "./gifts.json";

const categoryTabs = document.querySelectorAll(".category__button");
const giftsList = document.querySelector(".best-gifts__list");
const giftsArray = [...gifts];
const allButton = document.querySelector(".category__button");
allButton.classList.add('active');
allButton.disabled = true;

export const giftsRandom = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

giftsRandom(giftsArray);

const bestGiftsPage = (filteredGifts) => {
    giftsList.innerHTML = '';

    filteredGifts.forEach((el) => {

        const li = document.createElement("li");
        li.classList.add("best-gifts__item");

        const content = document.createElement("div");
        content.classList.add("best-gifts__content");

        const category = document.createElement("p");
        category.classList.add("best-gifts__category");

        if (el["category"].toLowerCase() === "for health") {
            category.classList.add("g");
        } else if (el["category"].toLowerCase() === "for work") {
            category.classList.add("b");
        } else if (el["category"].toLowerCase() === "for harmony") {
            category.classList.add("p");
        }

        category.innerText = el["category"];
        content.appendChild(category);


        const title = document.createElement("p");
        title.classList.add("best-gifts__title");
        title.innerText = el["name"];
        content.appendChild(title);


        const text = document.createElement("p");
        text.classList.add("best-gifts__text");
        text.innerText = el["description"];
        content.appendChild(text);


        const img = document.createElement("img");
        if (el["category"].toLowerCase() === "for health") {
            img.setAttribute('src', './assets/img/gift-for-health.png');
            img.setAttribute('alt', 'for health');
        } else if (el["category"].toLowerCase() === "for work") {
            img.setAttribute('src', './assets/img/gift-for-work.png');
            img.setAttribute('alt', 'for work');
        } else if (el["category"].toLowerCase() === "for harmony") {
            img.setAttribute('src', './assets/img/gift-for-harmony.png');
            img.setAttribute('alt', 'for harmony');
        }
        img.classList.add("best-gifts__img");

        li.appendChild(img);
        li.appendChild(content);

        giftsList.appendChild(li);

    })
}

bestGiftsPage(giftsArray);

let filteredGifts = [];




categoryTabs.forEach(e => {
    e.addEventListener("click", event => {
        const nameTabs = event.target.innerText.trim().toLowerCase();

        categoryTabs.forEach(button => {
            button.disabled = false;
            button.classList.remove('active');
        });

        event.target.classList.add('active');
        event.target.disabled = true;

        if (nameTabs === "all") {
            filteredGifts = giftsArray;
        } else {
            filteredGifts = giftsArray.filter(el => el["category"].toLowerCase() === nameTabs);
        }
        giftsRandom(giftsArray);
        bestGiftsPage(filteredGifts);
    })
})

