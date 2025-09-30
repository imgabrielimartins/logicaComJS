// Cálculo de frete por região
// Descrição:
// O valor do frete depende da região:
// - "Sul": R$ 20,00
// - "Sudeste": R$ 30,00
// - "Nordeste": R$ 40,00
// - Outras regiões: R$ 50,00
// Entrada:
// Uma string com o nome da região.
// Saída:
// "Valor do frete: R$ XX,XX"

function calcularFrete(regiao) {
    let valorFrete;
    switch (regiao.toLowerCase()) {
        case 'sul':
            valorFrete = 20.00;
            break;
        case 'sudeste':
            valorFrete = 30.00; 
            break;
        case 'nordeste':
            valorFrete = 40.00; 
            break;
        default:
            valorFrete = 50.00;
            break;
    }
    return `Valor do frete: R$ ${valorFrete.toFixed(2)}`;
}   
// Exemplo de uso:
let regiao = "Sudeste"; // Região de destino
let resultadoFrete = calcularFrete(regiao);
console.log(resultadoFrete); // Saída: "Valor do frete: R$ 30,00"

