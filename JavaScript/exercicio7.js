function somaNumeros7() {
    let sabor = prompt;

    sabor("1. Chocolate");
    sabor("2. Morango");
    sabor("3. Creme ");
    sabor("4. Manga");
    sabor("5. Melancia");
    sabor("6. Vanilla Ice");
    sabor("7. Céu Azu");
    sabor("8. Brownie");
    sabor("9. Hawaiano");
    

    if (!letra || letra.length !== 1 || !/[a-z]/.test(letra)) {
        alert("Por favor, digite apenas uma única letra.");
        return;
    }

    let vogais = ["a", "e", "i", "o", "u"];

    if (vogais.includes(letra)) {
        alert(`A letra "${letra}" é uma VOGAL.`);
    } else {
        alert(`A letra "${letra}" é uma CONSOANTE.`);
    }
}