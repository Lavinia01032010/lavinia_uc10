// importação de módulos
const {validateLead} = require("../src/validation");

// agrupamento de testes da função validateLead()
describe("Aplicação de testes unitários na função validateLead()", () => {

    test("Verifica nome válido", () => {
    
       //passamos um nome válido
       const result = validateLead({name: "João", email: "email@email.com"});
       expect(result.errors.length).toBe(0);
       expect(result.valid).toBe(true);

    });

    test("Verifica nome inválido", () => {
        //passamos um nome inválido com apenas um caractere e aguardamos o resultado na constante "result"
        const result = validateLead({name: "J", email: "email@email.com"});
        expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
    });


   test("Verifica cadastro válido completo (todos os campos preenchidos corretamente)", () => {

        //passamos um objeto lead com todos os campos preenchidos corretamente
        const lead = {
            name: "João E-mail",
            email: "joao@email.com",
            phone: "(27) 99999-9999",
            modality: "Online"
        };

        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors.length).toBe(0);
        expect(result.valid).toBe(true);
    });

    test("Verifica cadastro mínimo (apenas os campos obrigatórios preenchidos, omitindo os opcionais)", () => {

        //passamos um objeto lead com apenas os campos obrigatórios preenchidos corretamente
        const lead = {
            name: "João",
            email: "joao@email.com"
        };
        
        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors.length).toBe(0);
        expect(result.valid).toBe(true);
    });
    
    test("Nome com espaços vazios (entrada contendo apenas espaços em branco)", () => {
        //passamos um objeto lead com o campo name contendo apenas espaços em branco
        const lead = {
            name: "   ",
            email: "joao@email.com"
        };

        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
    });

    test("Nome com tipo incorreto (entrada com tipo diferente de string)", () => {
        //passamos um objeto lead com o campo name contendo um número em vez de uma string
        const lead = {
            name: 12345,
            email: "joao@email.com"
        };
        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
    });

    test("E-mail sem @ (exemplo: anaemail.com )", () => {
        //passamos um objeto lead com o campo email contendo um endereço de e-mail sem @
        const lead = {
            name: "João",
            email: "joaoemail.com"
        };

        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe seu e-mail (formato inválido).");
    });

    


});