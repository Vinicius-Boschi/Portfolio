import { projects } from './projects.js'

// Data.
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear() // Mostra o ano atual.

// Projetos.
let projectsPortfolio = document.querySelector(".portfolio__projects") // Aqui que vai ser colocado os itens dessa função abaixo.

function showProjects() {
    for (let i = 0; i < projects.length; i++) { // Aqui ele pega todas as informações do array criado e mostra na tela.
      projectsPortfolio.innerHTML += "<div class='portfolio__projects'><a class='portfolio__link' href='" + projects[i].link +"'target=_blank''>" +  "<img class='portfolio__img' src='" + projects[i].image + "'>" + "<p class='portfolio__text'>" + projects[i].text + "</p>" + "</div>"
    }
}

showProjects() // Aqui ele vai mostrar a função na tela.

function load() {
  let count = 7 // Setamos o valor inicial.
  $(".portfolio__projects").slice(count).hide() // Escondemos todos os elementos maior que o valor inicial.

  $('.portfolio__load').click(function() {
    count += 3 // Somamos a quantidade nova a ser exibida.
      for (let i = 0; i < count; i++) { // Rodamos o loop no valor total.
        $(".portfolio__projects").eq(i).show(800) // Mostras os projetos com um delay.
      }
  }) 
}
load() // Aqui ele vai mostrar a função na tela.

// Animação de escrita.

function typeWrite(element){ // Função que deixa o texto com uma animação de escrita.
  const textoArray = element.innerHTML.split('')
  element.innerHTML = ' '
  textoArray.forEach(function(letter, i){   

    setTimeout(function(){ // Definindo o tempo de duração da animação.
        element.innerHTML += letter
    }, 500 * i)
  })
}

const tittle = document.querySelector('.header__effect') // Onde vai ser aplicada a função.
typeWrite(tittle) // Mostrará na tela.

// Navbar Responsiva.

let button = document.querySelector(".header__button")
let linksContainer = document.querySelector(".header__links-container")
let links = document.querySelector(".header__list")
let burguer = document.querySelector(".header__burger")

button.addEventListener("click", function() {
  const containerHeight = linksContainer.getBoundingClientRect().height // Mostra o height atual dos links.
  const linksHeight = links.getBoundingClientRect().height

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px` // Se for estritamente igual a 0 ele adiciona o height no navbar, fazendo com que ele mostre os links nele.
  } else {
    linksContainer.style.height = 0 // Se não ele recolhe tudo.
  }
}) 

burguer.addEventListener("click", function() {
  if(!burguer.classList.contains("open")) {
    burguer.classList.add("open")
  } else {
    burguer.classList.remove("open")
  }
})

// Navbar Fixa.

let navbar = document.querySelector(".header__navbar")
let btn = document.querySelector(".btn")

window.addEventListener("scroll", function() {
  const scrollHeight = window.pageYOffset // Quando descer a página a navbar fica fixa.
  const navHeight = navbar.getBoundingClientRect().height

  if (scrollHeight > navHeight) {
    navbar.classList.add("header__navbar-fixed")
  } else {
    navbar.classList.remove("header__navbar-fixed")
  }

  if (scrollHeight > 500) { // Se for maior que 500 o botão aparece.
    btn.classList.add('show')
  } else { // Se for menor ele desaparece.
    btn.classList.remove('show')
  }
})

// Animação de conteúdo vindo pela esquerda.
AOS.init() // Chama a função AOS para deixar os item escolhidos com animação. Ela vem dos link que são importados no html da página principal.

// // Animação de carregamento.
const preloader = document.querySelector(".preloader")

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader") // Toda vez que a página for recarregada, essa função irá funcionar.
})