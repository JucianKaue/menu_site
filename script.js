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

            let quantity = document.createElement('input')
            quantity.value = 0
            quantity.id = `${product['Name']}`
            quantity.name = 'foods'
            quantity.style = 'text-align: center; width: 20px'
            
            let td = document.createElement('td')
            
            td.appendChild(quantity)
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
    let order_list = document.querySelector('div.order')
    let pedido = localStorage.pedido.split(',')

    let table = document.createElement('table')
    if (pedido.length != 0) {
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
                }
                counter++ 
                tr.appendChild(td_options)
            } else if (porcoes_name.includes(product)) {    
                for (op of opcionais_porcoes) {
                    let input = document.createElement('input')
                    let label = document.createElement('label')

                    input.type = 'checkbox'
                    input.id = `${op}`
                    input.name = `pedido-${counter}`

                    label.innerHTML = `${op[0]} +R$${op[1]}`

                    td_options.appendChild(input)
                    td_options.appendChild(label)
                }
                counter++ 
                tr.appendChild(td_options) 
            }
            table.appendChild(tr)
        }
        order_list.appendChild(table)
    }
}

function Order() {
    let inputs = document.getElementsByName('foods')
    let pedido = []
    for (i of inputs) {
        if (i.value != 0) {
            for (let j = 0; j < i.value; j++) {
                pedido.push([i.id, i.value])
            }
        }
    }
    localStorage.setItem('pedido', pedido)
    window.location.assign('./cart.html')
}

function send_order() {
    let txt_order = ''
    let tr = document.querySelectorAll('tr')
    for (let i = 0; i < tr.length; i++) {
        if (i % 2 == 0) { // Feito para corrigir algum bug criado anteriormente, o qual não tive tempo de corrigir
            let td_ = tr[i].querySelector('td').innerText
            if (td_ = 'HAMBURGUER ARTESANAL') {
                txt_order += '==== HAMBURGUER ARTESANAL ===='
                let bread_options = tr[i].querySelectorAll('td')[1].querySelectorAll('input.bread')
                txt_order += 'Pão: ' 
                for (j in bread_options) {
                    if (bread_options[j].checked) {
                        txt_order += `${bread_options[j].id} `
                    }
                }
                txt_order += 'Adicionais: '
                let adicionais = tr[i].querySelectorAll('td')[1].querySelectorAll('input.adicionais')
                
                for (h in adicionais) {
                    if (adicionais[h].checked) {
                        txt_order += `${adicionais[h].id}, `
                    }
                }
                
                
                
                
                
            }
        }
    }
}
