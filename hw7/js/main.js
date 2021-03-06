'use strict';

//Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById("start");
//Получить все блоки в правой части программы через классы 
//(которые имеют класс название-value, начиная с <div class="budget-value"></div> 
//и заканчивая <div class="yearsavings-value"></div>)
let budget              = document.getElementsByClassName("budget-value")[0],
    daybudget           = document.getElementsByClassName("daybudget-value")[0],
    level               = document.getElementsByClassName("level-value")[0],
    expenses            = document.getElementsByClassName("expenses-value")[0],
    optionalexpenses    = document.getElementsByClassName("optionalexpenses-value")[0],
    income              = document.getElementsByClassName("income-value")[0],
    monthsavings        = document.getElementsByClassName("monthsavings-value")[0],
    yearsavings         = document.getElementsByClassName("yearsavings-value")[0];

//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItems = document.getElementsByClassName("expenses-item");

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let expensesItemBtn     = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn      = document.getElementsByTagName("button")[2];

//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item");

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let incomeItem      = document.querySelector('.choose-income'),
    checkSavings    = document.querySelector('#savings'),
    sumValue        = document.querySelector('.choose-sum'),
    percentValue    = document.querySelector('.choose-percent'),
    yearValue       = document.querySelector('.year-value'),
    monthValue      = document.querySelector('.month-value'),
    dayValue        = document.querySelector('.day-value');