function somaNumeros1() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = prompt("Digite um número (ou informe '0' para sair):");
        
        numero = Number(numero);

        if (isNaN(numero)) {
            alert("Por favor, informe um número válido.");
        } else {
            soma += numero;
        }

        if (numero == 0) {
            continuar = false;
        }
    }

    alert("A soma dos números é: " + soma);
}