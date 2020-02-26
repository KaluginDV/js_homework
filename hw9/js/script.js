window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer
    let deadLine = '2020-03-01';

    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours2  = Math.floor((t/(1000*60*60))),
            hours   = Math.floor((t/1000/60/60) % 24),
            days    = Math.floor((t/(1000*60*60*24)));

        return {
            'total'     : t,
            'days'      : days,
            'hours'     : hours,
            'minutes'   : minutes,
            'seconds'   : seconds
        };
    }

    function setClock(id, endTime) {
        let timer   = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours   = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock(){
            let t = getTimeRemaining(endTime);
            if (t.total > 0){
                days.textContent    = t.days;
                hours.textContent   = t.hours < 10 ? "0"+t.hours : t.hours;
                minutes.textContent = t.minutes < 10 ? "0"+t.minutes : t.minutes;
                seconds.textContent = t.seconds < 10 ? "0"+t.seconds : t.seconds;
            }
            else{
                days.textContent    = '0',
                hours.textContent   = '00',
                minutes.textContent = '00',
                seconds.textContent = '00'; 
                clearTimeout(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);

    // modal

    let more    = document.querySelector('.more'),
        overley = document.querySelector('.overlay'),
        close   = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overley.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overley.style.display = 'none';
        more.classList.remove('more-splash'); 
        document.body.style.overflow = '';  
    });

    // description-btn
    let descriptionBtn = document.querySelectorAll('.description-btn');
    for (let i = 0; i < descriptionBtn.length; i++){
        descriptionBtn[i].addEventListener('click', function(){
            overley.style.display = 'block';
            descriptionBtn[i].classList.add('more-splash');
            document.body.style.overflow = 'hidden'; 
        });
    }

       // Form
       let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        formDown = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(element){

        element.addEventListener('submit', function(event){
            event.preventDefault();
            element.appendChild(statusMessage);

        let formData = new FormData(element);

        function postData(){

            let promise = new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                
                request.onreadystatechange = function() {
                    if (request.readyState < 4){
                        resolve();
                    }  
                    else if(request.readyState === 4) {
                        if (request.status == 200 && request.status < 300){
                            resolve();
                        }
                        else{
                            reject();
                        }
                    }
                };
                let obj = {};
                formData.forEach(function(value, key){
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);
            });

            return promise;

        }

        function clearInput(){
            for (let i = 0; i < input.length; i ++){
                input[i].value = '';
            }
        }

        postData(formData).then(() => statusMessage.innerHTML = message.loading)
                        .then(() => statusMessage.innerHTML = message.success)
                        .catch(() => statusMessage.innerHTML = message.failure)
                        .then(clearInput);

        });

    }

    sendForm(form);
    sendForm(formDown);

});