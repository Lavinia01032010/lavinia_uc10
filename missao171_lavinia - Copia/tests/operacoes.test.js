// QUESTÃO 1

function calcularDesconto(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }
    const desconto = valor * (percentual / 100);
    return valor - desconto;
}

// agrupa os testes unitários da função
describe("Aplicação de testes unitários na função calcularDesconto()", () => {

    test("deve calcular desconto de 10%", () => {
        // verifica se 10% de desconto sobre 100 resulta em 90
        expect(calcularDesconto(100, 10)).toBe(90);
    });

    test("deve calcular desconto de 50%", () => {
        // verifica se 50% de desconto sobre 200 resulta em 100
        expect(calcularDesconto(200, 50)).toBe(100);
    });

    test("deve lançar erro para valor negativo", () => {
        // verifica se um valor negativo apresenta uma mensagem de erro
        expect(() => calcularDesconto(-50, 10))
            .toThrow("Dados inválidos");
    });
});

function verificarAprovacao(nota) {
    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }
    if (nota >= 7) {
        return "Aprovado";
    }
    return "Reprovado";
}

describe("Aplicação de testes unitários na função verificarAprovacao()", () => {

    test("deve aprovar nota maior que 7", () => {
        // verifica se a nota 8 retorna "Aprovado"
        expect(verificarAprovacao(8)).toBe("Aprovado");
    });

    test("deve reprovar nota menor que 7", () => {
        // Verifica se a nota 5 retorna "Reprovado"
        expect(verificarAprovacao(5)).toBe("Reprovado");
    });

    test("deve lançar erro para nota negativa", () => {
        // Verifica se uma nota negativa apresenta erro
        expect(() => verificarAprovacao(-1))
            .toThrow("Nota inválida");
    });

    test("deve lançar erro para nota acima de 10", () => {
        // Verifica se uma nota acima de 10 apresenta erro
        expect(() => verificarAprovacao(11))
            .toThrow("Nota inválida");
    });

});