// Validação de forma de pagamento
// Descrição:
// Crie uma função que verifica se a forma de pagamento é válida. As formas válidas são: "boleto", "cartão", "pix".
// Entrada:
// Uma string com a forma de pagamento.
// Saída:
// - "Forma de pagamento aceita."
// - "Forma de pagamento inválida."

function verificaPagamento(pagamento) {
    const formasValidas = ['boleto', 'cartão', 'pix'];
    
    if (formasValidas.includes(pagamento)) {
        console.log('Forma de pagamento aceita.');
    } else {
        console.log('Forma de pagamento inválida.');
    }
}