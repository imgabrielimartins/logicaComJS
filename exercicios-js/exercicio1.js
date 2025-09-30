// Verificação de Parcelamento
// Descrição:
//Crie uma função que verifica se o cliente pode parcelar a compra. Se o valor for maior ou igual a R$ 100,00, ele pode parcelar em até 3 vezes. Se for maior que R$ 300,00, pode parcelar em até 6 vezes. Caso contrário, não pode parcelar.
//Entrada:
//Um número decimal representando o valor da compra.
//Saída:
//Uma das mensagens:
// "Compra pode ser parcelada em até 3x."
// "Compra pode ser parcelada em até 6x."
// "Compra não pode ser parcelada."

let valorCompra = parseFloat(prompt("Digite o valor da compra:"));

function verificarParcelamento(valor) {
    if (valor > 300) {
        return "Compra pode ser parcelada em até 6x.";
    }   else if (valor >= 100) { 
        return "Compra pode ser parcelada em até 3x.";
    } else { 
        return "Compra não pode ser parcelada.";
    }
}
console.log(verificarParcelamento(valorCompra));