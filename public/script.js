// TODO: VALIDATION OF INPUTS

// const { default: supabase } = require("../configs/dbConfig.js");
form.addEventListener('submit', e => {
    e.preventDefault();

    
});

const btn = document.getElementById('save');
const firstInput = document.getElementById('firstName');
const lastInput = document.getElementById('lastName');


btn.addEventListener('click', async(e)  => {
    alert('working');
});



firstInput.addEventListener('input', (e) => {

    if(firstInput  == ' ') {
        firstInput.setCustomValidity('Заполните пустые поля!');
        firstInput.classList.add('error input');
    }

    

});
