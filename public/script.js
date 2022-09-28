

async function request(url , method='GET', data=null) {
    try {
    const headers={};
    let body;
    if (data){headers['Content-Type'] = 'application/json';
    body = JSON.stringify(data);
    }

    const response = await fetch(url, { method,headers,body })
    return await response;
    } catch(e) {
    console.warn(`Erorr: ${e.message}`);
    }}

    const firstInput = document.getElementById('firstname');
    const lastInput = document.getElementById('lastname');

    let data = {}

    form.addEventListener('submit', async e => {
        e.preventDefault();
        data.firstInput = firstInput.value;
        data.lastInput = lastInput.value;
        const PushInfo = await request('/add', 'POST', data)
        getData();
    });

   function getData() {
		fetch('/add', {
				method: "GET"
			})
			.then((data) => data.json())
			.then((data) => getNames(data))
	}

    function getNames(names) {
        namess = JSON.stringify(names)

        const namesArray = document.querySelector('.card')
        namesArray.innerHTML = ''
    
        names.forEach((name) => {
        const nameBlock = document.createElement('div');
        const deleteBtn = document.createElement('button')
        nameBlock.innerHTML = `
        <p class = fs-3 card-body bdNames>
        <p class = fs-3 text-primary>
        FirstName: ${name.firstname} 
        LastName: ${name.lastname}</p>`
        nameBlock.classList.add('card-body')
        deleteBtn.classList.add('close')
        namesArray.append(nameBlock);
        namesArray.append(deleteBtn);
        })
    }
        
    document.addEventListener("DOMContentLoaded", getData());
    document.getElementById('close');

    let information = [];
    let counter = 0;
    let i = 1;

    async function deleteName(id){
        console.log(id)
        await request(`/add/${id}`, 'DELETE')
	    
    }
    
    