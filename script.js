let segundos = 0;
let minutos = 0;
let horas = 0;

const tempo = document.getElementById('tempo');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const resetar = document.querySelector('.resetar');

let intervalo;

iniciar.addEventListener('click', () => {
   if(intervalo) return;
   
    intervalo = setInterval(() => {
       
    segundos++;
        
    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }   
    
    if (minutos === 60) {
        horas++;
        minutos = 0;
    }
    
    let segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
    let minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    let horasFormatadas = horas < 10 ? `0${horas}` : horas;

    tempo.innerText = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
        
    }, 1000);
});

parar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
});

resetar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    horas = 0;
    tempo.innerText = "00:00:00";
});


    


    
