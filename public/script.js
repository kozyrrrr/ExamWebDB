// // TODO: VALIDATION OF INPUTS







// const { default: supabase } = require("../configs/dbConfig.js");
// form.addEventListener('submit', e => {
//     e.preventDefault();
//      request('/add', 'POST')

    
// });

// const btn = document.getElementById('save');



// btn.addEventListener('click', async(e)  => {
//     alert('working');
// });



// firstInput.addEventListener('input', (e) => {

//     if(firstInput  == ' ') {
//         firstInput.setCustomValidity('Заполните пустые поля!');
//         firstInput.classList.add('error input');
//     }

    

// });

async function request(url , method='GET', data=null) {
    try {
    const headers={};
    let body;
    
    console.log(body)
    if (data){headers['Content-Type'] = 'application/json';
    body = JSON.stringify(data);
    }
    console.log('req:', data);
    const response = await fetch(url, { method,headers,body })
    return await response;
    } catch(e) {
    console.warn(`Erorr: ${e.message}`);
    }
    }

    const firstInput = document.getElementById('firstname');
    const lastInput = document.getElementById('lastname');

     let data = {
         firstInput: firstInput,
         lastInput: 2
     }
    
    form.addEventListener('submit', async e => {
        e.preventDefault();
         data.firstInput = firstInput.value;
         data.lastInput = lastInput.value;
        const PushInfo = await request('/add', 'POST', data)  
        console.log('send: ', PushInfo)
        console.log(firstInput.value)
        getData();
    });



   function getData() {
		fetch('/add', {
				method: "GET"
			})
			.then((data) => data.json())
			.then((data) => getNames(data))
           
            console.log(data)
	}


    
    function getNames(names) {
        namess = JSON.stringify(names)

        const namesArray = document.querySelector('.card')
        namesArray.innerHTML = ''
    
        names.forEach((name) => {
        const nameBlock = document.createElement('div');
        nameBlock.innerHTML = `
        <p class = card-body bdNames>FirstName: ${name.firstname} LastName: ${name.lastname}</p>`
        nameBlock.classList.add('card-body')
        namesArray.append(nameBlock);
        })
        
        }
        
        document.addEventListener("DOMContentLoaded", getData());