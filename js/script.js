import { projects } from './projects.js'

// Data.
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear() 

// Projetos.
let projectsPortfolio = document.querySelector(".portfolio__infos")

function showProjects() {
  for (let i = 0; i < projects.length; i++) { 
    projectsPortfolio.innerHTML += `
    <div class='portfolio__content'>
      <a href=${projects[i].link} target=_blank>
        <img class='portfolio__img' src='${projects[i].image}'>
      </a>
      <div class='portfolio__container'>
        <h2 class='portfolio__h2'>${projects[i].name}</h2>
        <p class='portfolio__text'>${projects[i].text}</p>
      </div>
    </div>
  `
  }
}

showProjects()

// Animação de escrita.

function typeWrite(element){ 
  const textoArray = element.innerHTML.split('')
  element.innerHTML = ' '
  textoArray.forEach(function(letter, i){   

    setTimeout(function(){ 
      element.innerHTML += letter
    }, 500 * i)
  })
}

const tittle = document.querySelector('.header__effect') 
typeWrite(tittle) 

// Navbar Responsiva.

let button = document.querySelector(".header__button")
let linksContainer = document.querySelector(".header__links-container")
let links = document.querySelector(".header__list")
let burguer = document.querySelector(".header__burger")

button.addEventListener("click", function() {
  const containerHeight = linksContainer.getBoundingClientRect().height 
  const linksHeight = links.getBoundingClientRect().height

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px` 
  } else {
    linksContainer.style.height = 0 
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
  const scrollHeight = window.pageYOffset 
  const navHeight = navbar.getBoundingClientRect().height

  if (scrollHeight > navHeight) {
    navbar.classList.add("header__navbar-fixed")
  } else {
    navbar.classList.remove("header__navbar-fixed")
  }

  if (scrollHeight > 500) { 
    btn.classList.add('show')
  } else { 
    btn.classList.remove('show')
  }
})

// Animação de conteúdo vindo pela esquerda.
AOS.init()

// Animação de carregamento.
const preloader = document.querySelector(".preloader")

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader")
})