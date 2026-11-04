// importação de módulos
const {validateLead} = require("../src/validation");

// agrupamento de testes da função validateLead()
describe("Aplicação de testes unitários na função validateLead()", () => {

    test('Verifica se o nome tem menos de 3 caracteres', () => {
        const result = validateLead({name: "João", email: "email@email.com"});
       // expect(result.errors.length).toBe(0);
        expect(result.valid).toBe(true);
    });


});

