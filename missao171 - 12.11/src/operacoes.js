// ----- QUESTÃO 1 -----

function calcularDesconto(valor, percentual) {
    // verifica se o valor é menor ou igual a zero
    if (valor <= 0 || percentual < 0 || percentual > 100) {
    // apresenta um erro caso os dados sejam inválidos
        throw new Error("Dados inválidos");
    }
    // calcula o desconto e retorna o valor final
 const desconto = valor * (percentual / 100);
    return valor - desconto;
}

// ----- QUESTÃO 2 -----

function verificarAprovacao(nota) {
    // verifica se a nota é inválida (menor que 0 ou maior que 10)
    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }

    // se a nota for maior ou igual a 7, é aprovado, se não, é reprovado
   if (nota >= 7) {
        return "Aprovado";
    }
    return "Reprovado";
}

// ----- QUESTÃO 3 -----

function validarCadastro(nome, idade, email) {
    // verifica se o nome contém apenas espaços.
    if (!nome || nome.trim() === "") {
        return false;
    }
    // verifica se a idade está vazia, abaixo de 18 ou acima de 100.
    if (!idade || idade < 18 || idade > 100) {
        return false;
    }
    // verifica se o e-mail está vazio ou não possui o caractere @.
    if (!email || !email.includes("@")) {
        return false;
    }
    // se todas as condições forem atendidas, o cadastro é válido.
    return true;
}

// ----- QUESTÃO 4 -----

function calcularFrete(valorCompra, distancia) {

    // vrrifica se o valor da compra ou a distância são negativos.
    if (valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }
    // vrifica se o valor da compra é maior ou igual a R$ 200.
    if (valorCompra >= 200) {
        return 0; // Retorna zero, pois o frete é grátis.
    }
    // calcula o frete multiplicando a distância por 2.
    return distancia * 2;
}

// ----- QUESTÃO 5 -----

function converterCelsiusParaFahrenheit(celsius) {
    // Verifica se o valor informado não é um número.
    if (typeof celsius !== "number") {
        throw new Error("A temperatura deve ser numérica");
    }
    // Converte a temperatura de Celsius para Fahrenheit.
    return (celsius * 9 / 5) + 32;
}

// ----- questões 6, 7 e 8 são de análise -----

// ----- QUESTÃO 9 -----

function calcularMedia(nota1, nota2) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        throw new Error("Notas inválidas");
    }
    return (nota1 + nota2) / 2;
}
