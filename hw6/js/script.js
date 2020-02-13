//Восстановить порядок в меню, добавить пятый пункт
let btns = document.querySelectorAll(".menu-item");
document.body.replaceChild(btns[2], btns[1]);
//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url('./img/apple_true.jpg')";
//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
//Удалить рекламу со страницы
//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"