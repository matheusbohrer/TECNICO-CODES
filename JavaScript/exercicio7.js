function somaNumeros7() {
    let sabores = {
        "1": { nome: "Chocolate", preco: 1.50 },
        "2": { nome: "Morango", preco: 2.50 },
        "3": { nome: "Creme", preco: 2.50 },
        "4": { nome: "Manga", preco: 3.20 },
        "5": { nome: "Melancia", preco: 3.40 },
        "6": { nome: "Vanilla Ice", preco: 3.00 },
        "7": { nome: "Céu Azul", preco: 3.60 },
        "8": { nome: "Brownie", preco: 4.00 },
        "9": { nome: "Hawaiano", preco: 5.00 }
    };

    let escolha = prompt("Escolha um sabor digitando o número correspondente:\n1. Chocolate\n2. Morango\n3. Creme\n4. Manga\n5. Melancia\n6. Vanilla Ice\n7. Céu Azul\n8. Brownie\n9. Hawaiano");
    
    if (sabores[escolha]) {
        alert(`Você escolheu ${sabores[escolha].nome}. O preço é R$ ${sabores[escolha].preco.toFixed(2)}.`);
    } else {
        alert("Opção inválida. Tente novamente.");
    }
}
