//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000; 
if (tipoDePagamento == "credito") {
    const disconto = (valorDoProduto * 5) / 100
    const valorFinal = valorDoProduto - disconto
    console.log(`o valor do seu produto é ${valorFinal.toFixed(2)}`)
} else if (tipoDePagamento == "cheque") {
    const disconto = (valorDoProduto * 3) / 100
    const valorFinal = valorDoProduto - disconto
    console.log(`o valor do seu produto é ${valorFinal.toFixed(2)}`)
} else if (tipoDePagamento == "dinheiro" || " debito") {
    const disconto = (valorDoProduto * 10) / 100
    const valorFinal = valorDoProduto - disconto
    console.log(`o valor do seu produto é ${valorFinal.toFixed(2)}`)
}
