// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';

}

// Função para deletar o último caractere
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);

}

// Função para adicionar um número ao display
function appendNumber(number) {
    document.getElementById('display').value += number;

}

// Função para adicionar um operador ao display
function appendOperator(operator) {
    document.getElementById('display').value += operator;

}

// Função para calcular o resultado
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);

    } catch (error) {
        display.value = 'Erro';

    }

}