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



