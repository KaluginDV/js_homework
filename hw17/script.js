$(document).ready(function(){

    //Написать функцию, что при клике на “Выбрать тур” , 
    //“Получить консультацию” или “Расписание туров” (все 3 элемента)  
    //подложка (класс overlay) медленно появлялась на странице (через прозрачность), 
    //а само модальное окно (класс modal) плавно выезжало сверху
    let sheldure = $('[href="#sheldure"]').click(function(){
        fadeInOverlay(); 
    });
    let tour = $('[href="#tour"]').click(function(){
        fadeInOverlay();   
    });
    let mainBtn = $('.main_btn').click(function(){
        fadeInOverlay();  
    });

    function fadeInOverlay(){
        $('.overlay').fadeIn();
        $('.modal').slideDown(); 
    }

    //Написать функцию, что при клике на крестик всё происходило 
    //бы наоборот: подложка исчезала, модальное окно уезжало вверх
    let closeBtn = $('.close').click(function(){
        fadeOutOverlay();    
    });

    function fadeOutOverlay(){
        $('.overlay').fadeOut();
        $('.modal').slideUp(); 
    }
});