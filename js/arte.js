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

let arte = [
    {
        id: 0,
        domanda: "Qual è stato il primo film Disney?",
        esatta: "Biancaneve",
        opzione1: "Cenerentola",
        opzione2: "Il re leone",
        opzione3: "La bella e la bestia"
    },

    {
        id: 1,
        domanda: "Chi ha scritto Cent’anni di solitudine?",
        esatta: "Gabriel Garcia Marquez",
        opzione1: "Federico Garcia Lorca",
        opzione2: "Miguel de Unamuno",
        opzione3: "Carlos Ruiz Zafòn"
    },

    {
        id: 2,
        domanda: "Chi è l’autore de L’Odissea?",
        esatta: "Omero",
        opzione1: "Ariosto",
        opzione2: "Publio Virgilio Marone",
        opzione3: "Ulisse"
    },

    {
        id: 3,
        domanda: "Di quale gruppo è la canzone Let it Be?",
        esatta: "Beatles",
        opzione1: "Queen",
        opzione2: "Rolling Stones",
        opzione3: "Pink Floyd"
    },

    {
        id: 4,
        domanda: "Chi ha cantato la canzone Candle in the wind alla principessa Diana?",
        esatta: "Elton John",
        opzione1: "David Bowie",
        opzione2: "Sting",
        opzione3: "George Michael"
    },

    {
        id: 5,
        domanda: "Di quale pittore è L’Urlo?",
        esatta: "Edvard Munch",
        opzione1: "Van Gogh",
        opzione2: "Gauguin",
        opzione3: "Picasso"
    },





    {
        id: 6,
        domanda: "Di che filosofo è l’idea del mito della Caverna?",
        esatta: "Platone",
        opzione1: "Socrate",
        opzione2: "Aristotele",
        opzione3: "Pitagora"
    },

    {
        id: 7,
        domanda: "Chi è l’autore di Sogno di una notte di mezza estate?",
        esatta: "William Shakespeare",
        opzione1: "Dickens",
        opzione2: "Oscar Wilde",
        opzione3: "Thomas Hardy"
    },

    {
        id: 8,
        domanda: "Dove è nato lo scrittore Julio Cortazar?",
        esatta: "Argentina",
        opzione1: "Venezuela",
        opzione2: "Messico",
        opzione3: "Lisbona"
    },

    {
        id: 9,
        domanda: "Qual è l’opera letteraria più famosa di Antoine de Saint-Exupéry?",
        esatta: "Il piccolo principe",
        opzione1: "L’aviatore",
        opzione2: "Pilota di guerra",
        opzione3: "La cittadella"
    },
    {
        id: 10,
        domanda: "Da quale lingua deriva lo spagnolo?",
        esatta: "Latino",
        opzione1: "Greco",
        opzione2: "Volgare",
        opzione3: "Portoghese"
    },

    {
        id: 11,
        domanda: "A quanti anni corrisponde un lustro?",
        esatta: "5 anni ",
        opzione1: "1 anno",
        opzione2: "10 anni",
        opzione3: "100 anni"
    },







    {
        id: 12,
        domanda: "Di chi è la canzone Canzone?",
        esatta: "Lucio Dalla",
        opzione1: "Lucido Battisti",
        opzione2: "Zucchero",
        opzione3: "Claudio Baglioni"
    },

    {
        id: 13,
        domanda: "Chi è considerato il Re del Rock?",
        esatta: "Elvis Presley",
        opzione1: "Mick Jagger",
        opzione2: "Freddie Mercury",
        opzione3: "Jon Bon Jovi"
    },

    {
        id: 14,
        domanda: "Da quale genere proviene il rock?",
        esatta: "Blues",
        opzione1: "Jazz",
        opzione2: "Folk",
        opzione3: "Tribale"
    },

    {
        id: 15,
        domanda: "In quale anno si è svolto il Festival di Woodstock?",
        esatta: "1969",
        opzione1: "1950",
        opzione2: "1989",
        opzione3: "1997"
    },

    {
        id: 16,
        domanda: "Chi ha diretto il film 2001:Odissea nello spazio?",
        esatta: "Stanley Kubrick",
        opzione1: "Robert Altman",
        opzione2: "Martin Scorsese",
        opzione3: "Federico Fellini"
    },

    {
        id: 17,
        domanda: "Qual è l’opera più famosa dello scrittore Albert Camus?",
        esatta: "Lo straniero",
        opzione1: "La peste",
        opzione2: "Il mito di Sisifo",
        opzione3: "La morte felice"
    },







    {
        id: 18,
        domanda: "Chi è l’autore del fumetto Mafalda?",
        esatta: "Quino",
        opzione1: "Roberto Fontanarrosa",
        opzione2: "Antonio Mingote",
        opzione3: "Jorge Timossi"
    },

    {
        id: 19,
        domanda: "Per quale film l’attrice Angelina jolie ha vinto l’Oscar?",
        esatta: "Ragazze interrotte",
        opzione1: "Mr & Mrs Smith",
        opzione2: "Tomb Raider",
        opzione3: "Original Sin"
    },

    {
        id: 20,
        domanda: "Chi ha scritto la trilogia del Signore degli Anelli?",
        esatta: "J.R.R Tolkien",
        opzione1: "J.K Rolwling",
        opzione2: "Suzanne Collins",
        opzione3: "Shonda Rhimes"
    },

    {
        id: 21,
        domanda: "A quale stile appartiene El aquelarre di Francisco de Goya?",
        esatta: "Romanticismo",
        opzione1: "Espressionismo",
        opzione2: "Astrattismo",
        opzione3: "Futurismo"
    },

    {
        id: 22,
        domanda: "Come è morto Vincent Van Gogh?",
        esatta: "Suicidio",
        opzione1: "Avvelenamento",
        opzione2: "Annegamento",
        opzione3: "Omicidio"
    },

    {
        id: 23,
        domanda: "Chi ha interpretato Chandler nella serie di successo Friends?",
        esatta: "Matthew Perry",
        opzione1: "Paul Rudd",
        opzione2: "Colin Firth",
        opzione3: "Neil Patrick Harris"
    },




    {
        id: 24,
        domanda: "Qual è stato il primo lungometraggio del regista Orson Welles?",
        esatta: "Quarto potere",
        opzione1: "Rapporto confidenziale",
        opzione2: "La signora di Shangai",
        opzione3: "L’orgoglio degli Amberson"
    },

    {
        id: 25,
        domanda: "Quanto è alto il David di Michelangelo?",
        esatta: "Più di 5 metri",
        opzione1: "Più di 2 metri",
        opzione2: "Quasi 8 metri",
        opzione3: "Meno di 1 metro"
    },


    {
        id: 26,
        domanda: "In quale museo di trova il Guernica di Picasso?",
        esatta: "Museo Reina Sofia di Madrid",
        opzione1: "Galleria degli Uffizi di Firenze",
        opzione2: "Museo del Prado di Madrid",
        opzione3: "Museo del Louvre di Parigi"
    },

    {
        id: 27,
        domanda: "Chi ha scritto la Metamorfosi?",
        esatta: "Franz Kafka",
        opzione1: "Albert Camus",
        opzione2: "Jean-Paul Sartre",
        opzione3: "Dostoevskij"
    },

    {
        id: 28,
        domanda: "Come si chiama il movimento letterario al quale apparteneva Gabriel Garcia Marquez?",
        esatta: "Realismo magico",
        opzione1: "Secolo d’oro",
        opzione2: "Romanticismo",
        opzione3: "La generazione del 98"
    },

    {
        id: 29,
        domanda: "In che anno è uscito l’ultimo episodio della serie The Office?",
        esatta: "2013",
        opzione1: "2018",
        opzione2: "2010",
        opzione3: "2020"
    },





    {
        id: 30,
        domanda: "Come si chiama l’opera letteraria più famosa di Charles Dickens?",
        esatta: "Oliver Twist",
        opzione1: "David Copperfield",
        opzione2: "Tempi difficili",
        opzione3: "Canto di Natale"
    },

    {
        id: 31,
        domanda: "Dove è nato il pittore Gustav Klimt?",
        esatta: "Austria",
        opzione1: "Germania",
        opzione2: "Praga",
        opzione3: "Ungheria"
    },

    {
        id: 32,
        domanda: "Come si chiamava la moglie dello scrittore e sceneggiatore F. Scott Fitgerald?",
        esatta: "Zelda",
        opzione1: "Marta",
        opzione2: "Julie",
        opzione3: "Sarah"
    },

    {
        id: 33,
        domanda: "Come si chiama il cane di Tintin?",
        esatta: "Milù",
        opzione1: "Snoopy",
        opzione2: "Pluto",
        opzione3: "Nebbia"
    },

    {
        id: 34,
        domanda: "Di quale razza è la cagnolina protagonista del film Lassie?",
        esatta: "Rough Collie a pelo lungo",
        opzione1: "Border Collie",
        opzione2: "Bovaro del Bernese",
        opzione3: "Welsh Corgi pembroke"
    },

    {
        id: 35,
        domanda: "Di chi è la canzone London Calling?",
        esatta: "The Clash",
        opzione1: "Duran Duran",
        opzione2: "Spandau Ballet",
        opzione3: "The police"
    },






    {
        id: 36,
        domanda: "A quale periodo apparteneva il compositore e musicista Johann Sebastian Bach?",
        esatta: "Barocco",
        opzione1: "Gotico",
        opzione2: "Romanticismo",
        opzione3: "Classicismo"
    },

    {
        id: 37,
        domanda: "Quale attrice ha recitato nel film Colazione da Tiffany?",
        esatta: "Audrey Hepburn",
        opzione1: "Marilyn Monroe",
        opzione2: "Sophia Loren",
        opzione3: "Ingrid Bergman"
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

    domanda.textContent = arte[n].domanda;
    opzione1.textContent = arte[n].opzione1;
    opzione2.textContent = arte[n].opzione2;
    opzione3.textContent = arte[n].opzione3;
    esatta.textContent = arte[n].esatta;

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
    