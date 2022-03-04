let projectsPortfolio = document.querySelector(".portfolio__projects") // Aqui que vai ser colocado os itens dessa função abaixo.

function showProjects() {
    for (let i = 0; i < projects.length; i++) { // Aqui ele pega todas as informações do array criado e mostra na tela.
        projectsPortfolio.innerHTML += "<div class='portfolio__projects'><a class='portfolio__link' href='" + projects[i].link +"'target=_blank''>" +  "<img class='portfolio__img' src='" + projects[i].image + "'>" + "<p class='portfolio__text'>" + projects[i].text + "</p>" + "</div>"
    }
}

showProjects() // Aqui ele vai mostrar a função na tela.

function load() {
  
  let count = 7 //Setamos o valor inicial.
  $(".portfolio__projects").slice(count).hide() //escondemos todos os elementos maior que o valor inicial.

  $('.portfolio__load').click(function() {
      //Somamos a quantidade nova a ser exibida.
      count += 3

      //Rodamos o loop no valor total.
      for (let i = 0; i < count; i++) {
          
          $(".portfolio__projects").eq(i).show(800) // Mostras os projetos com um delay.
      }
  }) 
}

load() // Aqui ele vai mostrar a função na tela.


let button = $('.btn') // Definindo da onde vem o botão.

$(window).scroll(function() {
  if ($(window).scrollTop() > 450) {  // Se for maior que 450 o botão irá aparecer na página. 
    button.addClass('show') // Aqui o botão aparece na página.
  } else {
    button.removeClass('show') // Botão desaparece.
  }
})

button.on('click', function(e) { // Quando clicar no botão irá fazer uma animação de clique.
  e.preventDefault(); 
  $('html, body').animate({scrollTop: 0}, '300') // Faz o botão subir a página toda e deixa ele com animação.
})


function typeWrite(element){ // Função que deixa o texto com uma animação de escrita.
  const textoArray = element.innerHTML.split('');
  element.innerHTML = ' ';
  textoArray.forEach(function(letter, i){   

    setTimeout(function(){ // Definindo o tempo de duração da animação.
        element.innerHTML += letter
    }, 130 * i)
  })
}

const tittle = document.querySelector('.main__effect'); // Onde vai ser aplicada a função.
typeWrite(tittle); // Mostrará na tela.


function myFunction() { // Função que faz a navbar funcionar o botão na responsividade.
  var x = document.getElementById("active")
  if (x.className === "header__navbar") {
    x.className += " header__navbar__responsive"
  } else {
    x.className = "header__navbar"
  }
}