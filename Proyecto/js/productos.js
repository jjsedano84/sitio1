// js/productos.js
// Lista de 20 productos con imágenes locales
const productos = [
    {id:1, nombre:"Cupcake Vainilla", precio:5000, img:"img/postre1.jpg"},
    {id:2, nombre:"Brownie Chocolate", precio:7000, img:"img/postre2.jpg"},
    {id:3, nombre:"Cheesecake Fresa", precio:9000, img:"img/postre3.jpg"},
    {id:4, nombre:"Macarons", precio:6000, img:"img/postre4.jpg"},
    {id:5, nombre:"Tarta de Limón", precio:8000, img:"img/postre5.jpg"},
    {id:6, nombre:"Galletas de Avena", precio:4000, img:"img/postre6.jpg"},
    {id:7, nombre:"Tiramisú", precio:10000, img:"img/postre7.jpg"},
    {id:8, nombre:"Cheesecake Chocolate", precio:9500, img:"img/postre8.jpg"},
    {id:9, nombre:"Cupcake Red Velvet", precio:6000, img:"img/postre9.jpg"},
    {id:10, nombre:"Brownie Nutella", precio:8000, img:"img/postre10.jpg"},
    {id:11, nombre:"Panqueques", precio:7000, img:"img/postre11.jpg"},
    {id:12, nombre:"Donuts Glaseados", precio:5500, img:"img/postre12.jpg"},
    {id:13, nombre:"Galletas Chocolate Chips", precio:5000, img:"img/postre13.jpg"},
    {id:14, nombre:"Mousse de Fresa", precio:8500, img:"img/postre14.jpg"},
    {id:15, nombre:"Cupcake Chocolate", precio:6000, img:"img/postre15.jpg"},
    {id:16, nombre:"Tarta Frutos Rojos", precio:9000, img:"img/postre16.jpg"},
    {id:17, nombre:"Cheesecake Mango", precio:9500, img:"img/postre17.jpg"},
    {id:18, nombre:"Brownie Blanco", precio:8000, img:"img/postre18.jpg"},
    {id:19, nombre:"Macarons Mix", precio:6500, img:"img/postre19.jpg"},
    {id:20, nombre:"Tiramisú Mini", precio:5000, img:"img/postre20.jpg"},
];

// Función para mostrar productos
function mostrarProductos() {
    const productosGrid = document.getElementById('productosGrid');
    const productosDestacados = document.getElementById('productosDestacados');

    if(productosGrid){
        productosGrid.innerHTML = "";
        productos.forEach(p=>{
            const card = document.createElement('div');
            card.className = 'producto-card';
            card.innerHTML = `
                <img src="${p.img}" alt="${p.nombre}">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
            `;
            productosGrid.appendChild(card);
        });
    }

    if(productosDestacados){
        productosDestacados.innerHTML = "";
        productos.slice(0,5).forEach(p=>{
            const card = document.createElement('div');
            card.className = 'producto-card';
            card.innerHTML = `
                <img src="${p.img}" alt="${p.nombre}">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
            `;
            productosDestacados.appendChild(card);
        });
    }
}

mostrarProductos();