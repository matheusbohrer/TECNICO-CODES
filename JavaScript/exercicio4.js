function somaNumeros4() {
    let numeros = [];

    for (let i = 0; i < 4; i++) {
        let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));

        if (isNaN(numero)) {
            alert("Por favor, informe um número inteiro válido.");
            i--;
        } else {
            numeros.push(numero);
        }
    }

    numeros.sort((a, b) => b - a);

    alert(`Os números em ordem decrescente são: ${numeros.join(", ")}`);
}