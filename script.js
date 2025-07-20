// Menu burger
const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Formulaire AJAX avec Formspree
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formMessage.textContent = 'Merci pour votre message ! Nous vous répondrons rapidement.';
      formMessage.style.color = 'white';
      form.reset();
    } else {
      formMessage.textContent = 'Une erreur est survenue, veuillez réessayer plus tard.';
      formMessage.style.color = 'red';
    }
  } catch (error) {
    formMessage.textContent = 'Une erreur réseau est survenue, veuillez vérifier votre connexion.';
    formMessage.style.color = 'red';
  }
});
