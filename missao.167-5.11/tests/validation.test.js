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

    test("E-mail sem @ (exemplo: anaemail.com)", () => {
        //passamos um objeto lead com o campo email sem o caractere "@" para simular um e-mail inválido
        const lead = {
            name: "João",
            email: "joaoemail.com"
        };
     //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe um e-mail válido.");
    });

    test("E-mail incompleto sem o domínio e sem o ponto (exemplo: email@email)", () => {
        //passamos um objeto lead com o campo email incompleto, sem o domínio e sem o ponto, para simular um e-mail inválido
        const lead = {
            name: "João",
            email: "joao@email"
        };
        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe um e-mail válido.");
    });

    test("E-mail com tipo incorreto (entrada com tipo diferente de string)", () => {
        //passamos um objeto lead com o campo email contendo um número em vez de uma string
        const lead = {
            name: "João",
            email: 12345
        };
        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Informe um e-mail válido.");
    });

    test("Telefone com tipo incorreto (enviado como tipo numérico em vez de string)", () => {
        //passamos um objeto lead com o campo phone contendo um número em vez de uma string
        const lead = {
            name: "João",
            email: "joao@email.com",
            phone: 12345
        };
        //chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("O telefone deve ser um texto.");
    });

   test("Modalidade/interesse inválido (modalidade que não existe na lista permitida)", () => {
        // passamos um objeto lead com o campo interest contendo uma modalidade inválida
        const lead = {
            name: "João",
            email: "joao@email.com",
            phone: "123456789",
            interest: "Modalidade Inválida"
        };
        // chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Selecione uma modalidade válida.");
    });

   test("Modalidade/interesse com diferenciação de caixa (exemplo: enviar online com o minúsculo quando o sistema espera Online)", () => {
        // passamos um objeto lead com o campo interest contendo uma modalidade com letras minúsculas
        const lead = {
            name: "João",
            email: "joao@email.com",
            phone: "123456789",
            interest: "online"
        };
        // chamamos a função validateLead() passando o objeto lead e aguardamos o resultado na constante "result"
        const result = validateLead(lead);
        expect(result.errors).toContain("Selecione uma modalidade válida.");
    });

});