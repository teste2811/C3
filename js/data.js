function startCountdown() {
    // Data-alvo: 5 de janeiro de 2024 às 00:00:00 no horário local
    const targetDate = new Date("2025-01-06T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime(); // Data atual
        const difference = targetDate - now; // Diferença em milissegundos

        // Se a diferença for menor que 0, já chegamos na data
        if (difference <= 0) {
            document.getElementById("timer").innerText = "Chegou o grande dia! 🎉";
            clearInterval(interval);
            return;
        }

        // Calcular os dias, horas, minutos e segundos restantes
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Atualizar o conteúdo do contador na página
        document.getElementById("timer").innerText =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Atualiza imediatamente e a cada segundo
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Inicia a contagem regressiva
startCountdown();
