// Identificar os elementos HTML
const soma = document.getElementById('soma');
const subtrai = document.getElementById('subtrai');
const zera = document.getElementById('zera');
const resultado = document.getElementById('resultado');
const volte = document.getElementById('voltar');
// Estado do contador
let contador = 0;

// Aumentar o contador
soma.addEventListener('click', () => {
    contador++;
    resultado.value = contador;
});

// Diminuir o contador
subtrai.addEventListener('click', () => {
    contador--;
    resultado.value = contador;
});

// Zerar o contador
zera.addEventListener('click', () => {
    contador = 0;
    resultado.value = contador;
});
