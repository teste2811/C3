function startDailyCountdown(){
    const musicas = [
    {
            frase: '"Sempre que agradeço, eu me pergunto se eu mereço ter você perto de mim, e a cada sorriso é a certeza absoluta: Foi você que eu pedi"',
            url:"https://open.spotify.com/embed/track/2n1Zin11Ns2uXOsUif70GB?utm_source=generator"
    },
    {
        frase: '"Diga pra mim que é real, que eu te prometo meu melhor, fala pra mim o que eu quero ouvir, que tu sentiu o que eu senti"',
        url:"https://open.spotify.com/embed/track/2o2xhyri4aJUtgMGkf5P0J?utm_source=generator"
    },
    {
        frase: '"As quatro estrelas do meu céu são suas, e os oito postes da avenida são meus, e se você quisesse todos eles, te dava, lembra: Minha luz foi você quem me deu"',
        url:"https://open.spotify.com/embed/track/2nEJDIhWELTx90xLHp9RXk?utm_source=generator"
    },
    {
        frase: '"Com você, eu sonho de olho aberto, bebê, quero amar e sempre ver de perto você"',
        url:"https://open.spotify.com/embed/track/0lGOYi4wZiVc1arJJ4do0a?utm_source=generator"
    },
    {
        frase: '"Estar apaixonado é uma coisa louca, que alguém lhe causa e você mal dorme, se perto desse alguém a eternidade é pouca, distante, cada instante é um tempo enorme"',
        url:"https://open.spotify.com/embed/track/6e1R7lS7yojUz4gcCCW8Po?utm_source=generator"
    
    },
    {
        frase: '"Meu amor, eu te prometo a cada momento te fazer feliz. Meu amor, eu agradeço pra sempre o dia que eu te conheci"',
        url:"https://open.spotify.com/embed/track/3yiXy2ydZP9ZpsYxvUI6sO?utm_source=generator"
    },
    {
        frase: '"Vou sentar de frente ao tempo e ver tua pele ao tempo enrugar, te sentir cada segundo e te eternizar"',
        url:"https://open.spotify.com/embed/track/1pOQA335PsUEYaJ4Q33kjg?utm_source=generator"
    },
    {
        frase: '"Demorei pra encontrar alguém como você que soube conversar, que soube me entender. Então, fica perto de mim e esse amor nunca vai ter fim"',
        url:"https://open.spotify.com/embed/track/6hiKXxS7pgPKnKfCU7UJ6O?utm_source=generator"
    },
    {
        frase: '"Você é assim um sonho pra mim, quero te encher de beijos. Eu penso em você desde o amanhecer até quando eu me deito"',
        url:"https://open.spotify.com/embed/track/1mSxbLW7fKABfeY4lGpg0E?utm_source=generator"
    },
    {
        frase: '"O que há dentro do meu coração eu tenho guardado pra te dar, e todas as horas que o tempo tem pra me conceder são tuas até morrer"',
        url:"https://open.spotify.com/embed/track/3PlKQNlbL4767rND3HnqSI?utm_source=generator"
    },
    {
        frase: '"Toda paisagem fica cinza sem você, qualquer declaração de amor tão sem porquê, hoje, é por isso que eu agradeço ao céu estar com você"',
        url:"https://open.spotify.com/embed/track/6vARbzVXg90V8fYmgks5u3?utm_source=generator"
    },
    {
        frase:'"Olhe bem no fundo dos meus olhos e sinta a emoção que nascerá quando você me olhar. O universo conspira ao nosso favor, a consequência do destino é o amor e pra sempre vou te amar"',
        url:"https://open.spotify.com/embed/track/27Es7REkNYsWCMBoIbmwCW?utm_source=generator"
    }]
    
    function updatePhrase() {
        const now = new Date();
        const startDate = new Date("2024-12-25T21:10:00"); // Horário inicial às 22:00
        const timeSinceStart = now - startDate;
    
        // Número de dias considerando o horário das 22:00 como início de cada dia
        const daysSinceStart = Math.floor(timeSinceStart / (1000 * 60 * 60 * 24)); 
        const phraseIndex = daysSinceStart % musicas.length; // Obtem o índice da frase
        const phrase = document.getElementById("phrase");
        const musica = document.getElementById("musica");
        phrase.innerText = musicas[phraseIndex].frase;
        musica.src = musicas[phraseIndex].url;

        
    }
    
    function updateCountdown() {
        const now = new Date();
    
        // Calcula a próxima ocorrência das 22:00
        let nextUpdate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 10, 0);
        if (now.getHours() >= 22) {
            // Se já passou das 22:00, considera o próximo dia
            nextUpdate.setDate(nextUpdate.getDate() + 1);
        }
    
        const difference = nextUpdate - now;
    
        // Calcula horas, minutos e segundos restantes
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        document.getElementById("timer").innerText =
            `${hours}h ${minutes}m ${seconds}s restantes para outra música`;
    }
    
    updatePhrase();
    updateCountdown();
    
    setInterval(updateCountdown, 1000);
    
    setInterval(updatePhrase, 24 * 60 * 60 * 1000);

    
}
startDailyCountdown();