const products = [
    {
        id: 1,
        name: "Thé noir",
        type: "Thé",
        quantity: 10,
        description: "lorem5",
        price: 15.9,
        tva: 10,
        created_at: '2023-06-01',
        updated_at: '2023-06-01',
        isVisible: true
    },
    {
        id: 2,
        name: "Café Arabica",
        type: "Café",
        quantity: 20,
        description: "lorem6",
        price: 18.5,
        tva: 10,
        created_at: '2023-06-02',
        updated_at: '2023-06-02',
        isVisible: true
    },
    {
        id: 3,
        name: "Thé vert",
        type: "Thé",
        quantity: 25,
        description: "lorem7",
        price: 19.5,
        tva: 10,
        created_at: '2023-06-03',
        updated_at: '2023-06-03',
        isVisible: true
    },
    {
        id: 4,
        name: "Infusion de camomille",
        type: "Infusion",
        quantity: 15,
        description: "lorem8",
        price: 13.5,
        tva: 10,
        created_at: '2023-06-04',
        updated_at: '2023-06-04',
        isVisible: true
    },
    {
        id: 5,
        name: "Café Robusta",
        type: "Café",
        quantity: 22,
        description: "lorem9",
        price: 17.2,
        tva: 10,
        created_at: '2023-06-05',
        updated_at: '2023-06-05',
        isVisible: true
    },
    {
        id: 6,
        name: "Infusion de menthe",
        type: "Infusion",
        quantity: 18,
        description: "lorem10",
        price: 14.0,
        tva: 10,
        created_at: '2023-06-06',
        updated_at: '2023-06-06',
        isVisible: true
    },
    {
        id: 7,
        name: "Thé blanc",
        type: "Thé",
        quantity: 30,
        description: "lorem11",
        price: 21.5,
        tva: 10,
        created_at: '2023-06-07',
        updated_at: '2023-06-07',
        isVisible: true
    },
    {
        id: 8,
        name: "Café Moka",
        type: "Café",
        quantity: 24,
        description: "lorem12",
        price: 20.5,
        tva: 10,
        created_at: '2023-06-08',
        updated_at: '2023-06-08',
        isVisible: true
    },
    {
        id: 9,
        name: "Infusion de tilleul",
        type: "Infusion",
        quantity: 27,
        description: "lorem13",
        price: 16.0,
        tva: 10,
        created_at: '2023-06-09',
        updated_at: '2023-06-09',
        isVisible: true
    },
    {
        id: 10,
        name: "Thé oolong",
        type: "Thé",
        quantity: 32,
        description: "lorem14",
        price: 22.5,
        tva: 10,
        created_at: '2023-06-10',
        updated_at: '2023-06-10',
        isVisible: true
    }
];

const MODE_PRODUCT_VISIBLE = "mode_product_visible"
const MODE_PRODUCT_ALL = "mode_product_all"
let mode = MODE_PRODUCT_ALL

const body = document.querySelector("body")

function createNavbar(body) {

    const navbar = {
        tag: "nav",
        text: "",
        attributes: [
            {
                name: "class",
                value: "navbar",
            }
        ],
        childrens: [
            {
                tag: "div",
                text: "",
                attributes: [],
                childrens: [
                    {
                        tag: "button",
                        text: "All products",
                        attributes: [
                            {
                                name: "id",
                                value: "all-products"
                            }
                        ],
                        childrens: []
                    },
                    {
                        tag: "button",
                        text: "Product Visible",
                        attributes: [
                            {
                                name: "id",
                                value: "visible-products"
                            }
                        ],
                        childrens: []
                    },
                    {
                        tag: "select",
                        text: "",
                        attributes: [],
                        childrens: [ //   <option disabled selected>Choisissez un filtre</option>
                            {
                                tag: "option",
                                text: "Choisissez un filtre",
                                attributes: [
                                    {
                                        name: "disabled",
                                        value: "",
                                    },
                                    {
                                        name: "selected",
                                        value: "",
                                    }
                                ],
                                childrens: []
                            },
                            {
                                tag: "option",
                                text: "Price +",
                                attributes: [],
                                childrens: []
                            },
                            {
                                tag: "option",
                                text: "Price -",
                                attributes: [],
                                childrens: []
                            }
                        ]
                    }
                ]
            }
        ]
    }

    body.prepend(createElementNode(navbar))

}

function filter() {
    const buttons = document.querySelectorAll('nav>div>button')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('id')

            if (id === 'all-products') {
                mode = MODE_PRODUCT_ALL
                main(displayProduct())
            } else if (id === 'visible-products') {
                mode = MODE_PRODUCT_VISIBLE
                main(displayProduct())
            }
        })
    })

    const select = document.querySelector('nav>div>select')

    select.addEventListener('change', (e) => {
        const selectedValue = event.target.value;
        if (selectedValue === 'Price +') {
            products.sort((a, b) => b.price - a.price)
        } else if (selectedValue === 'Price -') {
            products.sort((a, b) => a.price - b.price)
        }

        main(products)
    })
}

function createCard(products) {
    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    products.forEach(product => {
        const card = {
            tag: "div",
            text: "",
            attributes: [
                {
                    name: "class",
                    value: "card"
                },
                {
                    name: "id",
                    value: product.id
                },
            ],
            childrens: [
                {
                    tag: "h2",
                    text: product.name,
                    attributes: [],
                    childrens: []
                },
                {
                    tag: "span",
                    text: `${product.price}€`,
                    attributes: [],
                    childrens: [
                        {
                            tag: "p",
                            text: product.tva,
                            attributes: [],
                            childrens: []
                        }
                    ]
                },
                {
                    tag: "p",
                    text: `Description : ${product.description}`,
                    attributes: [],
                    childrens: []
                },
                {
                    tag: "p",
                    attributes: [],
                    text: `Stock ${product.quantity}`,
                    childrens: []
                },
                {
                    tag: "p",
                    attributes: [],
                    text: `Disponible : ${product.isVisible ? "oui" : "non"}`,
                    childrens: []
                },
                {
                    tag: "div",
                    attributes: [
                        {
                            name: 'class',
                            value: 'action'
                        }
                    ],
                    text: "",
                    childrens: [
                        {
                            tag: "button",
                            text: "Modifier",
                            attributes: [],
                            childrens: []
                        },
                        {
                            tag: "button",
                            text: "Supprimer",
                            attributes: [
                                {
                                    name: 'data-remove-product',
                                    value: product.id
                                },
                                {
                                    name: 'class',
                                    value: 'remove'
                                }
                            ],
                            childrens: []
                        },
                        {
                            tag: "button",
                            text: "ChangeMe",
                            attributes: [
                                {
                                    name: "data-product-id",
                                    value: product.id
                                },
                                {
                                    name: "class",
                                    value: "update-visible"
                                }
                            ],
                            childrens: []
                        }
                    ]
                },

            ]
        }

        container.appendChild(createElementNode(card))
    })

    body.appendChild(container)
}

function createElementNode(element) {

    const node = document.createElement(element.tag)
    node.textContent = element.text

    element.attributes.forEach((attribut) => {
        node.setAttribute(attribut.name, attribut.value)
    })

    element.childrens.forEach(children => {
        node.appendChild(createElementNode(children))
    })

    return node
}

function updatVisible() {
    const buttons = document.querySelectorAll(".update-visible");

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-product-id'))
            const product = products.find(product => product.id === id)
            product.isVisible = !product.isVisible

            main(displayProduct())

        })
    })

}

function removeElement() {
    const buttons = document.querySelectorAll('.remove')
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-remove-product'))
            const index = products.findIndex(product => product.id === id);

            if (index !== -1) {
                products.splice(index, 1);
                main(displayProduct())
            }
        })
    })
}

function displayProduct() {
    if (mode === MODE_PRODUCT_VISIBLE) {
        return products.filter(product => product.isVisible)
    } else if (mode === MODE_PRODUCT_ALL) {
        return products
    }

    return products

}

function main(products) {
    body.innerHTML = ''
    createNavbar(body)
    filter()
    createCard(products)
    updatVisible()
    removeElement()
}


main(products)