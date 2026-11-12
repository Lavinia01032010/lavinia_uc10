# Lavinia G Freitas

# Questão 1

## a
A função calcula o valor final de um produto depois de aplicar um desconto em porcentagem. 
Primeiro, verifica se os valores informados são válidos. O valor precisa ser maior que zero e o percentual deve estar entre 0% e 100%. Caso contrário, apresenta um erro. Se os dados forem válidos, calcula o desconto e subtrai do valor original, retornando o preço final do produto.

## b
C1 - E: valor = 100, percentual = 10; S: 90.
C2 - E: valor = 200, percentual = 50; S: 100.
C3 - E: valor = -50, percentual = 10; S: Erro: Dados inválidos

## c
Teste 1 - calcular desconto de 10%
Teste 2 - calcular desconto de 50%
Teste 3 - lançar erro para valor negativo


# Questão 2

## a
A função recebe uma nota e verifica se ela está dentro do intervalo permitido de 0 a 10. Se a nota for menor que 0 ou maior que 10, apresenta um erro. Se a nota for maior ou igual a 7, retorna "Aprovado". Se for menor que 7, retorna "Reprovado".

## b
C1 - E: nota = 8; S: Aprovado.
C2 - E: nota = 5; S: Reprovado.
C3 - E: nota = -1; S: Erro: Nota inválida.
C4 - E: nota = 11; S: Erro: Nota inválida.

## c
Teste 1 - aprovar nota maior que 7
Teste 2 - reprovar nota menor que 7
Teste 3 - lançar erro para nota negativa
Teste 4 - lançar erro para nota acima de 10

## d
<Porque é necessário testar também notas de reprovação e notas inválidas pra garantir que todas as condições da função estejam funcionando corretamente.>


# Questão 3

## a
Condições para o cadastro ser válido

- Nome: não pode estar vazio ou conter apenas espaços.
- Idade: deve ser entre 18 e 100 anos.
- E-mail: deve estar preenchido e conter o caractere `@`.

## b
Teste 1: Todos os dados são válidos.
Teste 2: Todos os dados são inválidos.
Teste 3: O nome está vazio.
Teste 4: O nome contém apenas espaços.
Teste 5: A idade está vazia.
Teste 6: A idade está abaixo do limite permitido.
Teste 7: A idade está acima do limite permitido.
Teste 8: O e-mail está vazio.
Teste 9: 1. O e-mail não contém o caractere @.

### c
O resultado será `false`, pois basta um dos três dados ser inválido para que o cadastro seja rejeitado. O resultado será `true` somente quando todos forem válidos.

# Questão 4

## a
Teste 1: Compra de R$ 250,00.
Teste 2: Compra de R$ 100,00.
Teste 3: Compra de R$ 200,00.
Teste 4: Compra de R$ 0,00.
Teste 5: Valor da compra negativo.
Teste 6: Distância negativa.

## b
Compras de R$ 200,00 ou mais têm direito ao frete grátis, de acordo com a condição valorCompra >= 200. Portanto, o resultado é zero.

# Questão 5

## a
Teste 1 – Temperatura de 0 graus.
Teste 2 – Temperatura de 100 graus.
Teste 3 – Temperatura de -40 graus.
Teste 4 – Temperatura de 25 graus.
Teste 5 – Entrada em formato de texto ("25").
Teste 6 – Entrada com letras ("abc").

## b
O número "25" está escrito como texto (string), e não como número. 
A função aceita apenas valores do tipo numérico, por isso apresenta erro.


# Questão 6

## a
São testes que verificam se pequenas partes de um código funcionam corretamente e são importantes para identificar erros e garantir o funcionamento do sistema.

## b
Teste A –> PASSA.
Porque 3 × 10 = 30, que é o resultado esperado.

Teste B –> PASSA.
Porque, quando a quantidade é zero, o resultado da multiplicação também é zero.

Teste C –> PASSA.
Porque a função identifica a quantidade negativa e lança o erro esperado.

Teste D –> FALHA.
Porque a função identifica o preço negativo e lança um erro, em vez de retornar -10.

## c
O teste que apresenta uma expectativa incompatível com o comportamento da função é o teste D, pois espera um resultado de -10, mas a função foi programada para lançar um erro sempre que a quantidade ou o preço unitário forem negativos.

# Questão 7

## a
Teste A –> PASSA.
Porque a senha possui exatamente 8 caracteres, atendendo ao mínimo exigido.

Teste B –> PASSA.
Porque a senha possui menos de 8 caracteres e retorna false, como esperado.

Teste C –> FALHA.
Porque a senha possui 10 caracteres e a função retorna true, mas o teste espera false.

Teste D –> PASSA.
Porque a senha possui 12 caracteres, atendendo ao mínimo de 8 caracteres.

## b
O teste C está incorreto pois espera que uma senha com 10 caracteres seja rejeitada ('expect' 'toBe' 'false'), mas a função aceita qualquer senha com 8 caracteres ou mais.

## c
Não; A função verifica apenas se a senha possui pelo menos 8 caracteres, sem analisar os caracteres utilizados.

# Questão 8

## a
Teste A –> PASSA.
Porque há estoque suficiente para atender ao pedido.

Teste B –> PASSA.
Porque a quantidade solicitada é maior que o estoque disponível.

Teste C –> PASSA.
Porque a quantidade solicitada é igual ao estoque, permitindo a aprovação do pedido.

Teste D –> FALHA.
Porque a quantidade zero gera um erro ("Quantidade inválida"), mas o teste espera "Estoque insuficiente".

Teste E –> PASSA.
Porque a quantidade negativa gera o erro esperado.

## b
Porque a função permite pedidos com quantidade igual ao estoque disponível, já que só considera insuficiente quando a quantidade solicitada é maior que o estoque.

## c
O teste espera um resultado incorreto, pois a função não aceita quantidade zero. Ela lança o erro "Quantidade inválida".

# Questão 9

## a
Teste 1 –> PASSA.
Porque (8 + 6) / 2 = 7, que é o resultado esperado.

Teste 2 –> PASSA.
Porque (10 + 10) / 2 = 10.

Teste 3 –> PASSA.
Porque (0 + 8) / 2 = 4.

Teste 4 –> FALHA.
Porque a nota -1 é inválida e a função lança o erro "Notas inválidas", em vez de retornar 3,5.

Teste 5 –> FALHA.
Porque a nota 15 é inválida e a função lança o erro "Notas inválidas", em vez de retornar 10.

## b
Testes criados:
6 -> Média com notas iguais
7 -> Calcular erro com nota negativa
8 -> Lançar erro para nota acima de 10