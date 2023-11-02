let menuCss = document.getElementById('menu')
let fechaMenuCelular = document.getElementById('fechaMenuCelular')
let mensagem = document.getElementById('mensagem')
mensagem = mensagem.addEventListener('click', enviarMensagem)
let contador = 0
let click = 0

const bloquearRolagem = (event) => {
  let body = document.getElementsByTagName('body')
  body.classList.add('no-scroll')
}

function abrirMenu() {
  contador = 1
  menu.style.display = 'block'
  fechaMenuCelular.style.display = 'block'
  let body = document.querySelector('#body')
  body.classList.add('no-scroll')
}

function fecharMenu(event) {
  var element = event.target;
  console.log(element.tagName)

  if (element.tagName !== "A") {
    if (element.tagName === "NAV") return 0
  }
  if (contador == 1) {
    contador = 0
    menu.style.display = 'none'
    fechaMenuCelular.style.display = 'none'
    let body = document.querySelector('#body')
    body.classList.remove('no-scroll')
  }
}

function enviarMensagem() {
  if (click != 0) {
    return 0
  }

  click++
  var mensagemPadrao = document.querySelector('.mensagem-1')
  var cLoader = document.querySelector('.c-loader')
  var mensagemConcluido = document.querySelector('.concluido')

  mensagemPadrao.classList.remove('aparece')
  mensagemPadrao.classList.add('ocultar')
  cLoader.classList.remove('ocultar')
  cLoader.classList.add('aparece')

  setTimeout(function () {
    cLoader.classList.remove('aparece')
    cLoader.classList.add('ocultar')
  }, 3000)

  setTimeout(function () {
    mensagemConcluido.classList.remove('ocultar')
    mensagemConcluido.classList.add('aparece')
  }, 3000)
  setTimeout(function () {
    mensagemConcluido.classList.remove('aparece')
    mensagemConcluido.classList.add('ocultar')
    mensagemPadrao.classList.remove('ocultar')
    mensagemPadrao.classList.add('aparece')
    click = 0
  }, 6000)
}