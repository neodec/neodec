document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navList = document.querySelector('.nav-list');
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  // Toggle mobile menu
  burger.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // Form submission handler (basic)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Veuillez remplir tous les champs.";
      formMessage.style.color = "red";
      return;
    }

    // Email format simple check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = "Veuillez entrer un email valide.";
      formMessage.style.color = "red";
      return;
    }

    // Simulate sending
    formMessage.textContent = "Envoi en cours...";
    formMessage.style.color = "#0a1f44";

    setTimeout(() => {
      formMessage.textContent = "Merci pour votre message, nous vous répondrons bientôt.";
      form.reset();
    }, 1500);
  });
});
