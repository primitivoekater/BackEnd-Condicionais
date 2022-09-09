const alturaEmCm = 185;
if (alturaEmCm <= 180) { console.log("**REPROVADO**") }
else
    if (alturaEmCm > 180 && alturaEmCm <= 185) {
        console.log("LIBERO")
    }
if (alturaEmCm > 185 && alturaEmCm <= 195) {
    console.log("PONTEIRO")
}
if (alturaEmCm > 195 && alturaEmCm <= 205) {
    console.log("OPOSTO")
}
else if (alturaEmCm > 205) {
    console.log("CENTRAL");
}




