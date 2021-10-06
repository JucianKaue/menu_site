let opcionais_porcoes = [
    ['Queijo', 5.00],
    ['Bacon', 5],
    ['Calabresa', 5],
    ['Cheddar', 5]
]
var products_list = {
    LANCHES: [
        {
            Image: '../images/foods/lanche.png',
            Name: 'HAMBURGUER ARTESANAL',
            Ingredientes: ['Pão Artesanal', 'Hamburguer Bovino Artesanal', 'Queijo mussarela e prato', 'Alface', 'Tomate', 'Molho'],

            Options: {
                Pão: ['Brioche', 'Australiano', 'Tradicional'], 
                Opcionais: [
                    ['Queijo', '3.00'], 
                    ['Calabresa', '3.00'],
                    ['Bacon', '3.00'],
                    ['Pepino', '3.00'],
                    ['Cebola roxa levemente caramelizada', '3.00'],
                    ['Cebola Caramelizada', '3.00'],
                    ['Cheddar', '3.00'],
                    ['Hambrguer', '8.00']
                ]
            },
            Price: '20,00'
        }
    ],
    PORÇÕES: [
        {
            Image: '../images/foods/batata-frita.png',
            Name: 'Batata Frita',
            Details:'500g',
            //Options: opcionais_porcoes,
            Price: '20,00'
        },
        {
            Image: '../images/foods/polenta-frita.png',
            Name: 'Polenta Frita',
            Details:'400g',
            //Options: opcionais_porcoes,
            Price: '18,00'
        },
        {
            Image: '../images/foods/bolinho-de-mandioca.png',
            Name: 'Bolinho de Mandioca',
            Details:'400g',
            //Options: opcionais_porcoes,
            Price: '18,00'
        },
        {
            Image: '../images/foods/frango-a-passarinho.png',
            Name: 'Frango a Passarinho',
            Details:'500g',
            //Options: opcionais_porcoes,
            Price: '20,00'
        },
        {
            Image: '../images/foods/file-de-tilapia.png',
            Name: 'Filé de Tilapia',
            Details:'400g',
            //Options: opcionais_porcoes,
            Price: '40,00'
        },
        {
            Image: '',
            Name: 'Filé de Pescada',
            Details:'400g',
            //Options: opcionais_porcoes,
            Price: '40,00'
        },
        {
            Image: '',
            Name: 'Costelinha de Tambaqui',
            Details:'400g',
            //Options: opcionais_porcoes,
            Price: '40,00'
        },
        {
            Image: '',
            Name: 'Camarão Crocante',
            Details:'400g',
            //Options: opcionais_porcoes,
            Price: '40,00'
        },
        {
            Image: '',
            Name: 'Camarão a Milanesa',
            Details:'400g',
            //Options: opcionais_porcoes,
            Price: '40,00'
        },
        {
            Image: '',
            Name: 'Bolinho de Siri',
            Details:'400g',
            //Options: opcionais_porcoes,
            Price: '40,00'
        },
        
    ],
    CERVEJAS: [
        {
            Image: '',
            Name: 'Brahma - 600ml',
            Price: '12,00 '
        },
        {
            Image: '',
            Name: 'Brahma Duplo Malte - 600ml',
            Price: '12,00 '
        },
        {
            Image: '',
            Name: 'Amstel - 600ml',
            Price: '12,00 '
        },
        {
            Image: '',
            Name: 'Eisenbach - 600ml',
            Price: '12,00 '
        },
        {
            Image: '',
            Name: 'Kaiser - 600ml',
            Price: '10,00 '
        },
        {
            Image: '',
            Name: 'Brahma - 600ml',
            Price: '10,00 '
        },
        {
            Image: '',
            Name: 'Haineken - 600ml',
            Price: '16,00 '
        },
        {
            Image: '',
            Name: 'Amstel - lata',
            Price: '6,00 '
        },
        {
            Image: '',
            Name: 'Brahma Duplo Malte - lata',
            Price: '6,00 '
        },
        {
            Image: '',
            Name: 'Brahma Malzbier - lata',
            Price: '6,00 '
        },
        {
            Image: '',
            Name: 'Budweiser - lata',
            Price: '6,00 '
        },
        {
            Image: '',
            Name: 'Brahma - lata',
            Price: '5,00 '
        },
        {
            Image: '',
            Name: 'Schin - lata',
            Price: '5,00 '
        }
    ],
    DOSES: [
        {
            Image: '',
            Name: 'Cachaça',
            Price: '5,00 '
        },
        {
            Image: '',
            Name: 'Vodka',
            Price: '5,00 '
        },
        {
            Image: '',
            Name: 'Catuaba',
            Price: '5,00 '
        },
        {
            Image: '',
            Name: 'Conhaque',
            Price: '5,00 '
        },
        {
            Image: '',
            Name: 'Gin',
            Price: '5,00 '
        },
        {
            Image: '',
            Name: 'Passport Scotch',
            Price: '8,00 '
        },
        {
            Image: '',
            Name: 'Jack Deniels',
            Price: '15,00 '
        },
        {
            Image: '',
            Name: 'Tequila José Cuervo',
            Price: '15,00 '
        },
        {
            Image: '',
            Name: 'Jagermeister',
            Price: '18,00 '
        },
        {
            Image: '',
            Name: 'Licor de Mirtilo',
            Price: '20,00 '
        }
    ],
    DRINKS: [
        {
            Image: '',
            Name: 'Caipirinha de Abacaxi',
            Options: {
                Alcool: ['Vodka Smirnoff', 'Cachaça', 'Saquê', 'Steinhaeger']
            },
            Price: '15,00 '
        },
        {
            Image: '',
            Name: 'Caipirinha de Limão',
            Options: {
                Alcool: ['Vodka Smirnoff', 'Cachaça', 'Saquê', 'Steinhaeger']
            },
            Price: '15,00 '
        },
        {
            Image: '',
            Name: 'Caipirinha de Maracujá',
            Options: {
                Alcool: ['Vodka Smirnoff', 'Cachaça', 'Saquê', 'Steinhaeger']
            },
            Price: '15,00 '
        },
        {
            Image: '',
            Name: 'Caipirinha de Morango',
            Options: {
                Alcool: ['Vodka Smirnoff', 'Cachaça', 'Saquê', 'Steinhaeger']
            },
            Price: '15,00 '
        },
        {
            Image: '',
            Name: 'Gin tropical com RedBull',
            Options: [],
            Price: '20,00 '
        }

    ],
    SUCOS: [
        {
            Image: '', 
            Name: 'Suco Natural de Abacaxi',
            Price: '7,00 '
        },
        {
            Image: '', 
            Name: 'Suco Natural de Abacaxi com Hortelã',
            Price: '7,00 '
        },
        {
            Image: '', 
            Name: 'Suco Natural de Laranja',
            Price: '7,00 '
        },
        {
            Image: '', 
            Name: 'Suco Natural de Maracujá',
            Price: '7,00 '
        },
        {
            Image: '', 
            Name: 'Suco Natural de Mirtilo',
            Price: '10,00 '
        },
        {
            Image: '', 
            Name: 'Suco Natural de Morango',
            Price: '7,00 '
        },
        {
            Image: '', 
            Name: 'Suco Lata',
            Price: '7,00 '
        }
    ],
    OUTROS: [
        {
            Image: '', 
            Name: 'Refrigerante lata',
            Price: '5,00 '
        },
        {
            Image: '', 
            Name: 'Refrigerante 2l',
            Price: '10,00 '
        },
        {
            Image: '', 
            Name: 'Água sem gás',
            Price: '3,00 '
        },
        {
            Image: '', 
            Name: 'Agua com gás',
            Price: '3,00 '
        },
        {
            Image: '', 
            Name: 'Água Tônica',
            Price: '5,00 '
        },
        {
            Image: '', 
            Name: 'Energético RedBull',
            Price: '7,00 '
        },
    ]
}

window.addEventListener('load', () => {
    let menu = document.querySelector('div.menu')
    for (header in products_list) {
        // Creates a section for a type of product
        let section = document.createElement('section') 
        
        // Define the title
        let title = document.createElement('h2') 
        title.innerHTML = `${header}`
        
        // Creates the table
        let table = document.createElement('table')
        let tbody = document.createElement('tbody')
        for (product of products_list[header]) {
            // Defines each line of menu
            let tr = document.createElement('tr')
            for (p of Object.entries(product)) {
                let td = document.createElement('td')
                if (p[0] == 'Ingredientes') {
                    // Cria um elemento "details" para mostrar os ingredientes
                    let details = document.createElement('details')
                    let summary = document.createElement('summary')
                    let ul = document.createElement('ul')
                    for (i of p[1]) {
                        let li = document.createElement('li')
                        li.innerHTML = `${i}`
                        ul.appendChild(li)
                    }
                    summary.innerHTML = `${p[0]}`
                    
                    details.appendChild(summary)
                    details.appendChild(ul)

                    td.appendChild(details)
                }
                else if (p[0] == 'Image') {
                    let img = document.createElement('img')
                    img.src = p[1]
                    img.style = 'weight: 100px; height: 100px; border-style: double; border-radius: 20px; margin-top: 5px;'
                    td.appendChild(img)
                } else if (p[0] == 'Price') {
                    td.innerHTML = `R$${p[1]}`
                } else if (p[0] == 'Options') {
                    let options = Object.entries(p[1])
                    
                    for (i in options) {
                        let td_option = document.createElement('td')
                        let details = document.createElement('details')
                        let summary = document.createElement('summary')
                        summary.innerHTML = `${options[i][0]}`

                        for (j of options[i][1]) {
                            let input = document.createElement('input')
                            let label = document.createElement('label')

                            input.type = 'checkbox'
                            input.id = `${product['Name']}`
                            input.name = 'optional'
                            label.innerHTML = `${j}`

                            details.appendChild(input)
                            details.appendChild(label)
                            details.appendChild(document.createElement('br'))
                        }

                        details.appendChild(summary)
                        td_option.appendChild(details)
                        td.appendChild(td_option)
                    }
                    
                    
                    


                } else {
                  td.innerHTML = p[1]  
                }
                
                tr.appendChild(td)
            }

            let quantity = document.createElement('input')
            quantity.value = 0
            quantity.id = `${product['Name']}`
            quantity.class = 'foods'
            quantity.style = 'text-align: center; width: 20px'

            let lower = document.createElement('img')
            lower.style = 'width: 16px; height: 16px'
            lower.src = '../images/menu/icons/minus.png'
            
            let plus = document.createElement('img')
            plus.style = 'width: 16px; height: 16px'
            
            plus.src = '../images/menu/icons/plus.png'
            
            let td = document.createElement('td')
            td.style = 'display: inline;'
            //td.appendChild(lower)
            td.appendChild(quantity)
            //td.appendChild(plus)

            tr.appendChild(td)

            tbody.appendChild(tr)
        }
        section.appendChild(title)
        section.appendChild(table)
        table.appendChild(tbody)
        
        
        menu.appendChild(section)
    }
});

function Order() {
    let inputs = document.querySelectorAll('input.foods')
    let optional = document.getElementsByName('optional')
    
    let order = []
    for (i of inputs) {
        if (i.value != 0) {
            order.push(`${i.id} -> ${i.value}`)
            
            
        }
        console.log(i)
    }
    //window.location.assign('orders.html')
}


