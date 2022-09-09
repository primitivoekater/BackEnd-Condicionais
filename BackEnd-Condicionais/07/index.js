const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000001; //emCentavos
if (aposentada == true || portadoraDeDoenca == true) {
    console.log("ISENTA")
} else if (totalDeRendimentos <= 3000000) {
    console.log(" **VAZA LEAO! JA TA DIFICIL SEM VOCE** ")
} else if (totalDeRendimentos > 3000000) {
    console.log("**PEGA LEAO**");
}
// #ImpostoÉRoubo!


