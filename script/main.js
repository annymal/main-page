// const request = await fetch('https://cdn.rage.mp/master/');
//         const data = await request.json();
// console.log(data)
//
// function renderPosts(posts){
//         const cardsEl = document.querySelector('.player')
//         const cardsName = document.querySelector('.player__description__number')
//         const postsStr = posts.map(
//             post => `<p class="player__description__number">${post.players}</p>`
//         ).join('');
//         cardsEl.innerHTML = postsStr;
// }
// renderPosts(posts);

//сделала изменение цвета при скроллинге
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.getElementsByTagName("header")[0].classList.add(className);
    } else {
        document.getElementsByTagName("header")[0].classList.remove(className);
    }
};
/***********************************************/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
//array.from()- создает массивы из объектов
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

