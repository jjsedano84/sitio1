const contarHastaNumero = () =>{

    let numeroInput = document.getElementById('numeroContar');

    let resultado = document.getElementById('resultadoContar');
    
    const numero= parseInt(numeroInput.value);

    if (isNaN(numero) ||  numero<1) {
        resultado.textContent="Por favor ingrese un número válido mayor o igual a 1";
        
        return;
    }

    let mensaje = "";
    for(let i=1; i<= numero; i++){
       // mensaje += i + "";
        mensaje = mensaje + i + " ";
    }

    resultado.textContent = mensaje;

};



function sumarDosNumeros(){

    
    const numeroInput1 = document.getElementById('numero1Sumar');
    const numeroInput2 = document.getElementById('numero2Sumar');
    
    const resultado = document.getElementById('resultadoSumar');


    const numero1= parseInt(numeroInput1.value);
    const numero2= parseInt(numeroInput2.value);


    if (isNaN(numero1) ||  isNaN(numero2)) {
        resultado.textContent="Por favor ingrese dos números válidos";
        
        return;
    }

    const resultadoSuma = numero1 + numero2

    resultado.textContent = "El resultado es: " + resultadoSuma
    
}

    let intentos=0;
    let numeroSecreto = Math.floor(Math.random() * 50) +1;

function intentarNumero(){
    
    let maxintentos = 5;
    let numero = document.getElementById('numeroAdivinar');
    let resultado = document.getElementById('resultadoJuego');

    let numeroIngresado= parseInt(numero.value);

   
    if(intentos >= maxintentos){
        resultado.textContent = "Ya se alcanzó el número máximo de intentos. El número a adivinar era: " +  numeroSecreto;
        return;
    }
    
    intentos++;
    

    if(numeroIngresado === numeroSecreto){
        resultado.textContent = "Correcto!, adivinaste en " + intentos + " intento(s)"
    }
    else if (numeroIngresado < numeroSecreto){ 
        resultado.textContent = "Es número secreto es mayor.  Intento " + intentos + " de " + maxintentos;
    }
    else if(numeroIngresado > numeroSecreto){
        resultado.textContent = "Es número secreto es menor.  Intento " + intentos + " de " + maxintentos;
    }
    else{
        resultado.textContent = "Ingresa un número válido"
    }   

    if(intentos === maxintentos && numeroIngresado!== numeroSecreto){
        resultado.textContent = "Perdiste, el número secreto era:" + numeroSecreto     
    }

}



function reiniciarJuego(){
numeroSecreto = Math.floor(Math.random() * 50) +1;
intentos = 0
let resultado = document.getElementById('resultadoJuego');
resultado.textContent= "Juego Reiniciado, Vuelve a Adivinar el número"

document.getElementById("numeroAdivinar").value = ""

}





//eventos
document.getElementById("btnContar").addEventListener('click', contarHastaNumero);
document.getElementById("btnSumar").addEventListener('click', sumarDosNumeros);
document.getElementById("btnIntentar").addEventListener('click', intentarNumero);
document.getElementById("btnReiniciar").addEventListener('click', reiniciarJuego);

