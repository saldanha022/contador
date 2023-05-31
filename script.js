const value = document.querySelector('#value');

function incrementar(){
    value.innerHTML = `${parseInt(value.innerText) + 1}`;
}

function decrementar(){
    value.innerHTML = `${parseInt(value.innerText) - 1}`;
}