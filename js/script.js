let emailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
let formContainer = document.getElementById('container');
let form = document.getElementById('form');
let button = document.getElementById('button');
let subscribing = document.getElementById('subscribing');
let subscribingBtn = document.getElementById('subscribing-btn');

const validEmail = (elemento) => {   
    elemento.addEventListener('focusout', function(e) { 
        e.preventDefault();    
        if(this.value.match(emailValid)) {
            document.querySelector('.info-erro').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false
        } else {
            document.querySelector('.info-erro').innerHTML = "valid email required";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
};

let emailField = document.querySelectorAll('input#email');
for( let emFoco of emailField) {
    validEmail(emFoco);
};

const buttonAbled = ()=> {
    const email = document.getElementById('email').value;
    if(email.match(emailValid)) {
        button.disabled = false;
        return
    } else {
        button.disabled = true;
    };
};


button.addEventListener('click', function() {
    if(email) {
        button.disabled = true;
        formContainer.style.visibility="hidden";
        subscribing.style.display="flex";
    } else {
        button.disabled = false;
        formContainer.style.visibility="visible"; 
        subscribing.style.display="none";
    };
});

subscribingBtn.addEventListener('click', function() {
    location.reload();
});