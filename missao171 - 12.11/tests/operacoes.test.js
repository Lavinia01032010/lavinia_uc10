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

// ----- QUESTÃO 2
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

    test("Teste 1 - Nota de aprovação", () => {
        // Verifica se a nota 8 retorna aprovado.
        expect(verificarAprovacao(8)).toBe("Aprovado");
    });

    test("Teste 2 - Nota de reprovação", () => {
        // Verifica se a nota 5 retorna reprovado.
        expect(verificarAprovacao(5)).toBe("Reprovado");
    });

    test("Teste 3 - Nota negativa", () => {
        // Verifica se uma nota negativa apresenta erro.
        expect(() => verificarAprovacao(-1)).toThrow("Nota inválida");
    });

    test("Teste 4 - Nota acima de 10", () => {
        // Verifica se uma nota acima de 10 apresenta erro.
        expect(() => verificarAprovacao(11)).toThrow("Nota inválida");
    });

});

// ----- QUESTÃO 3 -----
function validarCadastro(nome, idade, email) {

    // Verifica se o nome está vazio ou contém apenas espaços.
    if (!nome || nome.trim() === "") {
        return false;
    }

    // Verifica se a idade está vazia, abaixo de 18 ou acima de 100.
    if (!idade || idade < 18 || idade > 100) {
        return false;
    }

    // Verifica se o e-mail está vazio ou não contém @.
    if (!email || !email.includes("@")) {
        return false;
    }

    // Retorna true se todos os dados forem válidos.
    return true;
}

describe("Aplicação de testes unitários na função validarCadastro()", () => {

    test("Todos os dados são válidos", () => {
        // Verifica se os dados corretos permitem o cadastro.
        expect(validarCadastro("João", 20, "joao@email.com")).toBe(true);
    });

    test("Todos os dados são inválidos", () => {
        // Verifica se todos os dados incorretos são rejeitados.
        expect(validarCadastro("", 15, "joaoemail.com")).toBe(false);
    });

    test("O nome está vazio", () => {
        // Verifica se um nome vazio é rejeitado.
        expect(validarCadastro("", 20, "joao@email.com")).toBe(false);
    });

    test("O nome contém apenas espaços", () => {
        // Verifica se um nome com espaços é rejeitado.
        expect(validarCadastro("   ", 20, "joao@email.com")).toBe(false);
    });

    test("A idade está vazia", () => {
        // Verifica se uma idade vazia é rejeitada.
        expect(validarCadastro("João", "", "joao@email.com")).toBe(false);
    });

    test("A idade está abaixo do limite permitido", () => {
        // Verifica se uma idade menor que 18 é rejeitada.
        expect(validarCadastro("João", 17, "joao@email.com")).toBe(false);
    });

    test("A idade está acima do limite permitido", () => {
        // Verifica se uma idade maior que 100 é rejeitada.
        expect(validarCadastro("João", 101, "joao@email.com")).toBe(false);
    });

    test("O e-mail está vazio", () => {
        // Verifica se um e-mail vazio é rejeitado.
        expect(validarCadastro("João", 20, "")).toBe(false);
    });

    test("O e-mail não contém @", () => {
        // Verifica se um e-mail sem @ é rejeitado.
        expect(validarCadastro("João", 20, "joaoemail.com")).toBe(false);
    });

});

// ----- QUESTÃO 4 -----

function calcularFrete(valorCompra, distancia) {

    // Verifica se o valor da compra ou a distância são negativos.
    if (valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }

    // Verifica se a compra é maior ou igual a R$ 200.
    if (valorCompra >= 200) {
        return 0;
    }

    // Calcula o frete multiplicando a distância por 2.
    return distancia * 2;
}

describe("Aplicação de testes unitários na função calcularFrete()", () => {

    test("Caso 1 - Compra de 250 reais", () => {
        // Verifica se o frete é grátis.
        expect(calcularFrete(250, 10)).toBe(0);
    });

    test("Caso 2 - Compra de 100 reais", () => {
        // Verifica se o frete custa 20 reais.
        expect(calcularFrete(100, 10)).toBe(20);
    });

    test("Caso 3 - Compra de 200 reais", () => {
        // Verifica se o frete é grátis.
        expect(calcularFrete(200, 5)).toBe(0);
    });

    test("Caso 4 - Compra de zero reais", () => {
        // Verifica se o frete custa 20 reais.
        expect(calcularFrete(0, 10)).toBe(20);
    });

    test("Caso 5 - Valor da compra negativo", () => {
        // Verifica se um valor negativo apresenta erro.
        expect(() => calcularFrete(-50, 10)).toThrow("Valores inválidos");
    });

    test("Caso 6 - Distância negativa", () => {
        // Verifica se uma distância negativa apresenta erro.
        expect(() => calcularFrete(100, -5)).toThrow("Valores inválidos");
    });

});

// ----- QUESTÃO 5 -----

function converterCelsiusParaFahrenheit(celsius) {
    if (typeof celsius !== "number") {
        throw new Error("A temperatura deve ser numérica");
    }

    return (celsius * 9 / 5) + 32;
}

describe("Aplicação de testes unitários na função converterCelsiusParaFahrenheit()", () => {

    test("Caso 1 - Temperatura de 0 graus", () => {
        // Verifica se 0°C retorna 32°F.
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });

    test("Caso 2 - Temperatura de 100 graus", () => {
        // Verifica se 100°C retorna 212°F.
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });

    test("Caso 3 - Temperatura de -40 graus", () => {
        // Verifica se -40°C retorna -40°F.
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });

    test("Caso 4 - Temperatura de 25 graus", () => {
        // Verifica se 25°C retorna 77°F.
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });

    test("Caso 5 - Entrada em formato de texto", () => {
        // Verifica se o texto "25" provoca um erro.
        expect(() => converterCelsiusParaFahrenheit("25"))
            .toThrow("A temperatura deve ser numérica");
    });

    test("Caso 6 - Entrada com letras", () => {
        // Verifica se a entrada "abc" provoca um erro.
        expect(() => converterCelsiusParaFahrenheit("abc"))
            .toThrow("A temperatura deve ser numérica");
    });
});

// ----- questões 6, 7 e 8 são de análise -----

function calcularMedia(nota1, nota2) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        throw new Error("Notas inválidas");
    }
    return (nota1 + nota2) / 2;
}
describe("Aplicação de testes unitários na função calcularMedia()", () => {

    test("Média com notas iguais", () => {
      expect(calcularMedia(6, 6)).toBe(6);
    });

    test("Deve lançar erro para nota negativa", () => {
        expect(() => calcularMedia(-2, 5)).toThrow("Notas inválidas");
    });

    test("Deve lançar erro para nota acima de 10", () => {
        expect(() => calcularMedia(5, 12)).toThrow("Notas inválidas");
    });
});