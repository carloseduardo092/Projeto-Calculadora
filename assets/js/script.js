// Definindo os arrays de botões numéricos e operacionais
const botoesNumeros = [
  "btn0",
  "btn1",
  "btn2",
  "btn3",
  "btn4",
  "btn5",
  "btn6",
  "btn7",
  "btn8",
  "btn9",
];
const botoesOperadores = [
  "btnAdicao",
  "btnSubtrair",
  "btnDivisao",
  "btnMultiplicacao",
];
const display = document.getElementById("input");

// Função para adicionar números ao display da calculadora
// Recebe o evento de clique e adiciona o número correspondente ao display
function adicionarNumero(event) {
  display.value += event.target.textContent;
}

// Adiciona o evento de clique para cada botão numérico
botoesNumeros.forEach((id) => {
  const botao = document.getElementById(id);
  botao.addEventListener("click", adicionarNumero); // Chama a função adicionarNumero ao clicar
});

// Função para adicionar operadores (+, -, *, /) ao display
// Também trata a substituição de operadores e impede operadores consecutivos
function adicionarOperador(event) {
  let operador = event.target.textContent.trim();

  // Substitui 'x' por '*' para operações matemáticas
  if (operador === "x") {
    operador = "*";
  }
  if (operador ==="÷"){
    operador = "÷"
  }
  const ultimoCaractere = display.value.slice(-1); // Obtém o último caractere digitado no display

  // Impede adicionar um operador se o display estiver vazio e o operador não for '-'
  if (display.value === "" && event.target.textContent != "-") {
    return;
  }

  // Se o último caractere for um operador, substitui o operador anterior
  if (["+", "-", "*", "÷"].includes(ultimoCaractere)) {
    display.value = display.value.slice(0, -1); // Remove o último operador
  }
  // Adiciona o novo operador ao display
  display.value += operador;
}

// Adiciona o evento de clique para cada botão operador
botoesOperadores.forEach((id) => {
  const botao = document.getElementById(id);
  botao.addEventListener("click", adicionarOperador); // Chama a função adicionarOperador ao clicar
});

// Função para calcular o resultado da expressão matemática no display
function calcular() {
  let expressao = display.value;

  // Impede a execução se o display estiver vazio ou se a expressão terminar com um operador
  if (expressao === "" || ["+", "-", "*", "÷"].includes(expressao.slice(-1))) {
    return;
  }

   // Substitui 'x' por '*' para compatibilidade com eval
    // Mantemos o '÷' no display e, ao calcular, tratamos ele como '/'
  expressao = expressao.replace("x", "*")
  expressao = expressao.replace("÷", "/")

  // Substitui 'x' por '*' para compatibilidade com eval

  // Calcula o resultado da expressão
  let resultado = eval(expressao);
  display.value = resultado;
}
// Adiciona o evento de clique ao botão de igual
const botaoIgual = document.getElementById("btnIgual");
botaoIgual.addEventListener("click", calcular);

// Função para limpar o display
function limparDisplay() {
  display.value = ""; // Limpa o conteúdo do display
}
// Adiciona o evento de clique ao botão de limpar
const botaoLimpar = document.getElementById("btnLimpar");
botaoLimpar.addEventListener("click", limparDisplay);

// Autor: Carlos Eduardo, 22 anos , aprendiz de programção