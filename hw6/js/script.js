//Восстановить порядок в меню, добавить пятый пункт
let btns = document.body.querySelectorAll(".menu-item"),
    menu = document.body.querySelector(".menu"),
    title = document.body.querySelector(".title"),
    adv = document.body.querySelector(".adv"),
    column = document.body.querySelectorAll(".column"),
    idPrompt =document.body.querySelector(".prompt");

menu.insertBefore(btns[2], btns[1]);
let newBtn = btns[3].cloneNode(true);
newBtn.textContent = "Пятый пункт";
menu.appendChild(newBtn);

//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.textContent = "Мы продаем только подлинную технику Apple";

//Удалить рекламу со страницы
column[1].removeChild(adv);

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let promptText = prompt("Как Вы относитесь к технике Apple?", "");
idPrompt.textContent = promptText;