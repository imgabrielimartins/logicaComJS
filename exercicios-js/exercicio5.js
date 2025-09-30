// Desconto progressivo
// Descrição:
// Clientes recebem desconto conforme o valor da compra:
// - Até R$ 100,00: sem desconto
// - De R$ 100,01 a R$ 300,00: 5%
// - Acima de R$ 300,00: 10%
// Entrada:
// Valor da compra.
// Saída:
// "Valor final da compra: R$ XX,XX"

function desconto(valorCompra) {
    let valorFinal;

    if (valorCompra <= 100.00) {
        valorFinal = valorCompra;
    } else if (valorCompra <= 300.00) {
        valorFinal = valorCompra * 0.95; // 5% de desconto
    } else {
        valorFinal = valorCompra * 0.90; // 10% de desconto
    }

    console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`);
}