function startDailyCountdown() {
    const phrases = [
        '"Quando estou com você, sinto que posso fazer qualquer coisa."\n - Enrolados',
        '"Algumas pessoas valem a pena derreter."\n - Frozen',
        '"Eu olhei para você e sabia. Você era meu lar."\n - Procurando Nemo',
        '"O amor é a única coisa que podemos sentir que transcende tempo e espaço."\n - Interestelar',
        '"Você não precisa procurar além do seu próprio coração para encontrar o que é real."\n - O Rei Leão 2',
        '"Eu te escolho. E vou te escolher sempre. Sem pausa, sem dúvida, num piscar de olhos."\n - Pokémon: O Filme',
        '"O amor é colocar as necessidades de alguém à frente das suas."\n - Frozen',
        '"Eu te amo. Eu sou quem eu sou por sua causa. Você é toda razão, toda esperança e todo sonho que eu já tive."\n - Diário de uma paixão',
        '"Eu sabia o momento em que te conheci, que havia algo de novo. Algo que eu nunca soube que precisava."\n - A Princesa e o Sapo',
        '"O amor verdadeiro é quando você dá à outra pessoa o poder de destruí-lo, mas confia que ela não fará isso."\n - Shrek',
        '"Ame profundamente. O amor sempre encontra um caminho."\n - Irmão Urso',
        '"O coração é uma bússola que sempre nos guia de volta ao lar, especialmente quando o lar é uma pessoa."\n - Moana',
        '"Meu coração pertence a você, agora e para sempre."\n - Tarzan',
        '"Você faz com que tudo pareça possível. Você é meu milagre."\n - A Bela e a Fera',

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
            `${hours}h ${minutes}m ${seconds}s restantes para outra frase`;
    }

    updatePhrase();
    updateCountdown();

    setInterval(updateCountdown, 1000);

    setInterval(updatePhrase, 24 * 60 * 60 * 1000); 
}

startDailyCountdown();