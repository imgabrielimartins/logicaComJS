// Brinde por valor
// Descrição:
// Em uma promoção, clientes que gastam mais de R$ 200,00 ganham um brinde. Crie uma função que analisa o valor da compra e informa se o cliente ganhou ou não.
// Entrada:
// Valor da compra (decimal).
// Saída:
// - "Você ganhou um brinde!"
// - "Sem brinde desta vez."

function verificarBrinde(valorCompra) {
    if (typeof valorCompra !== 'number' || valorCompra < 0) {
        return "Valor inválido.";
    }
    if (valorCompra > 200) {
        return "Você ganhou um brinde!";
    } else {
        return "Sem brinde desta vez.";
    }
}

// Exemplo de uso:
let valorCompra = 250.00; // Valor da compra
let resultado = verificarBrinde(valorCompra);
console.log(resultado); // Saída: "Você ganhou um brinde!"