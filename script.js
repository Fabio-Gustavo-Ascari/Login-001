const form = document.querySelector(".container") /*. se refere a classe/ #se refere a id*/

const username = document.getElementById('user-rg')
const password = document.getElementById('pass-rg')
const confpassword = document.getElementById('pass-rg-conf')

document.getElementById("remember-me").addEventListener("click", (event) => {

    if(event.target.checked) {
        password.setAttribute("type", "text");/* setAttribute() define o valor de um atributo no elemento.*/
        confpassword.setAttribute("type", "text");
    }else {
        password.setAttribute("type", "password");
        confpassword.setAttribute("type", "password");
    }
})


username.addEventListener("blur", () => { /*quando o campo de usuário perder o foco, chama a função de validação.*/
    validateUsername();
});

password.addEventListener("blur", () => {
    validatepassword();
});

confpassword.addEventListener("blur", () => {
    validateconfpassword();
});


form.addEventListener("submit", (event) => { /*adiciona um evento que responde  ao salvar do  formulário.*/
    event.preventDefault()

    successForm();
} )

function validateUsername() {  /*valida se o campo de usuário está preenchido.*/
    let usernamevalue = username.value;
    
    if(usernamevalue === "") {
        errorinput(username, 'Preencha o Usuário!')
    }else {
        errorinput(username, ''); /*se o campo estiver preenchido, a mensagem de erro é limpa.*/
        return true; 
    }
    
}

function validatepassword() {  /*valida se a senha tem no mínimo 8 caracteres.*/
    let passwordvalue = password.value;

    if(passwordvalue === "") {
        errorinput(password, 'Preencha a Senha!')
    } else if(passwordvalue.length < 8) {
        errorinput(password, 'Mínimo de 8 caracteres!')
    } else {
        errorinput(password, '');
        return true;

    }
}

function validateconfpassword() {   /*valida se a senha e a confirmação de senha são iguais.*/
    let confpassvalue = confpassword.value;

    if(confpassvalue != password.value  || confpassvalue === "") {
        errorinput(confpassword, 'Senhas não conferem!')
    }else {
        errorinput(confpassword, '');
        return true;
    }
}

function successForm () {
    
    const isUsernameValid = validateUsername();
    const isPassWordValid = validatepassword();
    const isConfPassValid = validateconfpassword();
    
    if(isUsernameValid && isPassWordValid && isConfPassValid) { /*Se todos são verdadeiros*/
        console.log("Formulário enviado com sucesso!");
        
        alert("Registro Concluido com sucesso!")
     location.href = "index.html"; /*redireciona para a página inicial.*/

    }
}

function errorinput(input, message) {   /*função que exibe a mensagem de erro.*/
    const parentinput = input.parentElement;   /*pega o elemento pai do elemento de entrada.*/

    
    const textmessage = parentinput.querySelector("i")

    textmessage.innerText = message
    
}

