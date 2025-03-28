function somaNumeros2() {
    let seconds = 10;
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(() => {
        if (seconds > 0) {
            countdownElement.textContent = seconds + ' segundos restantes';
            seconds--;
        } else {
            countdownElement.textContent = 'Foguete lançado! 🚀';
            clearInterval(interval);
        }
    }, 1000);
}

somaNumeros2();