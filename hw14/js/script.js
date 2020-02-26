
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

//У вас есть конвертер валют из предыдущего урока. Переписать его, используя промисы.

inputRub.addEventListener('input', () => {

    function catchData(){

        let promise = new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function(){
                if (request.readyState === 4){ 
                    if(request.status == 200) {
                        resolve(this.response);
                    } else {
                        reject();
                    }
                }
            };
        });

        return promise;

    }

    catchData().then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    }).then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так!");

});