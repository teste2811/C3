function startDailyCountdown() {
    const phrases = [
        'Carolline, obrigado por exisitr na minha vida. Eu nunca senti nada igual. Meu coração amaVocê.',
        'Carolline,',
        'Carolline, obrigado',
        'Carolline, obrigado por',
        'Carolline, obrigado por exisitr',
        'Carolline, obrigado por exisitr na',
        'Carolline, obrigado por exisitr na minha',
        'Carolline, obrigado por exisitr na minha vida.',
        'Carolline, obrigado por exisitr na minha vida. Eu',
        'Carolline, obrigado por exisitr na minha vida. Eu nunca',
        'Carolline, obrigado por exisitr na minha vida. Eu nunca senti',
        'Carolline, obrigado por exisitr na minha vida. Eu nunca senti nada',
        'Carolline, obrigado por exisitr na minha vida. Eu nunca senti nada igual.',
        'Carolline, obrigado por exisitr na minha vida. Eu nunca senti nada igual. Meu',
        'Carolline, obrigado por exisitr na minha vida. Eu nunca senti nada igual. Meu coração',

    ];

    function updatePhrase() {
        const today = new Date();
        const startDate = new Date("2024-12-20T00:00:00");
        const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        const phraseIndex = daysSinceStart % phrases.length; 
        document.getElementById("phrase").innerText = phrases[phraseIndex];
    }

    function updateCountdown() {
        const now = new Date();
        const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); 
        const difference = nextMidnight - now;

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("timer").innerText =
            `${hours}h ${minutes}m ${seconds}s restantes para outra palavra`;
    }

    updatePhrase();
    updateCountdown();

    setInterval(updateCountdown, 1000);

    setInterval(updatePhrase, 24 * 60 * 60 * 1000); 
}

startDailyCountdown();
