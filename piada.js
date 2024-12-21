function startDailyCountdown(){
    const piadas = [
    {
        titulo: "Matutos e merda",
        url:"piadas/matuto e merda.m4a",
        id:"0"
    },
    {
        titulo: "Brasileiro, alemão e argentino capturados",
        url:"piadas/alemão, brasileiro e Argentina capturados.m4a",
        id:"2"
    },
    {
        titulo: "Jesus ta te olhando",
        url:"piadas/jesus tá te olhando.m4a",
        id:"1"
    },
    {
        titulo: "Titanic",
        url:"piadas/titanic.m4a",
        id:"3"
    
    },
    {
        titulo: "Arara",
        url:"piadas/arara.m4a",
        id:"4"
    },
    {
        titulo: "texas",
        url:"piadas/texas.m4a",
        id:"5"
    },
    {
        titulo: "papagaio ligador",
        url:"piadas/papagaio ligador.m4a",
        id:"6"
    },
    {
        titulo: "mosquito depressivo",
        url:"piadas/mosquito depressivo.m4a",
        id:"7"
    },
    {
        titulo: "mega sena",
        url:"piadas/mega sena.m4a",
        id:"8"
    },
    {
        titulo: "pedra na vara",
        url:"piadas/pedra na vara.m4a",
        id:"9"
    },
    {
        titulo: "zoologico",
        url:"piadas/zoologico.m4a",
        id:"10"
    },
    {
        titulo:"sommelier de bebida",
        url:"piadas/sommelier de bebida.m4a",
        id:"11"
    },
    {
        titulo: "pastor alemao",
        url:"piadas/pastor alemao.m4a",
        id:"12"
    },
    {
        titulo: "papagaio no aviao",
        url:"piadas/papagaio no aviao.m4a",
        id:"13"
    },
    {
        titulo:"papagaio bilingue",
        url:"piadas/papagaio bilingue.m4a",
        id:"14"
    }]
    
    function updatePhrase() {
        const now = new Date();
        const startDate = new Date("2024-12-20T22:00:00"); // Horário inicial às 22:00
        const timeSinceStart = now - startDate;
    
        // Número de dias considerando o horário das 22:00 como início de cada dia
        const daysSinceStart = Math.floor(timeSinceStart / (1000 * 60 * 60 * 24)); 
        const phraseIndex = daysSinceStart % piadas.length; // Obtem o índice da frase
        var audio = document.getElementById("audio");
        audio.querySelector("source").src = piadas[phraseIndex].url;
        audio.load();
        
    }
    
    function updateCountdown() {
        const now = new Date();
    
        // Calcula a próxima ocorrência das 22:00
        let nextUpdate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 22, 0, 0);
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
            `${hours}h ${minutes}m ${seconds}s restantes para outra piada`;
    }
    
    updatePhrase();
    updateCountdown();
    
    setInterval(updateCountdown, 1000);
    
    setInterval(updatePhrase, 24 * 60 * 60 * 1000);

    
}
startDailyCountdown();

emailjs.init('QMD1MVrwT1qJWPiL3'); // Substitua pelo seu User ID fornecido pelo EmailJS

    const btnSubmitRating = document.getElementById("submit-rating");

    btnSubmitRating.addEventListener("click", () => {
        const rating = document.getElementById("rating-input").value;

        // Dados a serem enviados pelo EmailJS
        const templateParams = {
            note: rating, // Nota do usuário
            email_to: "ptimbo652@gmail.com" // Email para onde deseja enviar
        };

        // Enviar o e-mail usando o serviço e o template configurado
        emailjs.send("service_vqqxq5c", "template_7buzczq", templateParams)
            .then(response => {
                alert('Nota enviada com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao enviar e-mail:', error);
                alert('Erro ao enviar a nota.');
            });
});
