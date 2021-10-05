let opcionais_porcoes = [
    ['Queijo', 5.00],
    ['Bacon', 5],
    ['Calabresa', 5],
    ['Cheddar', 5]
]
var products_list = {
    LANCHES: [
        {
            Image: '',
            Name: 'HAMBURGUER ARTESANAL',
            Ingredientes: ['Pão Artesanal', 'Hamburguer Bovino Artesanal', 'Queijo mussarela e prato', 'Alface', 'Tomate', 'Molho'],
            Options: {
                Pão: ['Brioche', 'Australiano', 'Tradicional'], 
                Opcionais: [
                    ['Queijo', 3.00], 
                    ['Calabresa', 3.00],
                    ['Bacon', 3.00],
                    ['Pepino', 3.00],
                    ['Cebola roxa levemente caramelizada', 3.00],
                    ['Cebola Caramelizada', 3.00],
                    ['Cheddar', 3.00],
                    ['Hambrguer', 8.00]
                ]
            },
            Price: 20.00
        }
    ],
    PORÇÕES: [
        {
            Image: '',
            Name: 'Batata Frita',
            Details:'500g',
            Options: opcionais_porcoes,
            Price: 20
        },
        {
            Image: '',
            Name: 'Polenta Frita',
            Details:'400g',
            Options: opcionais_porcoes,
            Price: 18
        },
        {
            Image: '',
            Name: 'Bolinho de Mandioca',
            Details:'400g',
            Options: opcionais_porcoes,
            Price: 18
        },
        {
            Image: '',
            Name: 'Frango a Passarinho',
            Details:'500g',
            Options: opcionais_porcoes,
            Price: 20
        },
        {
            Image: '',
            Name: 'Filé de Tilapia',
            Details:'400g',
            Options: opcionais_porcoes,
            Price: 40
        },
        {
            Image: '',
            Name: 'Filé de Pescada',
            Details:'400g',
            Options: opcionais_porcoes,
            Price: 40
        },
        {
            Image: '',
            Name: 'Costelinha de Tambaqui',
            Details:'400g',
            Options: opcionais_porcoes,
            Price: 40
        },
        {
            Image: '',
            Name: 'Camarão Crocante',
            Details:'400g',
            Options: opcionais_porcoes,
            Price: 40
        },
        {
            Image: '',
            Name: 'Camarão a Milanesa',
            Details:'400g',
            Options: opcionais_porcoes,
            Price: 40
        },
        {
            Image: '',
            Name: 'Bolinho de Siri',
            Details:'400g',
            Options: opcionais_porcoes,
            Price: 40
        },
        
    ],
    CERVEJAS: [
        {
            Image: '',
            Name: 'Brahma - 600ml',
            Price: 12
        },
        {
            Image: '',
            Name: 'Brahma Duplo Malte - 600ml',
            Price: 12
        },
        {
            Image: '',
            Name: 'Amstel - 600ml',
            Price: 12
        },
        {
            Image: '',
            Name: 'Eisenbach - 600ml',
            Price: 12
        },
        {
            Image: '',
            Name: 'Kaiser - 600ml',
            Price: 10
        },
        {
            Image: '',
            Name: 'Brahma - 600ml',
            Price: 10
        },
        {
            Image: '',
            Name: 'Haineken - 600ml',
            Price: 16
        },
        {
            Image: '',
            Name: 'Amstel - lata',
            Price: 6
        },
        {
            Image: '',
            Name: 'Brahma Duplo Malte - lata',
            Price: 6
        },
        {
            Image: '',
            Name: 'Brahma Malzbier - lata',
            Price: 6
        },
        {
            Image: '',
            Name: 'Budweiser - lata',
            Price: 6
        },
        {
            Image: '',
            Name: 'Brahma - lata',
            Price: 5
        },
        {
            Image: '',
            Name: 'Schin - lata',
            Price: 5
        }
    ],
    DOSES: [
        {
            Image: '',
            Name: 'Cachaça',
            Price: 5
        },
        {
            Image: '',
            Name: 'Vodka',
            Price: 5
        },
        {
            Image: '',
            Name: 'Catuaba',
            Price: 5
        },
        {
            Image: '',
            Name: 'Conhaque',
            Price: 5
        },
        {
            Image: '',
            Name: 'Gin',
            Price: 5
        },
        {
            Image: '',
            Name: 'Passport Scotch',
            Price: 8
        },
        {
            Image: '',
            Name: 'Jack Deniels',
            Price: 15
        },
        {
            Image: '',
            Name: 'Tequila José Cuervo',
            Price: 15
        },
        {
            Image: '',
            Name: 'Jagermeister',
            Price: 18
        },
        {
            Image: '',
            Name: 'Licor de Mirtilo',
            Price: 20
        }
    ],
    DRINKS: [
        {
            Image: '',
            Name: 'Caipirinha',
            Quantidade: '400ml',
            Options: {
                Sabor: ['Abacaxi', 'Limão', 'Maracujá', 'Morango'],
                Alcool: ['Vodka Smirnoff', 'Cachaça', 'Saquê', 'Steinhaeger']
            },
            Price: 15
        },
        {
            Image: '',
            Name: 'Gin tropical com RedBull',
            Price: 20
        }

    ],
    SUCOS: [
        {
            Image: '', 
            Name: 'Suco Natural de Abacaxi',
            Price: 7
        },
        {
            Image: '', 
            Name: 'Suco Natural de Abacaxi com Hortelã',
            Price: 7
        },
        {
            Image: '', 
            Name: 'Suco Natural de Laranja',
            Price: 7
        },
        {
            Image: '', 
            Name: 'Suco Natural de Maracujá',
            Price: 7
        },
        {
            Image: '', 
            Name: 'Suco Natural de Mirtilo',
            Price: 10
        },
        {
            Image: '', 
            Name: 'Suco Natural de Morango',
            Price: 7
        },
        {
            Image: '', 
            Name: 'Suco Lata',
            Price: 7
        }
    ],
    OUTROS: [
        {
            Image: '', 
            Name: 'Refrigerante lata',
            Price: 5
        },
        {
            Image: '', 
            Name: 'Refrigerante 2l',
            Price: 10
        },
        {
            Image: '', 
            Name: 'Água sem gás',
            Price: 3
        },
        {
            Image: '', 
            Name: 'Agua com gás',
            Price: 3
        },
        {
            Image: '', 
            Name: 'Água Tônica',
            Price: 5
        },
        {
            Image: '', 
            Name: 'Energético RedBull',
            Price: 7
        },
    ]
}

