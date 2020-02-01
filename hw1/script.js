'use strict';

/*2) В файле скрипта создать 2 переменные (money и time), 
которые будут получать данные от пользователя:*/
var money = prompt("Ваш бюджет на месяц?", 0);
var time = prompt("Введите дату в формате YYYY-MM-DD");

/*3) Создать объект appData, который будет содержать такие данные:*/
let appData = {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);

/*4) Задать пользователю по 2 раза вопросы:*/
var question1 = "Введите обязательную статью расходов в этом месяце";
var question2 = "Во сколько обойдется?";
var item1 = prompt(question1);
var cost1 = prompt(question2);
appData.expenses[item1] = cost1;
var item2 = prompt(question1);
var cost2 = prompt(question2);
appData.expenses[item2] = cost2;

/*5) Вывести на экран пользователя бюджет на 1 день 
(брать месяц за 30 дней, использовать alert)*/
alert("Бюджет на 1 день равен: " + money/30);

/*6) Проверить, чтобы все работало без ошибок в консоли*/
/*Проверено*/

/*Вопросы к этому заданию
Сколько типов данных существует в JS?
7 простых, 5 специальных и обычные типы.
Как вывести информацию в консоль?
console.log("message");
Какая функция операторов || и &&?
|| - оператор "И", && - оператор "ИЛИ". Используются для проверки условия.*/
