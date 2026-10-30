const btnAbrir = document.querySelector('#btnAbrirModal');
const btnFechar = document.querySelector('#btnFecharModal');
const modal = document.querySelector('#modalContato');
const formContato = document.querySelector('#formContatoModal');

btnAbrir.addEventListener('click', () => {
  modal.classList.add('ativo');
});

btnFechar.addEventListener('click', () => {
  modal.classList.remove('ativo');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('ativo');
  }
});

formContato.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  formContato.reset();
  modal.classList.remove('ativo'); 
});