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


let money, time;

function start (){
    money   = +prompt("Ваш бюджет на месяц?", 0);
    time    = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money   = +prompt("Ваш бюджет на месяц?", 0);
    }
}
start();

let appData = {
    budget:             money,
    timeData:           time,
    expenses:           {},
    optionalExpenses:   {},
    income:             [],
    savings:            true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            var item = prompt("Введите обязательную статью расходов в этом месяце", ''),
                cost = +prompt("Во сколько обойдется?", '');
        
            if ((typeof(item)) === 'string' 
                && (typeof(item)) != null
                && (typeof(cost)) != null
                && item != '' && cost != ''
                && item.length < 50){
                appData.expenses[item] = cost;
            } else {
                i--;
                continue;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Дневной бюджет составляет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уроыень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка")
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка")
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if (appData.savings){
            let save = +prompt("Какова сумма накоплений?"),
                precent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*precent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 4; i++){
            var answer = prompt("Статья необязательных расходов?", '');
            if ((typeof(answer)) === 'string' 
                && (typeof(answer)) != null
                && answer != '' && answer.length < 50){
                appData.optionalExpenses[i] = answer;
            } else {
                i--;
            }
        }  
    },
    chooseIncome: function(){
        let items;
        while(true){
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", "");
            if ((typeof(items)) === 'string' 
            && (typeof(items)) != null
            && items != ''){
                break;
            }
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может, что-то еще?", ""));
        appData.income.sort();
        /*for(let key of appData.income){
            console.log("Способы доп. заработка: "+key);
        }
        for(let key in appData){
            console.log("Наша программа включает в себя данные: "+key);
        }*/
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }

};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

//nothing