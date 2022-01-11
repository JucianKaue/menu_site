let opcionais_porcoes = [
    ['Queijo', '5.00'],
    ['Bacon', '5.00'],
    ['Calabresa', '5.00'],
    ['Cheddar', '5.00']
]
let opcionais_hamburguer = {
    Pão: ['Brioche', 'Australiano', 'Tradicional'], 
    Opcionais: [
        ['Queijo', '3.00'], 
        ['Calabresa', '3.00'],
        ['Bacon', '3.00'],
        ['Pepino', '3.00'],
        ['Cebola roxa levemente caramelizada', '3.00'],
        ['Cebola Caramelizada', '3.00'],
        ['Cheddar', '3.00'],
        ['Hamburguer', '8.00']
    ]
}
let opcionais_drinks = [
    'Vodka Smirnoff', 'Cachaça', 'Saquê', 'Steinhaeger'
]
var products_list = {
    LANCHES: [
        {
            Image: '../images/foods/lanche.png',
            Name: 'HAMBURGUER ARTESANAL',
            Ingredientes: ['Pão Artesanal', 'Hamburguer Bovino Artesanal', 'Queijo mussarela e prato', 'Alface', 'Tomate', 'Molho'],
            Price: '20,00'
        }
    ],
    PORÇÕES: [
        {
            Image: '../images/foods/porções-batata-frita.png',
            Name: 'Batata Frita - 500g',
            Price: '20,00'
        },
        {
            Image: '../images/foods/porções-polenta-frita.png',
            Name: 'Polenta Frita - 400g',
            Price: '18,00'
        },
        {
            Image: '../images/foods/porções-bolinho-de-mandioca.png',
            Name: 'Bolinho de Mandioca - 400g',
            Price: '18,00'
        },
        {
            Image: '../images/foods/porções-frango-a-passarinho.png',
            Name: 'Frango a Passarinho - 500g',
            Price: '20,00'
        },
        {
            Image: '../images/foods/porções-file-de-tilapia.png',
            Name: 'Filé de Tilapia - 400g',
            Price: '40,00'
        },
        {
            Image: '../images/foods/porções-file-de-pescada.png',
            Name: 'Filé de Pescada - 400g',
            Price: '40,00'
        },
        {
            Image: '../images/foods/porções-camarao-crocante.png',
            Name: 'Costelinha de Tambaqui - 400g',
            Price: '40,00'
        },
        {
            Image: '../images/foods/porções-file-de-tilapia.png',
            Name: 'Camarão Crocante - 400g',
            Price: '40,00'
        },
        {
            Image: '../images/foods/porções-camarao-a-milanesa.png',
            Name: 'Camarão a Milanesa - 400g',
            Price: '40,00'
        },
        {
            Image: '../images/foods/porções-bolinho-de-siri.png',
            Name: 'Bolinho de Siri - 400g',
            Price: '40,00'
        },
        
    ],
    CERVEJAS: [
        {
            Image: '../images/foods/cerveja600ml-brahma.png',
            Name: 'Brahma - 600ml',
            Price: '12,00 '
        },
        {
            Image: '../images/foods/cerveja600ml-brahma-duplo-malte.png',
            Name: 'Brahma Duplo Malte - 600ml',
            Price: '12,00 '
        },
        {
            Image: '../images/foods/cerveja600ml-amstel.png',
            Name: 'Amstel - 600ml',
            Price: '12,00 '
        },
        {
            Image: '../images/foods/cerveja600ml-eisenbahn.png',
            Name: 'Eisenbach - 600ml',
            Price: '12,00 '
        },
        {
            Image: '../images/foods/cerveja600ml-kaiser.png',
            Name: 'Kaiser - 600ml',
            Price: '10,00 '
        },
        {
            Image: '../images/foods/cerveja600ml-schin.png',
            Name: 'Schin - 600ml',
            Price: '10,00 '
        },
        {
            Image: '../images/foods/cerveja600ml-heineken.png',
            Name: 'Heineken - 600ml',
            Price: '16,00 '
        },
        {
            Image: '../images/foods/cervejalata-amstel.png',
            Name: 'Amstel - lata',
            Price: '6,00 '
        },
        {
            Image: '../images/foods/cervejalata-brahma-duplo-malte.png',
            Name: 'Brahma Duplo Malte - lata',
            Price: '6,00 '
        },
        {
            Image: '../images/foods/cervejalata-brahma-malzbier.png',
            Name: 'Brahma Malzbier - lata',
            Price: '6,00 '
        },
        {
            Image: '../images/foods/cervejalata-budweiser.png',
            Name: 'Budweiser - lata',
            Price: '6,00 '
        },
        {
            Image: '../images/foods/cervejalata-brahma.png',
            Name: 'Brahma - lata',
            Price: '5,00 '
        },
        {
            Image: '../images/foods/cervejalata-schin.png',
            Name: 'Schin - lata',
            Price: '5,00 '
        }
    ],
    DOSES: [
        {
            Image: '../images/foods/doses-cachaça.png',
            Name: 'Cachaça',
            Price: '5,00 '
        },
        {
            Image: '../images/foods/doses-vodka.png',
            Name: 'Vodka',
            Price: '5,00 '
        },
        {
            Image: '../images/foods/doses-catuaba.png',
            Name: 'Catuaba',
            Price: '5,00 '
        },
        {
            Image: '../images/foods/doses-conhaque.png',
            Name: 'Conhaque',
            Price: '5,00 '
        },
        {
            Image: '../images/foods/doses-gin.png',
            Name: 'Gin',
            Price: '5,00 '
        },
        {
            Image: '../images/foods/doses-passport-scotch.png',
            Name: 'Passport Scotch',
            Price: '8,00 '
        },
        {
            Image: '../images/foods/doses-jack-deniels.png',
            Name: 'Jack Deniels',
            Price: '15,00 '
        },
        {
            Image: '../images/foods/doses-tequila-jose-cuervo.png',
            Name: 'Tequila José Cuervo',
            Price: '15,00 '
        },
        {
            Image: '../images/foods/doses-jagermeister.png',
            Name: 'Jagermeister',
            Price: '18,00 '
        },
        {
            Image: '../images/foods/doses-licor-de-mirtilo.png',
            Name: 'Licor de Mirtilo',
            Price: '20,00 '
        }
    ],
    DRINKS: [
        {
            Image: '../images/foods/drinks-caipirinha-de-abacaxi.png',
            Name: 'Caipirinha de Abacaxi',
            Price: '15,00 '
        },
        {
            Image: '../images/foods/drinks-caipirinha-de-limao.png',
            Name: 'Caipirinha de Limão',
            Price: '15,00 '
        },
        {
            Image: '../images/foods/drinks-caipirinha-de-maracuja.png',
            Name: 'Caipirinha de Maracujá',
            Price: '15,00 '
        },
        {
            Image: '../images/foods/drinks-caipirinha-de-morango.png',
            Name: 'Caipirinha de Morango',
            Price: '15,00 '
        },
        {
            Image: '../images/foods/drinks-gin-tropical.png',
            Name: 'Gin tropical com RedBull',
            Price: '20,00 '
        }

    ],
    SUCOS: [
        {
            Image: '../images/foods/suco-abacaxi.png', 
            Name: 'Suco Natural de Abacaxi',
            Price: '7,00 '
        },
        {
            Image: '../images/foods/suco-abacaxi-com-hortela.png', 
            Name: 'Suco Natural de Abacaxi com Hortelã',
            Price: '7,00 '
        },
        {
            Image: '../images/foods/suco-laranja.png', 
            Name: 'Suco Natural de Laranja',
            Price: '7,00 '
        },
        {
            Image: '../images/foods/suco-maracuja.png', 
            Name: 'Suco Natural de Maracujá',
            Price: '7,00 '
        },
        {
            Image: '../images/foods/suco-bluberry.png', 
            Name: 'Suco Natural de Mirtilo',
            Price: '10,00 '
        },
        {
            Image: '../images/foods/suco-morango.png', 
            Name: 'Suco Natural de Morango',
            Price: '7,00 '
        },
        {
            Image: '../images/foods/suco-lata.png', 
            Name: 'Suco Lata',
            Price: '7,00 '
        }
    ],
    OUTROS: [
        {
            Image: '../images/foods/outros-refrilata.png', 
            Name: 'Refrigerante lata',
            Price: '5,00 '
        },
        {
            Image: '../images/foods/outros-refri2l.png', 
            Name: 'Refrigerante 2l',
            Price: '10,00 '
        },
        {
            Image: '../images/foods/outros-agua-sem-gas.png', 
            Name: 'Água sem gás',
            Price: '3,00 '
        },
        {
            Image: '../images/foods/outros-agua-com-gas.png', 
            Name: 'Agua com gás',
            Price: '3,00 '
        },
        {
            Image: '../images/foods/outros-agua-tonica.png', 
            Name: 'Água Tônica',
            Price: '5,00 '
        },
        {
            Image: '../images/foods/outros-redbull.png', 
            Name: 'Energético RedBull',
            Price: '7,00 '
        },
    ]
}

function load_menu() {
    let menu = document.querySelector('div.menu')
    for (header in products_list) {
        // Cria uma "section" para cada subcategoria do cardápio
        let section = document.createElement('section') 
        
        // Define o título
        let title = document.createElement('h2') 
        title.innerHTML = `${header}`
        
        // Cria a tabela
        let table = document.createElement('table')
        let tbody = document.createElement('tbody')
        for (product of products_list[header]) {
            // Cria cada um das linhas do cardápio
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
                } else {
                  td.innerHTML = p[1]  
                }
                
                tr.appendChild(td)
            }

            let add = document.createElement('img')
            add.src = "../images/menu/icons/shopping-icon.png"
            add.id = `${Object.entries(product)[1][1]}`
            add.className = 'img-buy'
            add.style = 'width: 40px; height: 40px; border: double; background-color: #238032;'
            add.onclick = () => {
                add_product_to_cart(product=add.id)
            }
            
            let td = document.createElement('td')

            td.appendChild(add)
            tr.appendChild(td)
            tbody.appendChild(tr)
        }
        section.appendChild(title)
        section.appendChild(table)
        table.appendChild(tbody)
        
        menu.appendChild(section)
    }
}

function load_cart() {
    let pedido = localStorage.getItem('order').split(';')

    let container = document.createElement('div')
    container.class = "container"
    container.innerHTML = '<h2 style="text-align: center;">PEDIDO</h2>'
    if (pedido.length != 0) {
        let table = document.createElement('table')
        let porcoes_name = []
        for (p in products_list['PORÇÕES']) {
            porcoes_name.push(products_list['PORÇÕES'][p]['Name'])
        }

        let counter = 0
        for (product of pedido) {
            let tr = document.createElement('tr')

            for (product_data in product[1]) {
                let td = document.createElement('td')
                td.innerHTML = `${product}`
                tr.appendChild(td)
            }

            let td_options = document.createElement('td')
            if (product == 'HAMBURGUER ARTESANAL') {
                for (op of Object.entries(opcionais_hamburguer)) {
                    if (op[0] == 'Pão') {
                        
                        td_options.innerHTML = 'Pão:'
                        
                        for (o of op[1]) {
                            let input = document.createElement('input')
                            let label = document.createElement('label')

                            input.type = 'radio'
                            input.id = `${o}`
                            input.name = `pedido-${counter}`
                           
                            input.className = 'bread'

                            label.innerHTML = `${o}`
                            

                            td_options.appendChild(input)
                            td_options.appendChild(label)
                        }
                        
                    } else if (op[0] == 'Opcionais') {
                        let p = document.createElement('p')
                        p.innerHTML = 'Opcionais:'
                        td_options.appendChild(p)
                        for (o of op[1]) {
                            let input = document.createElement('input')
                            let label = document.createElement('label')

                            input.type = 'checkbox'
                            input.id = `${o}`
                            input.name = `${o}`
                            input.className = 'bread'

                            label.innerHTML = `${o[0]} +R$${o[1]}`

                            td_options.appendChild(input)
                            td_options.appendChild(label)
                            td_options.appendChild(document.createElement('br'))
                        }
                        
                    }
                    counter++
                }
                td_options.style = "text-align: left;"
                tr.appendChild(td_options)
            } else if (product.substr(0, 10) == 'Caipirinha') {
                for (op of opcionais_drinks) {
                    let input = document.createElement('input')
                    let label = document.createElement('label')

                    input.type = 'radio'
                    input.id = `${op}`
                    input.name = `pedido-${counter}`

                    label.innerHTML = `${op}`

                    td_options.appendChild(input)
                    td_options.appendChild(label)
                    td_options.appendChild(document.createElement('br'))
                }
                counter++ 
                tr.appendChild(td_options)
            } else if (porcoes_name.includes(product)) {    
                for (op of opcionais_porcoes) {
                    let input = document.createElement('input')
                    let label = document.createElement('label')

                    input.style.borderLeft = '0px;'
                    input.type = 'checkbox'
                    input.id = `${o}`
                    input.name = `${o}`

                    label.innerHTML = `${op[0]} +R$${op[1]}`

                    td_options.appendChild(input)
                    td_options.appendChild(label)
                    td_options.appendChild(document.createElement('br'))
                }
                counter++ 
                tr.appendChild(td_options) 
            }

            let td_default_options = document.createElement('td')


            table.appendChild(tr)
        }
        container.appendChild(table)
    }

    let address = document.createElement('div.address')
    address.innerHTML = '<h2 style="text-align: center;">ENDEREÇOS</h2>'
    let addresses_table = document.createElement('table')
    if (localStorage.getItem('address') == null) {
        let message = document.createElement('tr')
        message.innerHTML = '<p>Nenhum endereço adicionado. </p>'
        addresses_table.appendChild(message)
    } else {
        let = show_items_address = ['Nome', 'Endereço', 'Número da Residência', 'Complemento', 'Bairro', 'Cidade', 'Estado', 'CEP', 'País', 'Telefone']

        let str_address = localStorage.address.split(';')
        for (storaged_address of str_address) {
            let tr_address = document.createElement('tr')
            let final_str_address = ''
            for (address_line of storaged_address.split('\n')) {
                if (show_items_address.includes(address_line.split(': ')[0])) {
                    final_str_address += `${address_line.split(': ')[1]}, `
                }
            }
            let p = document.createElement('p')
            p.innerHTML = final_str_address
            let td = document.createElement('td')
            td.appendChild(p)
            tr_address.appendChild(td)
            addresses_table.appendChild(tr_address)
            }
    }

    let add_address = document.createElement('tr')
    
    let a_add_address = document.createElement('a')
    a_add_address.href = 'add_address.html'
    a_add_address.innerHTML = 'Adicionar novo endereço.'

    add_address.appendChild(a_add_address)
    addresses_table.appendChild(add_address)
    address.appendChild(addresses_table)

    



    let confirm_button = document.createElement('button')
    confirm_button.innerHTML = 'CONFIRMAR PEDIDO'
    confirm_button.onclick = () => {send_order()}

    document.body.appendChild(address)
    document.body.appendChild(container)
    document.body.appendChild(confirm_button)
}

function add_product_to_cart(product) {
    if (localStorage.getItem('order') == null) {
        localStorage.setItem('order', `${product};`)
    } else {
        let order = localStorage.getItem('order')
        localStorage.setItem('order', `${order}${product};`)
    }
    alert(localStorage.getItem('order'))
    alert(`O produto ${product} foi adicionado ao carrinho.`)
}

function send_order() {
    alert('Botão de enviar pedido')
}