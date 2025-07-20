// script.js

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navList = document.querySelector('.nav-list');
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  // Toggle menu burger
  burger.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // Fermer le menu quand on clique sur un lien (mobile)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
      }
    });
  });

  // Gestion du formulaire (simple simulation)
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Honeypot anti-spam
    if (form._gotcha.value !== "") {
      // Spam détecté, on ne fait rien
      return;
    }

    // Simple validation et feedback utilisateur
    formMessage.style.color = '#0a1f44';
    formMessage.textContent = "Merci pour votre message, nous vous répondrons rapidement.";
    formMessage.style.display = 'block';

    form.reset();
  });
});
