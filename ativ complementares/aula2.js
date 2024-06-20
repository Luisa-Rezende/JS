// Solicita o nome do usuário através de um prompt
let nome = prompt("Por favor, insira seu nome:");

// Mostra uma mensagem de saudação no console
console.log("Hello, " + nome + "!");

// Solicita um número através de um prompt
let numeroUsuario = prompt("Por favor, insira um número:");

// Converte o valor recebido para um número (parse)
let numeroConvertido = parseFloat(numeroUsuario);

// Define outro número armazenado em uma variável
let numeroArmazenado = 10;

// Soma os dois números
let soma = numeroConvertido + numeroArmazenado;

// Mostra o resultado da soma no console
console.log("A soma do número inserido e " + numeroArmazenado + " é: " + soma);

// Solicita o primeiro texto através de um prompt
let texto1 = prompt("Por favor, insira o primeiro texto (ex: 'Bem-vindo ao nosso site'):");

// Solicita o segundo texto através de um prompt
let texto2 = prompt("Por favor, insira o segundo texto (ex: 'espero que você tenha uma ótima experiência!'):");

// Concatena os dois textos
let textoConcatenado = texto1 + " " + texto2;

// Mostra o resultado da concatenação em um alert
alert("O texto concatenado é: " + textoConcatenado);