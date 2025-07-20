// script.js

// Menu burger
const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Message de confirmation formulaire
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = "Merci pour votre message, nous vous répondrons rapidement.";
  form.reset();
});
