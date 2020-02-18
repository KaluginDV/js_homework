//let timerId = setTimeout(sayHello, 5000);

//let timerId = setInterval(sayHello, 5000);

//function sayHello(){
//    console.log("Hello!");
//};

//let timerId = setTimeout(function log(){
//    console.log("Hello!");
//    setTimeout(log, 5000);
//});

let btn = document.querySelector(".btn"),
    box = document.querySelector(".box");

function myAnimation(){
    let pos = 0;

    setInterval(frame, 10);
    function frame(){
        if (pos == 300){

        }
        else{
            pos++;
            box.style.left = pos + "px";
            box.style.top = pos + "px";
        }
    }
}

btn.addEventListener("click", myAnimation);