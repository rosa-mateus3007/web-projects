// ==========================================
// PAINEL DE CONTROLE (Chamada das funções)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    efeitoParalax();
    abrirModal();
});

// ==========================================
// 1. Efeito Paralax
// ==========================================
function efeitoParalax() {
    const titulo = document.getElementById('titulo');
    const cidade = document.getElementById('cidade');
    const arvore = document.getElementById('arvore');
    const estrelas = document.getElementById('estrelas');
    let ticking = false;

    function updateParallax() {
        const value = window.scrollY;
        
        titulo.style.transform = `translateX(${value * 2}px)`;
        cidade.style.transform = `translateY(${value * 0.8}px)`;
        arvore.style.transform = `translateY(${value * 0.5}px)`;
        estrelas.style.transform = `translateY(${value * 0.2}px)`;
        
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// ==========================================
// 2. Efeito de abrir e fechar o modal do formulário de contato
// ==========================================
function abrirModal() {
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
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato. The Fan Season agradece a sua mensagem. Feliz Natal!');
    formContato.reset();
    modal.classList.remove('ativo'); 
    });
}

function mostrarCampoOutroAssunto() {
    const selectAssunto = document.getElementById('modalAssunto');
    const campoOutro = document.getElementById('campoOutroAssunto');
    const inputOutro = document.getElementById('modalOutroInput');

    selectAssunto.addEventListener('change', function() {
        if (this.value === 'outro') {
            campoOutro.style.display = 'block';
            inputOutro.setAttribute('required', 'true'); 
        } 
        else {
            campoOutro.style.display = 'none'; 
            inputOutro.removeAttribute('required'); 
            inputOutro.value = ''; 
        }
    });
}
