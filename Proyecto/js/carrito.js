const productos = [
            {id:1, nombre:"Cupcake Vainilla", precio:5000, img:"img/postre1.jpg"},
            {id:2, nombre:"Brownie Chocolate", precio:7000, img:"img/postre2.jpg"},
            {id:3, nombre:"Cheescake Fresa", precio:9000, img:"img/postre3.jpg"}
         ];

function agregarAlCarrito(id){
    let carrito = JSON.parse(localStorage.getItem("carrito"))   || [];
    let producto = productos.find(function(p){
        return p.id ===id;
    });
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto fue agregado al carrito")
}










function mostrarCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito"))   || [];
    let contenedor =document.getElementById("carritoContainer")
    if(!contenedor) return;
    contenedor.textContent = ""
    let total = 0;
    carrito.forEach(function(producto , index){
        contenedor.innerHTML += 
        "<div>" + 
        "<img src='" + producto.img + "' width='200'>" +
        "<p>" + producto.nombre + "</p>" +
        "<p>" + producto.precio + "</p>" +
        "</div>";
        total = total + producto.precio;
    })
let totalElemento = document.getElementById("totalPrecio")
totalElemento.textContent = total
}
function vaciarCarrito(){
    localStorage.removeItem("carrito");
    mostrarCarrito(); 
}
mostrarCarrito()