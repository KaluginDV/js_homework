window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    let age = document.getElementById('age');

    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
    }
    showUser('John', 'Smith');
});