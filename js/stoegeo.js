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

let storiageografia = [
    {
        id:0,
        domanda: "Di quale stato fanno parte le Hawaii?",
        esatta: "Stati Uniti",
        opzione1: "Giappone" ,
        opzione2: "Messico",
        opzione3: "Cina"
    },

    {
        id:1,
        domanda: "Quanti stati ci sono negli Stati Uniti?",
        esatta: "50",
        opzione1: "48",
        opzione2: "38",
        opzione3: "45"
    },

    {
        id:2,
        domanda: "Di che anno è la Costituzione italiana?",
        esatta: "1948",
        opzione1: "1945",
        opzione2: "1968",
        opzione3: "1922"
    },

    {
        id:3,
        domanda: "Qual è il fiume più lungo d’Italia?",
        esatta: "Po",
        opzione1: "Tevere", 
        opzione2: "Arno",
        opzione3: "Adige"
    },

    {
        id:4, 
        domanda: "Qual è l’oceano più grande del mondo?",
        esatta: "Oceano Pacifico",
        opzione1: "Oceano Atlantico",
        opzione2: "Oceano Indiano",
        opzione3: "Oceano Artico"
    },

    {
        id:5,
        domanda: "Quando è nata la Repubblica italiana?",
        esatta: "2 giugno 1946",
        opzione1: "20 giugno 1948",
        opzione2: "15 agosto 1968",
        opzione3: "27 aprile 1945"
    },

    



    {    
        id:6, 
        domanda: "Dove è stata usata la prima bomba atomica in un conflitto armato?",
        esatta: "Hiroshima",
        opzione1: "Nagasaki",
        opzione2: "Cernobyl",
        opzione3: "Corea del nord"
    },

    {
        id:7,
        domanda: "Quando è finita la Seconda Guerra Mondiale?",
        esatta: "1945",
        opzione1: "1948",
        opzione2: "1918",
        opzione3: "1933"
    },

    {
        id:8, 
        domanda: "Come è morto Hitler?",
        esatta: "Suicidio",
        opzione1: "Ucciso da un collaboratore",
        opzione2: "Morto di vecchiaia",
        opzione3: "Soffocamento"
    },

    {
        id:9,
        domanda: "Quando è arrivato l’uomo sulla luna per la prima volta?",
        esatta: "1969",
        opzione1: "1980",
        opzione2: "1990",
        opzione3: "2000"
    },
    {
        id:10, 
        domanda: "Che lingue si parlano in Svizzera?",
        esatta: "Francese italiano tedesco romancio", 
        opzione1: "tedesco inglese spagnolo ",
        opzione2: "Spagnolo tedesco francese",
        opzione3: "Italiano spagnolo tedesco" 
    },

    {
        id:11, 
        domanda: "In che anno è stata scoperta l’America?",
        esatta: "1492",
        opzione1: "1942",
        opzione2: "1294",
        opzione3: "1888"
    },



    



   
    {
        id:12, 
        domanda: "Qual è il paese più popolato del mondo?",
        esatta: "Cina",
        opzione1: "Brasile",
        opzione2: "Russia",
        opzione3: "Argentina"
    },

    {
        id:13, 
        domanda: "Qual è la lingua più parlata al mondo?",
        esatta: "Cinese mandarino",
        opzione1: "Inglese",
        opzione2: "Spagnolo",
        opzione3: "Italiano"
    },

    {
        id:14, 
        domanda: "Dove è il deserto del Gobi?",
        esatta: "Asia",
        opzione1: "Cina",
        opzione2: "Africa",
        opzione3: "Messico"
    },

    {
        id:15, 
        domanda: "In quale anno sono state create le Nazioni Unite (ONU)?",
        esatta: "1945",
        opzione1: "1968",
        opzione2: "1922",
        opzione3: "1915"
    },

    {
        id:16, 
        domanda: "Quali potenze si sono scontrate nelle guerre puniche?",
        esatta: "Roma e Cartagine",
        opzione1: "Messina e Atene",
        opzione2: "Pisa e Livorno",
        opzione3: "Napoli e Malta"
    },

    {
        id:17, 
        domanda: "Qual è l’isola più grande del mondo?",
        esatta: "Groenlandia",
        opzione1: "Isola di Sumatra",
        opzione2: "Gran Bretagna",
        opzione3: "Nuova Guinea"
    },

    




   
    {
        id:18, 
        domanda: "In che anno è stato ucciso John F. Kennedy?",
        esatta: "1963",
        opzione1: "1968",
        opzione2: "1980",
        opzione3: "1992"
    },	

    {
        id:19, 
        domanda: "Lo stretto di Gibilterra separa la Spagna da quale paese?",
        esatta: "Marocco",
        opzione1: "Algeria",
        opzione2: "Portogallo",
        opzione3: "Francia"
    },

    {
        id:20, 
        domanda: "Come è morto Luigi XVI di Francia?",
        esatta: "Decapitato",
        opzione1: "Avvelenato",
        opzione2: "Annegato",
        opzione3: "Accoltellato"
    },

    {
        id:21, 
        domanda: "Chi è stato l’ultimo marito di Cleopatra?",
        esatta: "Marco Antonio",
        opzione1: "Tolomeo",
        opzione2: "Giulio Cesare",
        opzione3: "Nerone"
    },

    {
        id:22, 
        domanda: "Quale era il nome del Dio del sole nell’antico Egitto?",
        esatta: "Ra",	
        opzione1: "Anubi",
        opzione2: "Osiride",
        opzione3: "Iside"
    },

    {
        id:23, 
        domanda: "In quale anno è stato creato il World Wide Web?",
        esatta: "1991",
        opzione1: "2000",
        opzione2: "1985",
        opzione3: "2005"
    },
   



    

    {
        id:24, 
        domanda: "Come è morto Giulio Cesare?",
        esatta: "Assassinato",
        opzione1: "Suicidio",
        opzione2: "Avvelenamento",
        opzione3: "Nel sonno"
    },

    {
        id:25, 
        domanda: "Chi è stato il primo presidente degli Stati Uniti?",
        esatta: "George Washington",
        opzione1: "Roosevelt",
        opzione2: "Reagan",
        opzione3: "Nixon"
    },

    
    {
        id:26, 
        domanda: "Come si chiama la famosa battaglia in cui fu sconfitto Napoleone?",
        esatta: "Battaglia di Waterloo",
        opzione1: "Battaglia di Lipsia",
        opzione2: "Battaglia di Fiume",
        opzione3: "Battaglia di Lepanto"
    },

    {
        id:27, 
        domanda: "Chi ha scritto la Repubblica?",
        esatta: "Platone",
        opzione1: "Socrate",
        opzione2: "Kant",
        opzione3: "Aristotele"
    },

    {
        id:28, 
        domanda: "In che anno è stata sciolta l’Unione Sovietica?",
        esatta: "1991",
        opzione1: "1999",
        opzione2: "1971",
        opzione3: "1988"
    },

    {
        id:29, 
        domanda: "Quale conflitto si è concluso dopo la firme del Trattato di Versailles?",
        esatta: "La prima guerra mondiale",
        opzione1: "La guerra fredda",
        opzione2: "La guerra civile spagnola",
        opzione3: "La seconda guerra mondiale"
    },

    



    {
        id:30, 
        domanda: "In quale anno si è verificato il genocidio in Ruanda?",
        esatta: "1994",
        opzione1: "1984",
        opzione2: "2004",
        opzione3: "1969"
    },

    {
        id:31, 
        domanda: "Qual è la capitale delle Filippine?",
        esatta: "Manila",
        opzione1: "Hanoi",
        opzione2: "Islamabad",
        opzione3: "Rabat"
    },

    {
        id:32, 
        domanda: "Quale è stato il primo paese ad approvare il suffragio femminile?",
        esatta: "Nuova Zelanda",
        opzione1: "Svezia",
        opzione2: "Italia",
        opzione3: "Finlandia"
    },

    {
        id:33, 
        domanda: "Quale presidente sovietico ha istituito la Perestroika?",
        esatta: "Gorbaciov",
        opzione1: "Stalin",
        opzione2: "Lenin",
        opzione3: "Andropov"
    },

    {
        id:34, 
        domanda: "Quanti anni è durata la Guerra dei 100 anni?",
        esatta: "116 anni",
        opzione1: "99 anni",
        opzione2: "51 anni",
        opzione3: "101 anni"
    },

    {
        id:35, 
        domanda: "chi ha vinto la guerra del Vietnam?",
        esatta: "Vietnam del Nord",
        opzione1: "Vietnam del Sud",
        opzione2: "Stati Uniti",
        opzione3: "Unione Sovietica"
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

    domanda.textContent = storiageografia[n].domanda;
    opzione1.textContent = storiageografia[n].opzione1;
    opzione2.textContent = storiageografia[n].opzione2;
    opzione3.textContent = storiageografia[n].opzione3;
    esatta.textContent = storiageografia[n].esatta;

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
    