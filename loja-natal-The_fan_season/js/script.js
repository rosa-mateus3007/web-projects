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
    abrirModalCarrinho();
    quiz();
    slideshow();
    musica();
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
// 5. Contador regressivo para o Natal
// ==========================================
function contadorRegressivo() {

    const elementoDias = document.getElementById("dias");

    if (!elementoDias) {
        return; 
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
    if (!area) return;
    area.innerHTML = lista.map(criarCard).join("");
}

// ==========================================
// 7. FILTRO E BUSCA DE PRODUTOS
// ==========================================
function inicializarFiltros() {
    const campoBusca = document.getElementById("busca");
    const seletorCategoria = document.getElementById("categoria");
    const contador = document.getElementById("contador");

    if (!campoBusca && !seletorCategoria) return;

    function filtrar() {
        const texto = campoBusca ? campoBusca.value.toLowerCase() : "";
        const categoria = seletorCategoria ? seletorCategoria.value : "todas";

        const resultado = produtos.filter(p => {
            const combinaNome = p.nome.toLowerCase().includes(texto);
            
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
        mostrarProdutos(resultado);

        if (contador) {
            contador.textContent = `Mostrando ${resultado.length} de ${produtos.length} produtos`;
        }
    }

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
// 8. Carrinho 
// ==========================================

// Array que vai armazenar os produtos adicionados ao carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho (recebe o ID do produto)
function adicionarAoCarrinho(idProduto) {
    const produtoEncontrado = produtos.find(p => p.id === idProduto);
    
    if (!produtoEncontrado) return;

    // Verifica se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === idProduto);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ ...produtoEncontrado, quantidade: 1 });
    }
    atualizarCarrinho();
    
    console.log("Carrinho atualizado:", carrinho);
}

// Função para atualizar a exibição do carrinho e o valor total
 
function atualizarCarrinho() {
    const listaCarrinhoHTML = document.getElementById("itens-carrinho");
    const totalCarrinhoHTML = document.getElementById("total-carrinho");
    const contadorCarrinho = document.getElementById("contador-carrinho");

    // Atualiza a quantidade total de produtos
    if (contadorCarrinho) {
        const quantidadeTotal = carrinho.reduce(
            (total, item) => total + item.quantidade, 0
        );

        contadorCarrinho.textContent = quantidadeTotal;
    }

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

// Função do modal do carrinho
function abrirModalCarrinho() {
    const btnAbrir = document.querySelector('#btnAbrirCarrinho');
    const btnFechar = document.querySelector('#fechar-carrinho');
    const modal = document.querySelector('#modal-carrinho');
    const btnFinalizar = document.querySelector('#btn-finalizar');

    if (!btnAbrir) return; 

    btnAbrir.addEventListener('click', () => {
        modal.classList.add('ativo');
        atualizarCarrinho(); 
    });

    btnFechar.addEventListener('click', () => {
        modal.classList.remove('ativo');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('ativo');
        }
    });

    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            if (carrinho.length === 0) {
                alert("Seu carrinho está vazio!");
                return;
            }
            alert('Compra finalizada com sucesso! A The Fan Season agradece a sua preferência. Feliz Natal!');
            carrinho = [];
            atualizarCarrinho();
            modal.classList.remove('ativo');
        });
    }
}

// ==========================================
// 9. QUIZ
// ==========================================

function quiz() {
    const quizBox = document.getElementById("quiz-box");
    if (!quizBox) return;

    const perguntasQuiz = [
        {
            pergunta: "Qual é o seu estilo favorito de decoração?",
            opcoes: [
                { texto: "Árvore bem decorada e luzes", categoria: "decoracao" },
                { texto: "Roupas temáticas e quentinhas", categoria: "roupas" },
                { texto: "Canecas especiais para a ceia", categoria: "utensilios" },
                { texto: "Pequenos enfeites colecionáveis", categoria: "enfeites" }
            ]
        },
        {
            pergunta: "Como você prefere curtir o clima de inverno?",
            opcoes: [
                { texto: "Deixando a casa aconchegante", categoria: "decoracao" },
                { texto: "Usando um suéter confortável", categoria: "roupas" },
                { texto: "Tomando chocolate quente", categoria: "utensilios" },
                { texto: "Colecionando itens temáticos", categoria: "enfeites" }
            ]
        },
        {
            pergunta: "O que você mais gosta nas festas de fim de ano?",
            opcoes: [
                { texto: "O ambiente enfeitado", categoria: "decoracao" },
                { texto: "O estilo das roupas de frio", categoria: "roupas" },
                { texto: "A mesa posta com carinho", categoria: "utensilios" },
                { texto: "Os detalhes e lembranças", categoria: "enfeites" }
            ]
        }
    ];

    let perguntaAtual = 0;
    let pontos = { decoracao: 0, roupas: 0, utensilios: 0, enfeites: 0 };

    // exibe a pergunta na tela
    function mostrarPergunta() {
        if (perguntaAtual >= perguntasQuiz.length) {
            mostrarResultado();
            return;
        }

        const q = perguntasQuiz[perguntaAtual];
        document.getElementById("questao-titulo").textContent = q.pergunta;
        
        const container = document.getElementById("opcoes-container");
        container.innerHTML = "";

        q.opcoes.forEach(op => {
            const btn = document.createElement("button");
            btn.textContent = op.texto;
            btn.className = "btn-opcao";
            
            btn.onclick = () => {
                pontos[op.categoria]++;
                perguntaAtual++;
                mostrarPergunta();
            };
            
            container.appendChild(btn);
        });
    }

    // Exibe o resultado final
    function mostrarResultado() {
        document.getElementById("pergunta-container").style.display = "none";
        document.getElementById("resultado-container").style.display = "block";

        let melhorCat = Object.keys(pontos).reduce((a, b) => pontos[a] > pontos[b] ? a : b);

        const nomes = {
            decoracao: "Decoração 🎄",
            roupas: "Roupas e Estilo 👕",
            utensilios: "Utensílios ☕",
            enfeites: "Enfeites e Colecionáveis 🎁"
        };

        document.getElementById("resultado-titulo").textContent = nomes[melhorCat];
    }
    mostrarPergunta();
}

// ==========================================
// 10. Slideshow
// ==========================================
function slideshow() {
    const container = document.getElementById("slideshow-destaques");
    if (!container) return; 

    if (typeof produtos === 'undefined') return;

    const destaques = produtos.filter(item => item.destaque === true);
    if (destaques.length === 0) return;

    const botoesHTML = `
        <button id="anterior" class="btn-slide">&#10094;</button>
        <button id="proximo" class="btn-slide">&#10095;</button>
    `;

    let htmlSlides = "";
    
    destaques.forEach((item, index) => {
        const classeAtiva = index === 0 ? "slide ativo" : "slide";
        
        htmlSlides += `
            <div class="${classeAtiva}">
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="info-slide">
                    <h3>${item.nome}</h3>
                    <p>R$ ${item.preco.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    // Insere os slides junto com os botões no container
    container.innerHTML = htmlSlides + botoesHTML;

    const slides = container.querySelectorAll(".slide");
    let atual = 0;

    function mostrarSlide(indice) {
        slides.forEach(s => s.classList.remove("ativo"));
        atual = (indice + slides.length) % slides.length;
        slides[atual].classList.add("ativo");
    }

    document.getElementById("proximo").addEventListener("click", () => mostrarSlide(atual + 1));
    document.getElementById("anterior").addEventListener("click", () => mostrarSlide(atual - 1));

    setInterval(() => mostrarSlide(atual + 1), 5000);
}

// ==========================================
// 11. Música
// ==========================================

function musica() {
    const botaoMusica = document.getElementById("btn-musica");
    
    // Se o botão de música não existir na página atual, o código para aqui
    if (!botaoMusica) return;

    const musica = new Audio("audio/musica-natal.mpeg");
    musica.loop = true; // Repete sem parar
    musica.volume = 0.3; // Volume baixo (de 0 a 1)

    botaoMusica.addEventListener("click", () => {
        if (musica.paused) {
            musica.play();
            botaoMusica.textContent = "Pausar música";
        } else {
            musica.pause();
            botaoMusica.textContent = "Tocar música";
        }
    });
}