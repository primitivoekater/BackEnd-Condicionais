//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;
if (idadeDoAluno >= 18 && possuiResponsavel == true) {
    console.log("rematricula realizada com sucesso")
} else console.log("não é possivel realizar rematricual ")