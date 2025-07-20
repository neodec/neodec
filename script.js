const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Gestion formulaire - pour rester sur la page sans rechargement
const form = document.querySelector('#contact form');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });
    if (response.ok) {
      formMessage.textContent = "Merci pour votre message, nous vous répondrons rapidement.";
      form.reset();
    } else {
      formMessage.textContent = "Erreur lors de l'envoi. Veuillez réessayer.";
    }
  } catch (error) {
    formMessage.textContent = "Erreur réseau. Veuillez réessayer.";
  }
});
