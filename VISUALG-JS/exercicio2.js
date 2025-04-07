function exercicio2() {
    let quantidade = 0;
    let soma = 0;

    numeroUm = parseInt(prompt("Informe o primeiro número: "));
    numeroDois = parseInt(prompt("Informe o segundo número: "));

    if (numeroUm > numeroDois) {
        alert("O primeiro número é maior: " + numeroUm);
    } else if (numeroUm > numeroDois) {
        alert("O segundo número é maior: " + numeroDois);
    } else {
        alert("Os números são iguais.")
    }
}