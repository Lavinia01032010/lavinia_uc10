// Esta função extrai os campos do formulário
function validateLead({ name, email, phone, interest }) {
  // cria um vetor que vai acumular os problemas encontrados ao longo da validação
  const errors = [];

  // validação do nome: verifica se o nome não é uma string e se tem menos de 3 caracteres
  if (typeof name !== "string" || name.trim().length < 3) {
    errors.push("Informe seu nome (mínimo de 3 caracteres).");
  }

  // validação de e-mail: verifica se o e-mail não é uma string ou se ele não passa no teste de validação de e-mail
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // validação de email
  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    errors.push("Informe um e-mail válido.");
  }

  // validação de telefone: verifica se o telefone foi preenchido no formulário e se o tipo da variável "phone" é diferente de string
  if (phone && typeof phone !== "string") {
    errors.push("O telefone deve ser um texto.");
  }

  // cria um vetor com as opções de modalidade de curso
  const allowedInterests = ["Online", "Presencial", "Ainda não sei"];
  //validação de modalidade de curso: verifica se a modalidade de curso foi preenchida no formulário e se a opção enviada não está na lista de permitidos
  if (interest && !allowedInterests.includes(interest)) {
    errors.push("Selecione uma modalidade válida.");
  }

  return { valid: errors.length === 0, errors };
}

function normalizeCourseFilter(modality) {
  if (!modality || modality === "Todos") return null;
  const allowed = ["Online", "Presencial"];

  // o total d erros acumulados é igual a zero? se for igual a zero =  true; senão = false
  return allowed.includes(modality) ? modality : null;

  /* exemplos:
    Caso 1: a validação retornou erro
    {
    valid: false,
    errors: ["m1", "m2", "m3", ...] -- length > 0
    }
    Caso 2: a validação teve sucesso
    {
    valid: true,
    errors: [] //length = 0
    }
  */
}

module.exports = { validateLead, normalizeCourseFilter };
