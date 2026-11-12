const produtos = [
    {
        id: 1,
        nome: "Snow globe - Lover",
        categoria:  ["Taylor swift", "decoracao"],
        preco: 85.90,
        imagem: "img/produtos/lover-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, que toca a música 'Lover'. Ideal para decoração e presente.",
        destaque: false
    },
    {
        id: 2,
        nome: "Snow globe - Álbum 'The Tortured Poets Department'",
        categoria: ["Taylor swift", "decoracao"],
        preco: 95.90,
        imagem: "img/produtos/ttpd-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, que toca a música 'Fortnight'. Ideal para decoração e presente.",
        destaque: true
    },
    {
        id: 3,
        nome: "Snow globe - The Eras Tour",
        categoria: ["Taylor swift", "decoracao"],
        preco: 85.90,
        imagem: "img/produtos/the-eras-tour-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, com o tema 'The Eras Tour'. Toca a música 'You're On Your Own, Kid'. Perfeito para fãs de Taylor Swift, adicionando um toque mágico à decoração.",
        destaque: true
    },
    {
        id: 4,
        nome: "Kit de biscoito folklore",
        categoria: ["Taylor swift", "utensilios"],
        preco: 119.99,
        imagem: "img/produtos/kit-de-biscoito-da-taylor-swift.jpeg",
        descricao: "Kit de cozinha, (avental, luva, descansa panela e caixinha com cortadores em formato de cardigan e estrela) personalizado do álbum folklore, ideal para fãs de Taylor Swift que gostam de cozinhar e querem adicionar um toque especial à sua experiência culinária.",
        destaque: true
    },
    
    {
        id: 5,
        nome: "Christmas tree Farm",
        categoria: ["Taylor swift", "decoracao"],
        preco: 95.90,
        imagem: "img/produtos/christmas-tree-farm-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, que toca a música 'Christmas tree Farm'. Para decoração e presente.",
        destaque: false
    },
    {
        id: 6,
        nome: "GUTS christmas stocking",
        categoria: ["Olivia Rodrigo", "enfeite"],
        preco: 50.80,
        imagem: "img/produtos/guts-christmas-stocking.jpeg",
        descricao: "Enfeite natalino inspirado na estética de Olivia Rodrigo, com detalhes em estrelas roxo e vermelho. Ideal para fãs da cantora que desejam adicionar um toque de estilo e personalidade à decoração natalina.",
        destaque: false
    },
    {
        id: 7,
        nome: "All to well - snow globe ",
        categoria: ["Taylor swift", "decoracao"],
        preco: 95.90,
        imagem: "img/produtos/all-to-well-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, com o tema 'All to well'. Toca a música 'All to well'. Perfeito para fãs de Taylor Swift, adicionando um toque mágico à decoração.",
        destaque: false
    },
    {
        id: 8,
        nome: "Folklore cabin - snow globe",
        categoria: ["Taylor swift", "decoracao"],
        preco: 95.90,
        imagem: "img/produtos/folklore-cabin-snow-globe.jpeg",
        descricao: "Caixinha de música em formato de globo de neve, com o tema 'Folklore cabin'. Toca a música 'Cardigan'. Perfeito para fãs de Taylor Swift, adicionando um toque mágico à decoração.",
        destaque: false
    },
    {
        id: 9,
        nome: "Kit enfeites natalinos Harry Styles",
        categoria: ["Harry Styles", "enfeite"],
        preco: 89.99,
        imagem: "img/produtos/kit-enfeites-natalinos-do-harry-styles.jpeg",
        descricao: "4 enfeites para árvore de natal inspirados na estética de Harry Styles, com detalhes em dourado, verde e vermelho. Ideal para fãs do cantor que desejam adicionar um toque de estilo e personalidade à decoração natalina.",
        destaque: true
    },
    {
        id: 10,
        nome: "Moletom Christmas tree farm",
        categoria: ["Taylor swift", "roupas"],
        preco: 139.99,
        imagem: "img/produtos/moletom-christmas-tree-farm.jpeg",
        descricao: "Moletom bordado Taylor swift, Christmas tree farm. Disponível em diversas cores. Ideal para fãs da cantora que desejam adicionar um toque de estilo e personalidade à sua roupa.",
        destaque: false
    },
    {
        id: 11,
        nome: "Moletom Lover",
        categoria: ["Taylor swift", "roupas"],
        preco: 139.99,
        imagem: "img/produtos/moletom-lover.jpeg",
        descricao: "Moletom bordado Taylor swift, Lover. Disponível em diversas cores. Ideal para fãs da cantora que desejam adicionar um toque de estilo e personalidade à sua roupa.",
        destaque: true
    },
    {
        id: 12,
        nome: "Enfeite de árvore SOUR",
        categoria: ["Olivia Rodrigo", "enfeite"],
        preco: 29.99,
        imagem: "img/produtos/enfeite-de-arvore-SOUR.jpeg",
        descricao: "Enfeite de árvore de natal good 4u Olívia Rodrigo, SOUR. Perfeito para fãs de Olívia Rodrigo, adicionando um toque de estilo à decoração.",
        destaque: false
    },
    {
        id: 13,
        nome: "Moletom all - American",
        categoria: ["Olivia Rodrigo", "roupas"],
        preco: 139.99,
        imagem: "img/produtos/moletom-all-american.jpeg",
        descricao: "Moletom Olivia Rodrigo, all American red. Confeccionado em algodão de alta qualidade, proporcionando conforto e estilo. Ideal para fãs da cantora que desejam adicionar um toque de personalidade à sua roupa.",
        destaque: true
    },
    {
        id: 14,
        nome: "A nonsense Christmas stocking",
        categoria: ["Sabrina Carpenter", "enfeite"],
        preco: 50.80,
        imagem: "img/produtos/a-nonsense-christmas-christmas-stocking.png",
        descricao: "Meia de natal com design absurdo, perfeita para quem gosta de coisas diferentes e criativas.",
        destaque: false
    },
    {
        id: 15,
        nome: "Caneca Sabrina Carpenter",
        categoria: ["Sabrina Carpenter", "utensilios"],
        preco: 29.99,
        imagem: "img/produtos/caneca-sabrina-carpenter.jpeg",
        descricao: "Caneca de cerâmica da cantora Sabrina Carpenter com logo e frase estampada, perfeita para fãs que desejam adicionar um toque de estilo à sua rotina de bebidas quentes.",
        destaque: false
    },
    {
        id: 16,
        nome: "Olivia Rodrigo – GUTS Christmas Stocking ",
        categoria: ["Olivia Rodrigo", "decoracao"],
        preco: 50.80,
        imagem: "img/produtos/guts-olivia-rodrigo-christmas-stocking.jpeg",
        descricao: "Meia natalina inspirada na estética de Olivia Rodrigo, com fundo branco translúcido e detalhes em preto. Ideal para fãs da cantora que desejam adicionar um toque de estilo e personalidade à decoração natalina.",
        destaque: false
    },
    {
        id: 17,
        nome: "A nonsense Christmas - snow glob",
        categoria: ["Sabrina Carpenter", "decoracao"],
        preco: 85.90,
        imagem: "img/produtos/",
        descricao: "globo de neve decorativo inspirado em 'A nonsense Christmas' Sabrina Carpenter.",
        destaque: false
    },
    {
        id: 18,
        nome: "Harry Styles Christmas stocking ",
        categoria: ["Harry Styles", "decoracao"],
        preco: 50.80,
        imagem: "img/produtos/",
        descricao: "Meia Natalina inspirado no Harry Styles com tecido de pelúcia, vermelho e branco.",
        destaque: false
    },
    {
        id: 19,
        nome: "Harry styles - snow globe ",
        categoria: ["Harry Styles", "decoracao"],
        preco: 89.90,
        imagem: "img/produtos/",
        descricao: "Globo de neve decorativo inspirado no Harry styles, para quem quer dar aquele tom de personalidade ao seu natal.",
        destaque: false
    },
    {
        id: 20,
        nome: "GUTS - snow globe ",
        categoria: ["Olivia Rodrigo", "decoracao"],
        preco: 89.90,
        imagem: "img/produtos/",
        descricao: "Globo de neve decorativo, inspirado no álbum GUTS da Olívia Rodrigo.",
        destaque: false
    },
    {
        id: 21,
        nome: "Kit de enfeite natalino - short 'n sweet.",
        categoria: ["Sabrina Carpenter", "enfeite"],
        preco: 64.80,
        imagem: "img/produtos/",
        descricao: "Kit de bolinhas para árvore de natal personalizada short 'n sweet Sabrina carpenter (6 unidades).",
        destaque: false
    },
    {
        id: 22,
        nome: "Lover's house - calendário do advento ",
        categoria: ["Taylor Swift", "decoracao"],
        preco: 159.90, 
        imagem: "img/produtos/",
        descricao: "Calendário do advento personalizado do álbum lover da Taylor Swift.",
        destaque: false
    },
    {
        id: 23,
        nome: "Kit de enfeite natalino - sour",
        categoria: ["Olivia Rodrigo", "enfeite"],
        preco: 64.80,
        imagem: "img/produtos/",
        descricao: "Kit de bolinhas para árvore de natal personalizada Sour da Olívia Rodrigo ( 6 unidades).",
        destaque: false
    },
    {
        id: 24,
        nome: "Expresso - calendário do advento",
        categoria: ["Sabrina Carpenter", "decoracao"],
        preco: 225.00,
        imagem: "img/produtos/",
        descricao: "Calendário do advento personalizado Sabrina carpenter com 24 dias.",
        destaque: false
    },
    {
        id: 25,
        nome: "Sour - calendário do advento",
        categoria: ["Olivia Rodrigo", "decoracao"],
        preco: 240.00,
        imagem: "img/produtos/",
        descricao: "Calendário do advento em formato de borboleta personalizado olivia Rodrigo com 24 dias.",
        destaque: false
    },
    {
        id: 26,
        nome: "Harry Sytles Christmas - calendário do advento",
        categoria: ["Harry Styles", "decoracao"],
        preco: 225.00,
        imagem: "img/produtos/",
        descricao: "Calendário do advento personalizado Harry Styles 24 dias.",
        destaque: false
    },
    {
        id: 27,
        nome: "Bola de Natal Personalizada Harry Styles",
        categoria: ["Harry Styles", "enfeite"],
        preco: 45.00,
        imagem: "img/produtos/",
        descricao: "Perfeita para ser colocada no topo ou pendurada nos galhos da sua árvore de Natal, esta bola de vidro com o Harry Styles traz todo o charme e o brilho que sua decoração natalina precisa.",
        destaque: false
    },
    {
        id: 28, 
        nome: "Meia de natal da Sabrina Carpenter",
        categoria: ["Sabrina Carpenter", "enfeite"],
        preco: 59.90,
        imagem: "img/produtos/",
        descricao: "Perfeita para pendurar na lareira ou na cabeceira da cama na noite de Natal, esta meia fofinha da Sabrina Carpenter cheia de brilho é ideal para receber os presentes do Papai Noel.",
        destaque: false
    },
    {
        id: 29,
        nome: "Lightstick Estrela Olivia Rodrigo",
        categoria: ["Olivia Rodrigo", "decoracao"],
        preco: 120.00,
        imagem: "img/produtos/",
        descricao: "Perfeito para iluminar as comemorações e trazer a energia de um show para a sua noite de Natal, este lightstick em formato de estrela da Olivia Rodrigo vai dar um toque super divertido à sua árvore e às festas.",
        destaque: false
    },
    {
        id: 30,
        nome: "Bola de Natal The Eras Tour",
        categoria: ["Taylor Swift", "enfeite"],
        preco: 45.00,
        imagem: "img/produtos/",
        descricao: "Esfera de vidro transparente com a inscrição The Eras Tour e recheada com pulseiras da amizade coloridas. Perfeita para dar um toque especial à árvore de Natal.",
        destaque: false
    },
    {
        id: 31,
        nome: "Bola de Natal Fine Line Harry Styles",
        categoria: ["Harry Styles", "enfeite"],
        preco: 45.00,
        imagem: "img/produtos/",
        descricao: "Esfera natalina prateada com glitter, gravação do nome do cantor e do álbum Fine Line com coração em vermelho. Perfeita para pendurar na sua árvore de Natal.",
        destaque: false
    },
    {
        id: 32,
        nome: "Kit Enfeites Espresso & Candy Cane Sabrina Carpenter",
        categoria: ["Sabrina Carpenter", "enfeite"],
        preco: 59.90,
        imagem: "img/produtos/",
        descricao: "Par de enfeites natalinos de feltro e miçangas em formato de taça de drink (Espresso) e bengala doce do álbum Short n' Sweet. Perfeitos para pendurar e decorar a árvore de Natal.",
        destaque: true
    },
    {
        id: 33,
        nome: "Enfeite Megafone GUTS Olivia Rodrigo",
        categoria: ["Olivia Rodrigo", "enfeite"],
        preco: 42.00,
        imagem: "img/produtos/",
        descricao: "Miniatura de megafone vermelho em resina com o logotipo borboleta do álbum GUTS da Olivia Rodrigo. Perfeito para pendurar nos galhos da sua árvore de Natal.",
        destaque: false
    },
    {
        id: 34,
        nome: "Lightstick Coração Sabrina Carpenter",
        categoria: ["Sabrina Carpenter", "decoracao"],
        preco: 110.00,
        imagem: "img/produtos/",
        descricao: "Bastão luminoso acrílico em formato de coração com glitter, fita de cetim e assinatura da Sabrina Carpenter. Perfeito para iluminar a decoração da sua casa no Natal.",
        destaque: false
    },
    {
        id: 35,
        nome: "Enfeite Camisa Fine Line Harry Styles",
        categoria: ["Harry Styles", "enfeite"],
        preco: 48.00,
        imagem: "img/produtos/",
        descricao: "Enfeite metálico dourado em formato de camisa estampada com corações do álbum Fine Line do Harry Styles, com cordão dourado. Perfeito para pendurar na árvore de Natal.",
        destaque: false
    },
    {
        id: 36,
        nome: "Placa Natalina Christmas Tree Farm Taylor Swift",
        categoria: ["Taylor Swift", "enfeite"],
        preco: 55.00,
        imagem: "img/produtos/",
        descricao: "Placa retangular em tom neutro com estampa natalina em ponto cruz e título da música natalina da Taylor Swift. Perfeita para pendurar e decorar a casa no Natal.",
        destaque: false
    },
    {
        id: 37,
        nome: "Bola de Natal Have Yourself a Harry Styles Christmas",
        categoria: ["Harry Styles", "enfeite"],
        preco: 45.00,
        imagem: "img/produtos/",
        descricao: "Esfera redonda com ilustração do Harry Styles usando casaco colorido segurando luzes, fita vermelha e frase temática. Perfeita para enfeitar a árvore de Natal.",
        destaque: false
    },
    {
        id: 38,
        nome: "Enfeite Cardigan Folklore Taylor Swift",
        categoria: ["Taylor Swift", "enfeite"],
        preco: 52.00,
        imagem: "img/produtos/",
        descricao: "Miniatura em resina do icônico cardigã creme com detalhes de estrelas e o selo do álbum Folklore da Taylor Swift. Uma peça delicada e cheia de afeto para pendurar e enfeitar o ambiente.",
        destaque: true
    },
    {
        id: 39,
        nome: "Broche de Natal The Eras Tour Taylor Swift",
        categoria: ["Taylor Swift", "enfeite"],
        preco: 45.00,
        imagem: "img/produtos/",
        descricao: "Broche de cerâmica branca com fita de veludo rosa, ilustração da turnê e frase 'Merry Swiftmas'. Perfeito para prender na roupa ou decorar a casa no Natal.",
        destaque: false
    },
    {
        id: 40,
        nome: "Kit Cachecol Christmas Tree Farm Taylor Swift",
        categoria: ["Taylor Swift", "roupas"],
        preco: 69.90,
        imagem: "img/produtos/",
        descricao: "Par de cachecóis em tecido nas cores vermelha e off-white com barra rendada e estampa inspirada na música natalina da Taylor Swift.",
        destaque: false
    },
    {
        id: 41,
        nome: "Kit Bolas Decorativas Harry Styles",
        categoria: ["Harry Styles", "enfeite"],
        preco: 120.00,
        imagem: "img/produtos/",
        descricao: "Conjunto com esferas brilhantes coloridas trazendo títulos de sucessos como Fine Line, Watermelon Sugar e Walls. Uma ótima escolha para deixar a sua árvore cheia de estilo e personalidade.",
        destaque: false
    },
    {
        id: 42,
        nome: "Vela Aromática Maçã e Canela Sabrina Carpenter",
        categoria: ["Sabrina Carpenter", "decoracao"],
        preco: 89.90,
        imagem: "img/produtos/",
        descricao: "Pote em vidro com cera vegetal e rótulo divertido da cantora, exalando um delicioso perfume acolhedor. Aquece o ambiente e cria um clima aconchegante para reunir quem você ama nas festas.",
        destaque: false
    },
    {
        id: 43,
        nome: "Kit Bolas de Neve Harry's House & Love On Tour Harry Styles",
        categoria: ["Harry Styles", "enfeite"],
        preco: 85.00,
        imagem: "img/produtos/",
        descricao: "Dupla de enfeites transparentes com neve artificial interior, estampando a capa do álbum Harry's House e arte da turnê Love On Tour. Trazem um visual mágico e delicado para compor a sua decoração.",
        destaque: false
    },
    {
        id: 44,
        nome: "Coleção Bolas Decorativas Eras Taylor Swift",
        categoria: ["Taylor Swift", "enfeite"],
        preco: 100.00,
        imagem: "img/produtos/",
        descricao: "Kit completo de esferas com acabamento em glitter referente a cada era da artista, de Fearless a Evermore. Dão um toque vibrante e cheio de significado aos galhos da sua árvore.",
        destaque: false
    },
    {
        id: 45,
        nome: "Caneca Decorativa GUTS Olivia Rodrigo",
        categoria: ["Olivia Rodrigo", "decoracao"],
        preco: 65.00,
        imagem: "img/produtos/",
        descricao: " Caneca de porcelana branca com a frase 'spill ur guts' em roxo. Excelente opção para compor a decoração de Natal e trazer charme à mesa.",
        destaque: false
    },
    {
        id: 46,
        nome: "Ponteira Estrela Taylor Swift",
        categoria: ["Taylor Swift", "enfeite"],
        preco: 98.00,
        imagem: "img/produtos/",
        descricao: "",
        destaque: false
    },
    {
        id: 47,
        nome: "Moletom Holiday Harry Styles",
        categoria: ["Harry Styles", "roupas"],
        preco: 149.90,
        imagem: "img/produtos/",
        descricao: "Moletom bege macio com estampa festiva e o artista caracterizado em clima comemorativo. Perfeito para compor um look confortável e descontraído durante os encontros natalinos.",
        destaque: true
    },
    {
        id: 48,
        nome: "Enfeite Relógio de Bolso Midnights Taylor Swift",
        categoria: ["Taylor Swift", "enfeite"],
        preco: 48.00,
        imagem: "img/produtos/",
        descricao: "Mini relógio de bolso vintage em tom envelhecido com fita de cetim roxa personalizada do álbum Midnights. Feito para pendurar nos galhos e transformar a sua árvore de Natal.",
        destaque: false
    },
    {
        id: 49,
        nome: "Caneca Personalizada Harry Styles",
        categoria: ["Harry Styles", "utensilios"],
        preco: 60.00,
        imagem: "img/produtos/",
        descricao: "Caneca de cerâmica branca com estampa colorida do cantor segurando pisca-pisca e a frase temática customizável. Um item indispensável para aquecer suas bebidas favoritas nas noites frias de dezembro.",
        destaque: true
    },
    {
        id: 50,
        nome: "Vela Aromática Amber & Vanilla Taylor Swift",
        categoria: ["Taylor Swift", "decoracao"],
        preco: 89.90,
        imagem: "img/produtos/",
        descricao: "Pote em vidro lapidado âmbar com tampa gravada com as iniciais TS e pavio de madeira, exalando aroma de âmbar e baunilha. Pensada especialmente para iluminar e perfumar a sua ceia de Natal.",
        destaque: false
    },
]