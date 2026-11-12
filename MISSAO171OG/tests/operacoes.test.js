const {validarCadastro, calcularDesconto, calcularFrete, calcularMedia, calcularTotal, converterCelsiusParaFahrenheit, validarSenha, verificarAprovacao, verificarEstoque } = require("../src/operacoes")// QUESTÃO 1

// ----- QUESTÃO 1
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
describe("Questão 3 - Testes unitários na função validarCadastro()", () => {

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

// ----- questão 6 -----
describe("Testes da função calcularTotal()", () => {
    //PASSA
    test("deve calcular o total corretamente", () => {
        expect(calcularTotal(3, 10)).toBe(30);
    });

    //PASSA
    test("deve retornar zero quando a quantidade for zero", () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });

    //PASSA
    test("deve lançar erro quando a quantidade for negativa", () => {
        expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
    });

    //FALHA
    test("deve calcular o total com preço negativo", () => {
     expect(calcularTotal(2, -5)).toBe(-10);
    });
});

// ----- questão 7 -----
describe("Testes da função validarSenha()", () => {

    //PASSA
    test("deve aceitar senha com 8 caracteres", () => {
        expect(validarSenha("abc12345")).toBe(true);
    });

    //PASSA
    test("deve rejeitar senha com menos de 8 caracteres", () => {
        expect(validarSenha("abc123")).toBe(false);
    });

    //FALHA
    test("deve rejeitar senha com 10 caracteres", () => {
        expect(validarSenha("abc1234567")).toBe(false);
    });

    //PASSA
    test("deve aceitar senha com 12 caracteres", () => {
        expect(validarSenha("abc123456789")).toBe(true);
    });
});

// ----- QUESTÃO 8 -----
describe ("Testes unitários da function verificarEstoque", () => {

    //PASSA
    test("deve aprovar pedido quando há estoque suficiente", () => {
      expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");
    });

    //PASSA
    test("deve informar estoque insuficiente", () => {
        expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");
    });

    //PASSA
    test("deve aprovar pedido com quantidade igual ao estoque", () => {
        expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");
    });

    //FALHA
    test("deve retornar estoque insuficiente para quantidade zero", () => {
        expect(verificarEstoque(10, 0)).toBe("Estoque insuficiente");
    });

    //PASSA
    test("deve lançar erro para quantidade negativa", () => {
        expect(() => verificarEstoque(10, -2)).toThrow("Quantidade inválida");
    });
});

// ----- QUESTÃO 9 -----
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