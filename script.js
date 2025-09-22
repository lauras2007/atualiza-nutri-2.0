// script.js

const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu-navegacao');

botaoMenu.addEventListener('click', () => {
  const aberto = botaoMenu.getAttribute('aria-expanded') === 'true';
  botaoMenu.setAttribute('aria-expanded', String(!aberto));
  menu.hidden = aberto;
});
