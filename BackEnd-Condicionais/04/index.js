const ladoA = 3;
const ladoB = 3;
if (ladoA !== ladoB) { console.log("não é bucha") }
else
    if (ladoA === ladoB && ladoA + ladoB == 0) {
        console.log("bucha branca");
    } if (ladoA === ladoB && ladoA + ladoB == 2) {
        console.log("bucha às ");
    } if (ladoA === ladoB && ladoA + ladoB == 4) {
        console.log("bucha duque");
    } if (ladoA === ladoB && ladoA + ladoB == 6) {
        console.log("bucha terno");
    } if (ladoA === ladoB && ladoA + ladoB == 8) {
        console.log("bucha quadra");
    } if (ladoA === ladoB && ladoA + ladoB == 10) {
        console.log("bucha quina");
    } if (ladoA === ladoB && ladoA + ladoB == 12) {
        console.log("bucha sena" );
    }
