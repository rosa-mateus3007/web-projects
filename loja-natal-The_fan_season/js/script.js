// ==========================================
// PAINEL DE CONTROLE (Chamada das funções)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Funções que rodam em todas as páginas sem problemas
    efeitoParallax();
    abrirModal();
    mostrarCampoOutroAssunto();
    efeitoNeve();
    contadorRegressivo();
    if (typeof produtos !== 'undefined') {
        mostrarProdutos(produtos);
    }
});

// ==========================================
// 1. Efeito Parallax
// ==========================================
function efeitoParallax() {

    const elementoParallax = document.querySelector('.parallax');
    if (!elementoParallax) return;

    const titulo = document.getElementById('titulo');
    const arvore = document.getElementById('arvore');
    const estrelas = document.getElementById('estrelas');
    const cidade = document.getElementById('cidade');
    let ticking = false;


    function updateParallax() {
        const value = window.scrollY;
        
        titulo.style.transform = `translateX(${value * 2}px)`;
        arvore.style.transform = `translateY(${value * 0.5}px)`;
        estrelas.style.transform = `translateY(${value * 0.2}px)`;
        cidade.style.transform = `translateY(${value * 0.8}px)`;
        
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

    // Se o botão NÃO existir na página, o código para aqui e vai embora
    if (!btnAbrir) return;  

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

// ==========================================
// 3. Mostrar campo "Outro Assunto" no formulário de contato
// ==========================================
function mostrarCampoOutroAssunto() {
    const selectAssunto = document.getElementById('modalAssunto');
    const campoOutro = document.getElementById('campoOutroAssunto');
    const inputOutro = document.getElementById('modalOutroInput');

    // Se o elemento principal NÃO existir na página atual, o código para aqui sem erro
    if (!selectAssunto) return;

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

// ==========================================
// 4. Efeito de neve caindo na tela
// ==========================================
function efeitoNeve() {
    const quantidadeFlocos = 50;

    for (let i = 0; i < quantidadeFlocos; i++) {
        const floco = document.createElement('div');
        floco.classList.add('floco-neve');

        floco.style.left = Math.random() * window.innerWidth + 'px';

        const tamanho = Math.random() * 5 + 2;
        floco.style.width = tamanho + 'px';
        floco.style.height = tamanho + 'px';

        const duracao = Math.random() * 5 + 3;
        
        floco.style.animationDuration = duracao + 's';
        floco.style.animationDelay = Math.random() * 5 + 's';
        floco.style.opacity = Math.random();

        document.body.appendChild(floco);
    }
}

// ==========================================
// 5. Contador de tempo regressivo para o Natal
// ==========================================
function contadorRegressivo() {

    // Verifica logo no início se o elemento "dias" existe na página atual
    const elementoDias = document.getElementById("dias");

    if (!elementoDias) {
        return; // Se não estiver na página, para a execução aqui sem erro
    }

    function atualizarContador() {
        const agora = new Date();
        const anoAtual = agora.getFullYear();
        
        let natal = new Date(anoAtual, 11, 25);

        if (agora > natal) {
            natal = new Date(anoAtual + 1, 11, 25);
        }

        const diferencaSegundos = (natal - agora) / 1000;

        if (diferencaSegundos <= 0) {
            document.querySelector(".tempo").innerHTML = "<h3>É Natal na The Fan Season! 🎄✨</h3>";
            return;
        }

        // Cálculos matemáticos
        const dias = Math.floor(diferencaSegundos / (3600 * 24));
        const horas = Math.floor((diferencaSegundos / 3600) % 24);
        const minutos = Math.floor((diferencaSegundos / 60) % 60);
        const segundos = Math.floor(diferencaSegundos % 60);

        // Atualiza os elementos no HTML
        document.getElementById("dias").textContent = String(dias).padStart(2, "0");
        document.getElementById("horas").textContent = String(horas).padStart(2, "0");
        document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
        document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
        }

        atualizarContador();
        setInterval(atualizarContador, 1000);

}

// ==========================================
// 6. Gerador dos cards de produtos na página de produtos
// ==========================================

function formatarPreco(valor) {
    return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function criarCard(produto) {
    return `
    <article class="card">
        <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <strong>${formatarPreco(produto.preco)}</strong>
        <button class="btn-comprar" data-id="${produto.id}">Adicionar ao carrinho</button>
    </article>`;
}

function mostrarProdutos(lista) {
    area.innerHTML = lista.map(criarCard).join("");
}

