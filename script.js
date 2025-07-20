const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('formMessage');

burger.addEventListener('click', () => {
  navList.classList.toggle('open');
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      formMessage.style.color = 'green';
      formMessage.textContent = 'Merci pour votre message, nous vous répondrons bientôt.';
      form.reset();
    } else {
      throw new Error('Erreur lors de l’envoi du formulaire.');
    }
  } catch (error) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Une erreur est survenue. Veuillez réessayer plus tard.';
  }
});
