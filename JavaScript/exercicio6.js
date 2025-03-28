function somaNumeros6() {
    let letra = prompt("Digite uma letra:").toLowerCase();

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