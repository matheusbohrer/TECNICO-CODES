function somaNumeros2() {
    let seconds = 300;

    if (seconds > 0) {
        countdownElement.textContent = seconds + 'segundos restantes';
        seconds--;
        setTimeout(somaNumeros2, 1000);
    } else {
        countdownElement.textContent = 'Tempo esgotado';
    }
}

somaNumeros2();