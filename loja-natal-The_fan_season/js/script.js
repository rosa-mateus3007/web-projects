// ==========================================
// PAINEL DE CONTROLE (Chamada das funções)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    efeitoParallax();
    abrirModal();
    mostrarCampoOutroAssunto();
    efeitoNeve();
    contadorRegressivo();
    if (typeof produtos !== 'undefined') {
        mostrarProdutos(produtos);
    }
    inicializarFiltros();
    configurarBotoesComprar();
});

// ==========================================
// 1. Efeito Parallax
// ==========================================
function efeitoParallax() {

    const elementoParallax = document.querySelector('.parallax');
    if (!elementoParallax) return;

    const titulo = document.getElementById('titulo');
    const papai_noel = document.getElementById('papai_noel');
    const lua = document.getElementById('lua');
    const cidade = document.getElementById('cidade');
    let ticking = false;


    function updateParallax() {
        const value = window.scrollY;
        
        titulo.style.transform = `translateY(${value * 2}px)`;
        papai_noel.style.transform = `translateX(${value * (-1.5)}px)`;
        lua.style.transform = `translateY(${value * 0.2}px)`;
        cidade.style.transform = `translateY(${value * 0.1}px)`;
        
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
        <button class="btn-carrinho" data-id="${produto.id}">Adicionar ao carrinho</button>
    </article>`;
}

function mostrarProdutos(lista) {
    const area = document.getElementById("lista-produtos");
    area.innerHTML = lista.map(criarCard).join("");
}

// ==========================================
// 7. FILTRO E DE BUSCA DE PRODUTOS
// ==========================================
function inicializarFiltros() {
    const campoBusca = document.getElementById("busca");
    const seletorCategoria = document.getElementById("categoria");
    const contador = document.getElementById("contador");

    // Se os elementos de busca não existirem na página, para aqui
    if (!campoBusca && !seletorCategoria) return;

    function filtrar() {
        // Pega o texto digitado e a categoria selecionada (se existirem)
        const texto = campoBusca ? campoBusca.value.toLowerCase() : "";
        const categoria = seletorCategoria ? seletorCategoria.value : "todas";

        const resultado = produtos.filter(p => {
            const combinaNome = p.nome.toLowerCase().includes(texto);
            
            // Verifica se a categoria bate (suportando se for string ou array)
            let combinaCategoria = false;
            if (categoria === "todas") {
                combinaCategoria = true;
            } else if (Array.isArray(p.categoria)) {
                combinaCategoria = p.categoria.includes(categoria);
            } else {
                combinaCategoria = p.categoria === categoria;
            }

            return combinaNome && combinaCategoria;
        });

        // Atualiza os produtos na tela
        mostrarProdutos(resultado);

        // Atualiza o texto do contador (se o elemento existir no HTML)
        if (contador) {
            contador.textContent = `Mostrando ${resultado.length} de ${produtos.length} produtos`;
        }
    }

    // Adiciona os escutadores de eventos se os elementos existirem
    if (campoBusca) {
        campoBusca.addEventListener("input", filtrar);
    }
    
    if (seletorCategoria) {
        seletorCategoria.addEventListener("change", filtrar);
    }

    // Executa uma vez no carregamento para mostrar tudo inicialmente
    if (typeof produtos !== 'undefined') {
        filtrar();
    }
}

// ==========================================
// 8. Adicionar ao carrinho 
// ==========================================

// Array que vai armazenar os produtos adicionados ao carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho (recebe o ID do produto)
function adicionarAoCarrinho(idProduto) {
    // Procura o produto na lista global que veio do 'produtos.js'
    const produtoEncontrado = produtos.find(p => p.id === idProduto);
    
    if (!produtoEncontrado) return;

    // Verifica se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === idProduto);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        // Adiciona o produto com quantidade 1
        carrinho.push({ ...produtoEncontrado, quantidade: 1 });
    }

    // Atualiza a exibição do carrinho na tela
    atualizarCarrinho();
    
    console.log("Carrinho atualizado:", carrinho);
}

// Função para atualizar a exibição do carrinho e o valor total
function atualizarCarrinho() {
    const listaCarrinhoHTML = document.getElementById("itens-carrinho");
    const totalCarrinhoHTML = document.getElementById("total-carrinho");
    
    // Se a área do carrinho não existir na página atual, para aqui
    if (!listaCarrinhoHTML) return;

    listaCarrinhoHTML.innerHTML = "";
    let totalGeral = 0;

    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        totalGeral += subtotal;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.nome} (x${item.quantidade})</span>
            <span>${formatarPreco(subtotal)}</span>
            <button onclick="removerDoCarrinho(${item.id})">&times;</button>
        `;
        listaCarrinhoHTML.appendChild(li);
    });

    if (totalCarrinhoHTML) {
        totalCarrinhoHTML.textContent = formatarPreco(totalGeral);
    }
}

// Função para remover um item do carrinho
function removerDoCarrinho(idProduto) {
    carrinho = carrinho.filter(item => item.id !== idProduto);
    atualizarCarrinho();
}
// Função para capturar cliques nos botões de compra da grade
function configurarBotoesComprar() {
    const areaProdutos = document.getElementById("lista-produtos");
    if (!areaProdutos) return;

    areaProdutos.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-carrinho")) {
            // Pega o ID que está guardado no botão
            const idProduto = Number(e.target.getAttribute("data-id"));
            adicionarAoCarrinho(idProduto);
        }
    });
}