function exercicio1() {
    let quantidade = 0;
    let soma = 0;

    quantidade = parseInt(prompt("Informe a quantidade de maçãs desejada: "));

    if (quantidade >= 12) {
        soma = quantidade * 1.95;
        alert("O valor da compra é de R$" + soma);
    } else {
        soma = quantidade * 2.30;
        alert("O valor da compra é de R$" + soma);
    }
}