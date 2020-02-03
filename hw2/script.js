
var money   = +prompt("Ваш бюджет на месяц?", 0), 
    time    = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget:             money,
    timeData:           time,
    expenses:           {},
    optionalExpenses:   {},
    income:             [],
    savings:            false
};

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

appData.moneyPerDay = appData.budget / 30;

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