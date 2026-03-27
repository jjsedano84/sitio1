// js/carrusel.js
let indice = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;

function mostrarSlide(n){
    slides.forEach((slide, i)=>{
        slide.style.display = i === n ? 'block' : 'none';
    });
}

function nextSlide(){
    indice = (indice + 1) % total;
    mostrarSlide(indice);
}

function prevSlide(){
    indice = (indice - 1 + total) % total;
    mostrarSlide(indice);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Inicializar
mostrarSlide(indice);
setInterval(nextSlide, 5000); // auto-slide cada 5s