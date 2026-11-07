const produtos = [
    {
        id: 1,
        nome: "Snow globe - Lover",
        categoria:  ["Taylor swift", "decoração"],
        preco: 85.90,
        imagem: "img/produtos/Lover-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, que toca a música 'Lover'. Ideal para decoração e presente.",
        destaque: false
    },
    {
        id: 2,
        nome: "Snow globe - Álbum 'The Tortured Poets Department'",
        categoria: ["Taylor swift", "decoração"],
        preco: 95.90,
        imagem: "img/produtos/TTPD-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, que toca a música 'Fortnight'. Ideal para decoração e presente.",
        destaque: false
    },
    {
        id: 3,
        nome: "Snow globe - The Eras Tour",
        categoria: ["Taylor swift", "decoração"],
        preco: 85.90,
        imagem: "img/produtos/The-eras-tour-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, com o tema 'The Eras Tour'. Toca a música 'You're On Your Own, Kid'. Perfeito para fãs de Taylor Swift, adicionando um toque mágico à decoração.",
        destaque: false
    },
    {
        id: 4,
        nome: "Kit de biscoito folklore",
        categoria: ["Taylor swift", "utensílios"],
        preco: 119.99,
        imagem: "img/produtos/Kit-de-biscoito-da-Taylor-Swift.jpeg",
        descricao: "Kit de cozinha, (avental, luva, descansa panela e caixinha com cortadores em formato de cardigan e estrela) personalizado do álbum folklore, ideal para fãs de Taylor Swift que gostam de cozinhar e querem adicionar um toque especial à sua experiência culinária.",
        destaque: false
    },
    {
        id: 5,
        nome: "Olivia Rodrigo – GUTS Christmas Stocking ",
        categoria: ["Olivia Rodrigo", "decoração"],
        preco: 50.80,
        imagem: "img/produtos/GUTS-Olivia-Rodrigo-Christmas-Stocking.jpeg",
        descricao: "Meia natalina inspirada na estética de Olivia Rodrigo, com fundo branco translúcido e detalhes em preto. Ideal para fãs da cantora que desejam adicionar um toque de estilo e personalidade à decoração natalina.",
        destaque: false
    },
    {
        id: 5,
        nome: "Christmas tree Farm",
        categoria: ["Taylor swift", "decoração"],
        preco: 95.90,
        imagem: "img/produtos/Christmas-tree-Farm-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, que toca a música 'Christmas tree Farm'. Para decoração e presente.",
        destaque: false
    },
    {
        id: 6,
        nome: "GUTS christmas stocking",
        categoria: ["Olivia Rodrigo", "decoração"],
        preco: 29.99,
        imagem: "img/produtos/GUTS-Christmas-Stocking.jpeg",
        descricao: "Enfeite natalino inspirado na estética de Olivia Rodrigo, com detalhes em estrelas roxo e vermelho. Ideal para fãs da cantora que desejam adicionar um toque de estilo e personalidade à decoração natalina.",
        destaque: false
    },
    {
        id: 7,
        nome: "All to well - snow globe ",
        categoria: ["Taylor swift", "decoração"],
        preco: 95.90,
        imagem: "img/produtos/All-to-well-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, com o tema 'All to well'. Toca a música 'All to well'. Perfeito para fãs de Taylor Swift, adicionando um toque mágico à decoração.",
        destaque: false
    },
    {
        id: 8,
        nome: "Folklore cabin - snow globe",
        categoria: ["Taylor swift", "decoração"],
        preco: 95.90,
        imagem: "img/produtos/Folklore-cabin-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, com o tema 'Folklore cabin'. Toca a música 'Cardigan'. Perfeito para fãs de Taylor Swift, adicionando um toque mágico à decoração.",
        destaque: false
    },
    {
        id: 9,
        nome: "Kit enfeites natalinos Harry Styles",
        categoria: ["Harry Styles", "decoração"],
        preco: 89.99,
        imagem: "img/produtos/Kit-enfeites-natalinos-do-Harry-Styles.jpeg",
        descricao: "4 enfeites para árvore de natal inspirados na estética de Harry Styles, com detalhes em dourado, verde e vermelho. Ideal para fãs do cantor que desejam adicionar um toque de estilo e personalidade à decoração natalina.",
        destaque: false
    },
    {
        id: 10,
        nome: "Moletom Christmas tree farm",
        categoria: ["Taylor swift", "roupas"],
        preco: 139.99,
        imagem: "img/produtos/Moletom-Christmas-tree-farm.jpeg",
        descricao: "Moletom bordado Taylor swift, Christmas tree farm. Disponível em diversas cores. Ideal para fãs da cantora que desejam adicionar um toque de estilo e personalidade à sua roupa.",
        destaque: false
    },
    {
        id: 11,
        nome: "Moletom Lover",
        categoria: ["Taylor swift", "roupas"],
        preco: 139.99,
        imagem: "img/produtos/Moletom-Lover.jpeg",
        descricao: "Moletom bordado Taylor swift, Lover. Disponível em diversas cores. Ideal para fãs da cantora que desejam adicionar um toque de estilo e personalidade à sua roupa.",
        destaque: false
    },
    {
        id: 12,
        nome: "Enfeite de árvore SOUR",
        categoria: ["Olivia Rodrigo", "decoração"],
        preco: 29.99,
        imagem: "img/produtos/Enfeite-de-arvore-SOUR.jpeg",
        descricao: "Enfeite de árvore de natal good 4u Olívia Rodrigo, SOUR. Perfeito para fãs de Olívia Rodrigo, adicionando um toque de estilo à decoração.",
        destaque: false
    },
    {
        id: 13,
        nome: "Moletom all - American",
        categoria: ["Olivia Rodrigo", "roupas"],
        preco: 139.99,
        imagem: "img/produtos/Moletom-All-American.jpeg",
        descricao: "Moletom Olivia Rodrigo, all American red. Confeccionado em algodão de alta qualidade, proporcionando conforto e estilo. Ideal para fãs da cantora que desejam adicionar um toque de personalidade à sua roupa.",
        destaque: false
    },
    {
        id: 14,
        nome: "A nonsense Christmas stocking",
        categoria: ["Sabrina Carpenter", "decoração"],
        preco: 50.80,
        imagem: "img/produtos/A-nonsense-Christmas-Christmas-Stocking.png",
        descricao: "Meia de natal com design absurdo, perfeita para quem gosta de coisas diferentes e criativas.",
        destaque: false
    },
    {
        id: 15,
        nome: "Caneca Sabrina Carpenter",
        categoria: ["Sabrina Carpenter", "utensílios"],
        preco: 29.99,
        imagem: "img/produtos/Caneca-Sabrina-Carpenter.jpeg",
        descricao: "Caneca de cerâmica da cantora Sabrina Carpenter com logo e frase estampada, perfeita para fãs que desejam adicionar um toque de estilo à sua rotina de bebidas quentes.",
        destaque: false
    },
    {
        id: 16,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 17,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 18,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 19,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 20,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 21,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 22,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00, 
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 23,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 24,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 25,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 26,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 27,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 28, 
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 29,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 30,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 31,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 32,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 33,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 34,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 35,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 36,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 37,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 38,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 39,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 40,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 41,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 42,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 43,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 44,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 45,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 46,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 47,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 48,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 49,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 50,
        nome: "",
        categoria: [" ", " "],
        preco: 0.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
]