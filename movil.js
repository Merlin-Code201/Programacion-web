const formulario = document.querySelector('form');
const listaNotas = document.querySelector('#lista-notas');

formulario.addEventListener('submit', agregarNota);

function agregarNota(evento) {
  evento.preventDefault();
  
  const titulo = formulario.titulo.value;
  const contenido = formulario.contenido.value;
  
  const nota = document.createElement('li');
  
  nota.innerHTML = `
    <h2>${titulo}</h2>
    <p>${contenido}</p>
  `;
  
  listaNotas.appendChild(nota);
  
  formulario.reset();
}
