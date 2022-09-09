//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
const valorreais = valorDoProduto / 100
const que = valorreais / quantidadeDoParcelamento
const valorparcelapaga = valorPago / quantidadeDoParcelamento
console.log(`restam ${valorparcelapaga} parcelas de ${que}` ) 