let opzione1;
let opzione2;
let opzione3;
let esatta;

let estratti = [];
let domandeEstratte = [];

let tempo;
let punteggio;
let intervaltempo;

let contaDomanda = 10;

let risposta = false;

let sport = [
    {
        id:0,
        domanda: "Da dove provengono i Giochi Olimpici?",
        esatta: "Antica Grecia",
        opzione1: "Egitto" ,
        opzione2: "Roma",
        opzione3: "Africa"
    },

    {
        id:1,
        domanda: "In quale sport eccelleva Carl Lewis?",
        esatta: "Atletica leggera",
        opzione1: "Salto in lungo",
        opzione2: "Lancio del disco",
        opzione3: "Tennis"
    },

    {
        id:2,
        domanda: "Come si chiama lo stadio di calcio del Real Madrid?",
        esatta: "Santiago Bernabeu",
        opzione1: "Allianz Arena",
        opzione2: "Camp Nou",
        opzione3: "Wembley Stadium"
    },

    {
        id:3,
        domanda: "Cosa significa FIFA?",
        esatta: "Fédération Internationale de Football Association",
        opzione1: "Fédération Ingles de Football Association", 
        opzione2: "Fondo Internationale Firmas Entrenadores",
        opzione3: "Fédération Internationale Fans Association"
    },

    {
        id:4, 
        domanda: "Quante Champions ha vinto il Real Madrd?",
        esatta: "13",
        opzione1: "10",
        opzione2: "7",
        opzione3: "18"
    },

    {
        id:5,
        domanda: "Che sport pratica Gemma Mengual?",
        esatta: "Nuoto sincronizzato",
        opzione1: "salto in alto",
        opzione2: "Tennis",
        opzione3: "Scherma"
    },

    



    {    
        id:6, 
        domanda: "Da quale isola proviene Cristiano Ronaldo?",
        esatta: "Madeira",
        opzione1: "Gran Canaria",
        opzione2: "Porto Santo",
        opzione3: "Tavira"
    },

    {
        id:7,
        domanda: "Chi ha vinto la Coppa del Mondo nel 2014?",
        esatta: "Germania",
        opzione1: "Francia",
        opzione2: "Barcellona",
        opzione3: "Italia"
    },

    {
        id:8, 
        domanda: "Quale sport pratica Toni Elias?",
        esatta: "Motociclismo",
        opzione1: "Karate",
        opzione2: "Basket",
        opzione3: "Golf"
    },

    {
        id:9,
        domanda: "Quale stile di nuoto è il più lento?",
        esatta: "Rana",
        opzione1: "Farfalla",
        opzione2: "Stile libero",
        opzione3: "Dorso"
    },
    {
        id:10, 
        domanda: "Dove è stata inventata la pallavolo?",
        esatta: "Stati Uniti", 
        opzione1: "Grecia",
        opzione2: "Spagna",
        opzione3: "Inghilterra" 
    },

    {
        id:11, 
        domanda: "Quanti punti vale un tiro libero nel basket?",
        esatta: "1",
        opzione1: "3",
        opzione2: "2",
        opzione3: "4"
    },



    



  

    {
        id:12, 
        domanda: "Qual è la durata di una partita di calcio?",
        esatta: "90 minuti",
        opzione1: "45 minuti",
        opzione2: "60 minuti",
        opzione3: "120 minuti"
    },

    {
        id:13, 
        domanda: "Dove è stato inventato il ping-pong?",
        esatta: "Inghilterra",
        opzione1: "Svezia",
        opzione2: "Germania",
        opzione3: "Austria"
    },

    {
        id:14, 
        domanda: "Quale città ha ospitato le Olimpiadi nel 2020?",
        esatta: "Tokyo",
        opzione1: "Qatar",
        opzione2: "Dubai",
        opzione3: "Torino"
    },

    {
        id:15, 
        domanda: "Quale giocatore di calcio ha vinto il maggior numero di Mondiali con la sua squadra?",
        esatta: "Pelé",
        opzione1: "Ronaldo",
        opzione2: "Maradona",
        opzione3: "Messi"
    },

    {
        id:16, 
        domanda: "Per quale squadra ha giocato Kobe Bryant dal 1996?",
        esatta: "Los Angeles",
        opzione1: "Miami Heat",
        opzione2: "Chicago Bulls",
        opzione3: "Boston Celtics"
    },

    {
        id:17, 
        domanda: "Chi è l’atleta con il maggior numero di medaglie d’oro olimpiche?",
        esatta: "Michael Phelps",
        opzione1: "Edoardo Mangiarotti",
        opzione2: "Carl Lewis",
        opzione3: "Larisa Latynina"
    },

    




   
    {
        id:18, 
        domanda: "Quale campione americano di boxe è rimasto imbattuto nel corso della sua carriera?",
        esatta: "Rocky Marciano",
        opzione1: "Tyson Fury",
        opzione2: "john Sullivan",
        opzione3: "James Corbett"
    },	

    {
        id:19, 
        domanda: "Dove si è svolta la Coppa del Mondo FIFA nel 1994?",
        esatta: "Italia",
        opzione1: "Portogallo",
        opzione2: "Brasile",
        opzione3: "Francia"
    },

    {
        id:20, 
        domanda: "Come è morto Ayrton Senna?",
        esatta: "Incidente d’auto durante il Gran Premio di San Marino",
        opzione1: "Malore durante il Gran Premio di San Marino",
        opzione2: "Attentato durante il Gran Premio di San Marino",
        opzione3: "Attacco di cuore nel sonno"
    },

    {
        id:21, 
        domanda: "Quale paese ha vinto il maggior numero di Mondiali?",
        esatta: "Brasile",
        opzione1: "Spagna",
        opzione2: "Italia",
        opzione3: "Francia"
    },

    {
        id:22, 
        domanda: "Di che paese è il calciatore Luis Suarez?",
        esatta: "Uruguay",	
        opzione1: "Argentina",
        opzione2: "Brasile",
        opzione3: "Portogallo"
    },

    {
        id:23, 
        domanda: "In quali Olimpiadi la tennista Serena Williams ha vinto la sua prima medaglia d’oro?",
        esatta: "Londra 2012",
        opzione1: "Rio 2016",
        opzione2: "Pechino 2008",
        opzione3: "Tokyo 2020"
    },
   



    {
        id:24, 
        domanda: "Cos’è il derby?",
        esatta: "Una partita giocata da 2 squadre della stessa città o regione",
        opzione1: "Una partita giocata tra la prima e la seconda classificata",
        opzione2: "Uno schema di gioco per permettere alla punta di segnare",
        opzione3: "Una partita giocata tra la prima e l’ultima classificata"
    },

    {
        id:25, 
        domanda: "Qual è la squadra NBA con il maggior numero di titoli di campionato?",
        esatta: "Boston Celtics",
        opzione1: "Los Angeles Lakers",
        opzione2: "Miami Heat",
        opzione3: "Cleveland Cavaliers"
    },

    
    {
        id:26, 
        domanda: "Chi è stata la prima donna a correre una maratona?",
        esatta: "Kathrine Switzer",
        opzione1: "Nina Kuscsik",
        opzione2: "Elaine Pederson",
        opzione3: "Ginny Collins"
    },

    {
        id:27, 
        domanda: "Con quale frequenza si svolgono i Giochi Olimpici?",
        esatta: "Ogni 4 anni",
        opzione1: "Ogni anno",
        opzione2: "Ogni 5 anni",
        opzione3: "Ogni 2 anni"
    },

    {
        id:28, 
        domanda: "Dove è stato inventato il basket?",
        esatta: "Massachusetts",
        opzione1: "California",
        opzione2: "Illinois",
        opzione3: "Maine"
    },

    {
        id:29, 
        domanda: "Qual è il paese con il maggior numero di campionati mondiali di calcio femminili?",
        esatta: "Stati Uniti",
        opzione1: "Italia",
        opzione2: "Spagna",
        opzione3: "Francia"
    },

    



    {
        id:30, 
        domanda: "Qual è il paese con il maggior numero di medaglie olimpiche?",
        esatta: "Stati Uniti",
        opzione1: "Cina",
        opzione2: "Brasile",
        opzione3: "Gran Bretagna"
    },

    {
        id:31, 
        domanda: "Per quale squadra ha giocato Francesco Totti nel corso della sua carriera?",
        esatta: "Roma",
        opzione1: "Juventus",
        opzione2: "Lazio",
        opzione3: "Milan"
    },

    {
        id:32, 
        domanda: "Che sport pratica Simone Biles?",
        esatta: "Ginnastica artistica",
        opzione1: "Nuoto sincronizzato",
        opzione2: "Pallavolo",
        opzione3: "Scherma"
    },

    {
        id:33, 
        domanda: "Dove è nato Rafael Nadal?",
        esatta: "Spagna",
        opzione1: "Messico",
        opzione2: "Portogallo",
        opzione3: "America"
    },

    {
        id:34, 
        domanda: "Qual è la mascotte del Giro d’Italia?",
        esatta: "Lupo",
        opzione1: "Gufo",
        opzione2: "Mucca",
        opzione3: "Gallo"
    },

   







    {
        id:35, 
        domanda: "Come si chiama la sfida di scalare le montagne più alte di ogni continente?",
        esatta: "Sette vette",
        opzione1: "La scalata della morte",
        opzione2: "Il viaggio senza ritorno",
        opzione3: "Settimo cielo"
    },

    ];


function estraiNumeri() {
    for (var i = 0; i < 4; i++) {
        estratti[i] = Math.floor(Math.random() * 4);
        for (var j = 0; j < i; j++) {
            if (estratti[i] == estratti[j]) {
                i--;
                break;
            }
        }
    }
}


function controllaRisposta(opzione) {
    let op = document.getElementById(opzione);
    if (esatta.id == op.id && risposta == false) {
        esatta.style.backgroundColor = 'green';
        risposta = true;
        punteggio.textContent++;
        clearInterval(intervaltempo);
    }
    else {
        if (risposta == false) {
            op.style.backgroundColor = 'red';
            risposta = true;
            clearInterval(intervaltempo);
        }

    }
}

function cambiaFreccia() {
    if (esatta.style.backgroundColor == 'green' || opzione1.style.backgroundColor == 'red' || opzione2.style.backgroundColor == 'red' || opzione3.style.backgroundColor == 'red') {
        cambiaDomanda();
    }
}

function cambiaDomanda() {
    if (contaDomanda == 0) {
        let risultato = document.createElement('div');
        let lbnick = document.createElement('h2');
        let nickName = sessionStorage.getItem('nick');

        lbnick.textContent = nickName;
        risultato.id = 'risultato';

        let lbpunteggio = document.createElement('label');
        lbpunteggio.textContent = 'Il tuo punteggio è: ' + punteggio.textContent;

        let a = document.createElement('a');
        a.href = './categorie.html';

        let btn = document.createElement('button');
        btn.id = 'btngioca';
        btn.textContent = 'Gioca ancora';

        risultato.appendChild(lbnick);
        risultato.appendChild(lbpunteggio);
        a.appendChild(btn);
        risultato.appendChild(a);
        document.getElementById('bdy').appendChild(risultato);
        document.getElementById('main').style.opacity = '0.2';
        return;
    }
    let n = Math.floor(Math.random() * 37);
    for (let i = 0; i < domandeEstratte.length; i++) {
        if (n == domandeEstratte[i]) {
            cambiaDomanda();
            return;
        }
    }
    domandeEstratte.push(n);
    estraiNumeri();

    let domanda = document.getElementById('domanda');
    opzione1 = document.querySelector('#op' + estratti[0]);
    opzione2 = document.querySelector('#op' + estratti[1]);
    opzione3 = document.querySelector('#op' + estratti[2]);
    esatta = document.querySelector('#op' + estratti[3]);

    domanda.textContent = sport[n].domanda;
    opzione1.textContent = sport[n].opzione1;
    opzione2.textContent = sport[n].opzione2;
    opzione3.textContent = sport[n].opzione3;
    esatta.textContent = sport[n].esatta;

    opzione1.style.backgroundColor = 'brown';
    opzione2.style.backgroundColor = 'brown';
    opzione3.style.backgroundColor = 'brown';
    esatta.style.backgroundColor = 'brown';

    risposta = false;
    tempo = document.getElementById('tempo');
    tempo.textContent = 15;
    intervaltempo = setInterval('timer()', 1000);
    contaDomanda -= 1;
}


function timer() {
    if (tempo.textContent != 1) {
        tempo.textContent -= 1;
    }
    else {
        esatta.style.backgroundColor = 'green';
        risposta = true;
        clearInterval(intervaltempo);
        tempo.textContent = 'Tempo scaduto';
    }

}

document.addEventListener('DOMContentLoaded', function () {
    cambiaDomanda();
    tempo = document.getElementById('tempo');
    tempo.textContent = 15;

    punteggio = document.getElementById('score');
    punteggio.textContent = 0;

    document.getElementById('nick').textContent = sessionStorage.getItem('nick');

    // intervaltempo = setInterval('timer()',1000);
});
    