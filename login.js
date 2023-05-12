const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // TODO: Validar las credenciales contra una base de datos o sistema de autenticación

  if (username === 'admin' && password === '1234') {
    message.innerHTML = `¡Bienvenido, ${username}!`;
  } else {
    message.innerHTML = 'Nombre de usuario o contraseña incorrectos';
  }
});
