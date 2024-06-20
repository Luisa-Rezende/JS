// Solicitar o nome do usuário através de um prompt
let nome = prompt("Por favor, insira seu nome:");

// Mostrar uma mensagem de saudação no console
console.log("Hello, " + nome + "!");

// Solicitar um número através de um prompt
let numeroUsuario = prompt("Por favor, insira um número:");

// Converter o valor recebido para um número (parse)
let numeroConvertido = parseFloat(numeroUsuario);

// Definir outro número armazenado em uma variável
let numeroArmazenado = 10;

// Soma os dois números
let soma = numeroConvertido + numeroArmazenado;

// Mostrar o resultado da soma no console
console.log("A soma do número inserido e " + numeroArmazenado + " é: " + soma);

// Solicitar o primeiro texto através de um prompt
let texto1 = prompt("Por favor, insira o primeiro texto (ex: 'Bem-vindo ao nosso site'):");

// Solicitar o segundo texto através de um prompt
let texto2 = prompt("Por favor, insira o segundo texto (ex: 'espero que você tenha uma ótima experiência!'):");

// Concatenar os dois textos
let textoConcatenado = texto1 + " " + texto2;

// Mostrar o resultado da concatenação em um alert
alert("O texto concatenado é: " + textoConcatenado);