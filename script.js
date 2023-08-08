const form = document.getElementById('form-cadastro')
const nomeUsuario = document.getElementById('nome-usuario')
let formEValido = false

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split (' ')
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroTelefone = document.getElementById('numero-telefone')
    const emailCompleto = document.getElementById('email-completo')
    const mensagemSucesso = `Cadastro com o telefone número: <b>${numeroTelefone.value}</b> e email: <b>${emailCompleto.value}</b>`

    formEValido = validaNome (nomeUsuario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    
    nomeUsuario.value = '';
    numeroTelefone.value = '';
    emailCompleto.value = '';
    } else {
        nomeUsuario.style.border = '1px solid red'
        document.querySelector('.erro-message').style.display = 'block'
    }
})

nomeUsuario.addEventListener('keyup', function(e) {
    console.log(e);
    formEValido = validaNome(e.target.value)

    if(!formEValido) {
        nomeUsuario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    } else {
        nomeUsuario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
})