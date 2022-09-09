
const jogada1 = "pedra"
const jogada2 = "tesoura"
const jogada3 = "papel"
if (jogada1 == "pedra" && jogada2 == "tesoura") {
    console.log("vencdor")
} else if (jogada1 == "pedra" && jogada2 == "papel") {
    console.log("perdedor")
}
if (jogada1 == "tesoura" && jogada2 == "papel") {
    console.log("vencdor")
} else if (jogada1 == "tesoura" && jogada2 == "pedra") {
    console.log("perdedor")
}
if (jogada1 == "papel" && jogada2 == "pedra") {
    console.log("vencdor")
} else if (jogada1 == "papel" && jogada2 == "tesoura") {
    console.log("perdedor" )
}

//seu código aqui