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
    savings:            true
};

function chooseExpenses(){
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
}
chooseExpenses();

alert("Бюджет на 1 день равен: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уроыень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка")
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
} else {
    console.log("Произошла ошибка");
}

function checkSavings(){
    if (appData.savings){
        let save = +prompt("Какова сумма накоплений?"),
            precent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*precent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Дневной бюджет составляет: " + appData.moneyPerDay);
}
detectDayBudget();

function chooseOptExpenses(){
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
}
