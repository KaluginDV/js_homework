window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    let age = document.getElementById('age');

    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
    }
    showUser('John', 'Smith');

        //Создать класс options
        class Options {
            //Он должен содержать свойства: height, width, bg, fontSize, textAlign
            constructor (height, width, bg, fontSize, textAlign){
                this.height     = height;
                this.width      = width;
                this.bg         = bg;
                this.fontSize   = fontSize;
                this.textAlign  = textAlign;
            }
    
            //Он должен содержать метод, создающий новый div на странице, 
            //записывающий в него любой текст и при помощи cssText 
            //изменять свой стиль из переданных параметров
            createDiv(){
                let newDiv = document.createElement('div');
                document.body.appendChild(newDiv);
                //newDiv.style.height     = this.height;
                //newDiv.style.width      = this.width;
                //newDiv.style.background = this.bg;
                //newDiv.style.fontSize   = this.fontSize + 'px';
                //newDiv.style.textAlign  = this.textAlign;
                //newDiv.textContent      = "Some text";
                let style = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
                newDiv.style.cssText = style;
            }
        }
    
        let newOptions = new Options(100, 100, 'black', 24, 'center');
        newOptions.createDiv();
});