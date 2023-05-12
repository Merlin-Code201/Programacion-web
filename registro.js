const form = document.getElementById('signup-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	message.innerHTML = 'Formulario completo';
	form.reset();
});
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TODO: Validar las credenciales contra una base de datos o sistema de autenticación

  if (email === 'test@test.com' && password === '1234') {
    const message = document.getElementById('message');
    message.innerHTML = `¡Bienvenido, ${email}!`;
  } else {
    alert('Credenciales inválidas');
  }
});
