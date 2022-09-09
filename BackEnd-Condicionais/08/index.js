const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;
if (idade < 18 || possuiPatologia == true || altura < 150) {
    console.log("**acesso negado**");
} else
    if (ehEstudante == true) {
        console.log("10 reais")
    } else if (ehEstudante == false) {
         console.log("20 reais")
    }

