'use strict';

let startBtn                = document.getElementById("start"),

    budgetValue             = document.getElementsByClassName("budget-value")[0],
    daybudgetValue          = document.getElementsByClassName("daybudget-value")[0],
    levelValue              = document.getElementsByClassName("level-value")[0],
    expensesValue           = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue   = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue             = document.getElementsByClassName("income-value")[0],
    monthsavingsValue       = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue        = document.getElementsByClassName("yearsavings-value")[0],

    expensesItems           = document.getElementsByClassName("expenses-item"),
    expensesBtn             = document.getElementsByTagName("button")[0],
    optionalexpensesBtn     = document.getElementsByTagName("button")[1],
    countBtn                = document.getElementsByTagName("button")[2],
    optionalexpensesItem    = document.querySelectorAll(".optionalexpenses-item"),

    incomeItem              = document.querySelector('.choose-income'),
    checkSavings            = document.querySelector('#savings'),
    sumValue                = document.querySelector('.choose-sum'),
    percentValue            = document.querySelector('.choose-percent'),
    yearValue               = document.querySelector('.year-value'),
    monthValue              = document.querySelector('.month-value'),
    dayValue                = document.querySelector('.day-value');


let money, time;

expensesBtn.disabled            = true;
optionalexpensesBtn.disabled    = true;
countBtn.disabled               = true;

startBtn.addEventListener("click", function(){
    time    = prompt("Введите дату в формате YYYY-MM-DD");
    money   = +prompt("Ваш бюджет на месяц?", 0);

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", 0);
    }

    appData.budget          = money;
    appData.timeData        = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value         = new Date(Date.parse(time)).getFullYear();
    monthValue.value        = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value          = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled            = false;
    optionalexpensesBtn.disabled    = false;
    countBtn.disabled               = false;

});

expensesBtn.addEventListener("click", function(){
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++){
        let item = expensesItems[i].value,
            cost = expensesItems[++i].value;
    
        if ((typeof(item)) === 'string' 
            && (typeof(item)) != null
            && (typeof(cost)) != null
            && item != '' && cost != ''
            && item.length < 50){
            appData.expenses[item] = cost;
            sum += +cost;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener("click", function(){
    for (let i = 0; i < optionalexpensesItem.length; i++){
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i]+ " ";
    }  
});

countBtn.addEventListener("click", function(){
    if (appData.budget != undefined) {
        //appData.moneyPerDay = (appData.budget / 30).toFixed();
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уроыень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }   
    }
    else {
        daybudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener("input", function(){
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function(){
    if (appData.savings){
        appData.savings = false;
    }
    else{
        appData.savings = true; 
    }
});

sumValue.addEventListener("input", function(){
    if (appData.savings){
        let save = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = save/100/12*percent;
        appData.yearIncome = save/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener("input", function(){
    if (appData.savings){
        let save = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = save/100/12*percent;
        appData.yearIncome = save/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget:             money,
    timeData:           time,
    expenses:           {},
    optionalExpenses:   {},
    income:             [],
    savings:            false,
};
