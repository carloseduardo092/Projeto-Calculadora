const botoesNumeros = ['btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9'];
const botoesOperadores = ['btnAdicao', 'btnSubtrair', 'btnDivisao', 'btnMultiplicacao']
const display = document.getElementById('input');



function adicionarNumero(event) {
    display.value += event.target.textContent;
    
}

botoesNumeros.forEach(id => {
    const botao = document.getElementById(id)
    botao.addEventListener('click', adicionarNumero)
});


function adicionarOperador(event) {
    let operador = event.target.textContent.trim();

    if (operador === 'x'){
        operador = '*' ;
    }
    const ultimoCaractere = display.value.slice(-1)

    if (display.value === '' && event.target.textContent != '-') {
        return
    }
    if (['+', '-', '*', '/'].includes(ultimoCaractere)) {
        display.value = display.value.slice(0, -1)
    }
    
    display.value += operador;
}

botoesOperadores.forEach(id => {
    const botao = document.getElementById(id)
    botao.addEventListener('click', adicionarOperador)
})

function calcular() {
    let expressao = display.value

    if(expressao === '' || ['+', '-', '*', '/'].includes(expressao.slice(-1))){
        return;
    }

    expressao = expressao.replace('x', '*')

    let resultado = eval(expressao)
    display.value = resultado
}

const botaoIgual = document.getElementById('btnIgual')
botaoIgual.addEventListener('click', calcular)

function limparDisplay() {
    display.value = '';
}

const botaoLimpar = document.getElementById('btnLimpar')
botaoLimpar.addEventListener('click', limparDisplay)
