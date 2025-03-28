function somaNumeros5() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(numero)) {
        alert("Por favor, informe um número válido.");
        return;
    }

    let novoNumero = numero % 2 === 0 ? numero + 1 : numero - 1;

    alert(`O número transformado é: ${novoNumero}`);
}