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

let scienze = [
    {
        id:0,
        domanda: "Quando si sono estinti i dinosauri?",
        esatta: "Circa 65 milioni di anni fa",
        opzione1: "Circa 10 milioni di anni fa" ,
        opzione2: "Circa 100 mila anni fa",
        opzione3: "Circa 1 miliardo di anni fa"
    },

    {
        id:1,
        domanda: "Qual è il numero che viene dopo il 3,14 nel numero del pi greco?",
        esatta: "Il numero 1",
        opzione1: "Il numero 3",
        opzione2: "Il numero 7",
        opzione3: "Non ci sono numeri dopo il 3,14"
    },

    {
        id:2,
        domanda: "Secondo gli studiosi la ruota fu inventata nell'antica Mesopotamia da quale civiltà?",
        esatta: "Sumeri",
        opzione1: "Assiri",
        opzione2: "Babilonesi",
        opzione3: "Ittiti"
    },

    {
        id:3,
        domanda: "Qual è il processo di riproduzione asessuata grazie al quale da una singola cellula si formano 2 cellule figlie geneticamente identiche?",
        esatta: "Mitosi",
        opzione1: "Meiosi", 
        opzione2: "Simbiosi",
        opzione3: "Osmosi"
    },

    {
        id:4, 
        domanda: "Il teorema di di Ruffini vale in quale campo della scienza?",
        esatta: "Matematica",
        opzione1: "Fisica",
        opzione2: "Chimica",
        opzione3: "Geometria"
    },

    {
        id:5,
        domanda: "In botanica, il pomodoro è un frutto, una verdura o un ortaggio?",
        esatta: "Frutto",
        opzione1: "Verdura",
        opzione2: "Ortaggio",
        opzione3: "Tubero"
    },

    {
        id:6, 
        domanda: "Quanti elementi ha la tavola periodica?",
        esatta: "118",
        opzione1: "119",
        opzione2: "120",
        opzione3: "117"
    },

    {
        id:7,
        domanda: "Quanti grammi sono 100 millilitri?",
        esatta: "100 grammi",
        opzione1: "1000 grammi",
        opzione2: "10 grammi",
        opzione3: "0,1 grammi"
    },

    {
        id:8, 
        domanda: "A che velocità viaggia la luce?",
        esatta: "300.000 km/s",
        opzione1: "350.000 km/s",
        opzione2: "280.000 km/s",
        opzione3: "350.000 km/s"
    },

    {
        id:9,
        domanda: "Come si chiamano le particelle subatomiche a carica negativa?",
        esatta: "Elettroni",
        opzione1: "Protoni",
        opzione2: "Neutrone",
        opzione3: "Atomi"
    },
    {
        id:10, 
        domanda: "Come si chiama il teorema che afferma che, in ogni triangolo rettangolo l’area del quadrato costruito sull’ipotenusa è uguale alla somma delle aree dei quadrati costruiti sui cateti?",
        esatta: "Teorema di Pitagora", 
        opzione1: "Regola di Ruffini",
        opzione2: "Il teorema di Cantor",
        opzione3: "La formula di Erone" 
    },

    {
        id:11, 
        domanda: "Come si chiamano le cellule che hanno un nucleo cellulare?",
        esatta: "Cellule eucariote",
        opzione1: "Cellule procariote",
        opzione2: "Cellule madre",
        opzione3: "Cellule somatiche"
    },



    {
        id:12, 
        domanda: "Cosa significa DNA?",
        esatta: "Acido desossiribonucleico",
        opzione1: "Acido ribonucleico",
        opzione2: "Acido cloridrico",
        opzione3: "Acido bromidrico"
    },

    {
        id:13, 
        domanda: "Come si chiama l’era geologica in cui ci troviamo?",
        esatta: "Olocene",
        opzione1: "Pleistocene",
        opzione2: "Pliocene",
        opzione3: "Miocene"
    },

    {
        id:14, 
        domanda: "Quando è l’equinozio di primavera?",
        esatta: "Tra il 19 e il 21 marzo",
        opzione1: "Tra il 13 e il 15 marzo",
        opzione2: "Tra il 25 e il 27 marzo",
        opzione3: "Tra il 29 e il 31 marzo"
    },

    {
        id:15, 
        domanda: "Quanto dista dalla Terra alla Luna?",
        esatta: "384.400 km",
        opzione1: "300.000km",
        opzione2: "420.000 km",
        opzione3: "200.000 km"
    },

    {
        id:16, 
        domanda: "Qual è l’elemento più abbondante sulla Terra?",
        esatta: "Idrogeno",
        opzione1: "Ossigeno",
        opzione2: "Carbonio",
        opzione3: "Azoto"
    },

    {
        id:17, 
        domanda: "Come si chiama l’unità di misura con la quale si misura l’intensità della corrente elettrica?",
        esatta: "Ampere",
        opzione1: "Mole",
        opzione2: "Kelvin",
        opzione3: "Candela"
    },

    {
        id:18, 
        domanda: "L’archeologia è lo studio di?",
        esatta: "Civiltà e culture antiche dai loro resti materiali",
        opzione1: "Popoli e culture moderne dai loro modi di vestire",
        opzione2: "Civiltà e culture antiche in base a come si nutrivano",
        opzione3: "Previsione degli stili di vita futuri"
    },

    {
        id:19, 
        domanda: "Qual è il terzo principio della Dinamica di Newton?",
        esatta: "Se un corpo esercita una forza su un secondo corpo, allora il secondo esercita sul primo una forza uguale e contraria",
        opzione1: "Ogni corpo non soggetto a forze o soggetto a un sistema di forze che si equilibrano, rimane nel suo stato di quiete o di moto rettilineo uniforme rispetto a un sistema inerziale di riferimento",
        opzione2: "L’entropia di un sistema isolato lontano dall’equilibrio termico tende ad aumentare nel tempo, finché l’equilibrio non è raggiunto",
        opzione3: "La forza è una grandezza vettoriale con la stessa direzione e lo stesso verso di accelerazione, e che essa è direttamente proporzionale all’accelerazione, con costante di proporzionalità data dalla massa del corpo"
    },

    {
        id:20, 
        domanda: "A quale gruppo appartengono i lieviti?",
        esatta: "Al gruppo dei funghi",
        opzione1: "Al gruppo dei cereali",
        opzione2: "Al gruppo dei legumi",
        opzione3: "Al gruppo dei tuberi"
    },

    {
        id:21, 
        domanda: "Qual è l’animale più velenosa al mondo??",
        esatta: "La vespa di mare",
        opzione1: "Ragno dei cunicoli",
        opzione2: "Rana dal dardo velenoso",
        opzione3: "Lumaca dal cono marmorizzato"
    },

    {
        id:22, 
        domanda: "Di cosa sono fatti i virus?",
        esatta: "Acido nucleico e proteine",	
        opzione1: "Batteri",
        opzione2: "Parassiti e altri organismi",
        opzione3: "Proteine infiammate"
    },

    {
        id:23, 
        domanda: "Dove si trovano le ossa dello scafoide?",
        esatta: "Nel polso",
        opzione1: "Nella spalla",
        opzione2: "Nel bacino",
        opzione3: "Nel ginocchio"
    },
    {
        id:24, 
        domanda: "Qual è la galassia più vicina alla Via Lattea?",
        esatta: "Andromeda",
        opzione1: "Grande nube di Magellano",
        opzione2: "Nana del drago",
        opzione3: "Leo II"
    },

    {
        id:25, 
        domanda: "A quale classificazione delle rocce appartengono le rocce vulcaniche?",
        esatta: "Rocce ignee",
        opzione1: "Rocce sedimentarie",
        opzione2: "Rocce metamorfiche",
        opzione3: "Rocce intrusive"
    },

    
    {
        id:26, 
        domanda: "Qual è la formula più famosa di Albert Einstein?",
        esatta: "E = MC2",
        opzione1: "F = ma",
        opzione2: "L = Fs",
        opzione3: "D = m : V"
    },

    {
        id:27, 
        domanda: "Chi ha scoperto la penicillina?",
        esatta: "Alexander Fleming",
        opzione1: "Luc Montagnier",
        opzione2: "Alexander Haddow",
        opzione3: "Friedrich Serturner"
    },

    {
        id:28, 
        domanda: "Dove è stato eseguito il primo trapianto di cuore umano?",
        esatta: "Sudafrica",
        opzione1: "America",
        opzione2: "Italia",
        opzione3: "Francia"
    },

    {
        id:29, 
        domanda: "Per cosa è famosa Marie Curie?",
        esatta: "La radioattività",
        opzione1: "La penicillina",
        opzione2: "Bomba atomica",
        opzione3: "Tumori"
    },

    {
        id:30, 
        domanda: "Quali sono le 3 dimensioni spaziali?",
        esatta: "Larghezza altezza e profondità",
        opzione1: "Larghezza profondità e circonferenza",
        opzione2: "Tempo spazio e profondità",
        opzione3: "Larghezza altezza e spazio"
    },

    {
        id:31, 
        domanda: "Qual è il pianeta più grande del sistema solare?",
        esatta: "Giove",
        opzione1: "Saturno",
        opzione2: "Uranio",
        opzione3: "Nettuno"
    },

    {
        id:32, 
        domanda: "Qual è il quarto pianeta del sistema solare?",
        esatta: "Marte",
        opzione1: "Venere",
        opzione2: "Giove",
        opzione3: "Mercurio"
    },

    {
        id:33, 
        domanda: "Nella formula F = ma cosa significa la a?",
        esatta: "Accelerazione",
        opzione1: "Altezza",
        opzione2: "Accessibilità",
        opzione3: "Attesa"
    },

    {
        id:34, 
        domanda: "In che anno è stata scattata la prima foto di un buco nero?",
        esatta: "2019",
        opzione1: "2010",
        opzione2: "2000",
        opzione3: "Non è ancora mai stata scattata"
    },

    {
        id:35, 
        domanda: "Chi ha elaborato la teoria dell’evoluzione?",
        esatta: "Charles Darwin",
        opzione1: "Albert Einstein",
        opzione2: "Marie Curie",
        opzione3: "Pitagora"
    },

    {
        id:36, 
        domanda: "Come si chiama la sostanza che dà alle piante il colore verde?",
        esatta: "Clorofilla",
        opzione1: "Acqua",
        opzione2: "Concime",
        opzione3: "Luce"
    },

    {
        id:37, 
        domanda: "Quale organo produce la bilirubina?",
        esatta: "Il fegato",
        opzione1: "La milza",
        opzione2: "Lo stomaco",
        opzione3: "L’intestino"
    },

    {
        id:38, 
        domanda: "Gli ornitorinchi sono mammiferi?",
        esatta: "Vero allattano i loro piccoli",
        opzione1: "Vero ma allattano solo le femmine",
        opzione2: "Falso perché sono uccelli",
        opzione3: "Falso non si riproduce"
    },

    {
        id:39, 
        domanda: "Quale ormone è noto come ormone dello stress?",
        esatta: "Cortisolo",
        opzione1: "Serotonina",
        opzione2: "Dopamina",
        opzione3: "Istamina"
    },

    {
        id:40, 
        domanda: "Quale animale produce il suono più forte generato da un essere vivente?",
        esatta: "Megattera",
        opzione1: "Leone",
        opzione2: "Ippopotamo",
        opzione3: "Elefante"
    },

    {
        id:41, 
        domanda: "Come si chiama la sostanza in cui il feto galleggia nell’utero?",
        esatta: "Liquido amniotico",
        opzione1: "Liquido seminale",
        opzione2: "Acqua",
        opzione3: "Sostanze di scarto"
    },

    {
        id:42, 
        domanda: "Qual è l’essere vivente più grande del mondo?",
        esatta: "Armillaria ostoyae: fungo",
        opzione1: "Balenottera musculus",
        opzione2: "La Rafflesia: pianta da fiore",
        opzione3: "Kelp gigante: alga"
    },

    {
        id:43, 
        domanda: "Cosa determinano i meridiani?",
        esatta: "La longitudine di un punto dalla Terra",
        opzione1: "La latitudine di un punto dalla Terra",
        opzione2: "La distanza dall’equatore",
        opzione3: "La distanza dal parallelo 0"
    },

    {
        id:44, 
        domanda: "Dove vivono i pinguini?",
        esatta: "Antartide",
        opzione1: "Polo Nord",
        opzione2: "Islanda",
        opzione3: "Lapponia"
    },

    {
        id:45, 
        domanda: "Dove si trova l’osso occipitale nel cranio?",
        esatta: "Nella parte inferiore e posteriore del cranio",
        opzione1: "Nella parte anteriore del cranio",
        opzione2: "Nella parte centrale del cranio",
        opzione3: "Fra la parte anteriore e centrale del cranio"
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


function controllaRisposta(opzione)
{
    let op = document.getElementById(opzione);
    if (esatta.id==op.id && risposta==false)
    {
        esatta.style.backgroundColor='green';
        risposta=true;
        punteggio.textContent++;
        clearInterval(intervaltempo);
    }
    else
    {   
        if (risposta==false)
        {
            op.style.backgroundColor='red';
            risposta=true;
            clearInterval(intervaltempo);
        }
        
    }
}

function cambiaFreccia()
{
    if (esatta.style.backgroundColor=='green' || opzione1.style.backgroundColor=='red' || opzione2.style.backgroundColor=='red' || opzione3.style.backgroundColor=='red')
    {
        cambiaDomanda();
    }
}

function cambiaDomanda()
{
    if (contaDomanda==0)
    {
        let risultato = document.createElement('div');
        let lbnick = document.createElement('h2');
        let nickName = sessionStorage.getItem('nick');

        lbnick.textContent=nickName;
        risultato.id='risultato';

        let lbpunteggio = document.createElement('label');
        lbpunteggio.textContent='Il tuo punteggio è: '+punteggio.textContent;

        let a = document.createElement('a');
        a.href='./categorie.html';

        let btn = document.createElement('button');
        btn.id='btngioca';
        btn.textContent='Gioca ancora';

        risultato.appendChild(lbnick);
        risultato.appendChild(lbpunteggio);
        a.appendChild(btn);
        risultato.appendChild(a);
        document.getElementById('bdy').appendChild(risultato);
        document.getElementById('main').style.opacity='0.2';
        return;
    }
    let n = Math.floor(Math.random()*45);
    for (let i=0; i<domandeEstratte.length;i++)
    {
        if (n==domandeEstratte[i])
        {
            cambiaDomanda();
            return;
        }
    }
    domandeEstratte.push(n);
    estraiNumeri();

    let domanda = document.getElementById('domanda');
    opzione1 = document.querySelector('#op'+estratti[0]);
    opzione2 = document.querySelector('#op'+estratti[1]);
    opzione3 = document.querySelector('#op'+estratti[2]);
    esatta = document.querySelector('#op'+estratti[3]);

    domanda.textContent = scienze[n].domanda;
    opzione1.textContent = scienze[n].opzione1;
    opzione2.textContent = scienze[n].opzione2;
    opzione3.textContent = scienze[n].opzione3;
    esatta.textContent = scienze[n].esatta;

    opzione1.style.backgroundColor='brown';
    opzione2.style.backgroundColor='brown';
    opzione3.style.backgroundColor='brown';
    esatta.style.backgroundColor='brown';

    risposta=false;
    tempo = document.getElementById('tempo');
    tempo.textContent=15;
    intervaltempo = setInterval('timer()',1000);
    contaDomanda-=1;
}


function timer()
{
    if (tempo.textContent!=1)
    {
        tempo.textContent-=1;
    }
    else
    {
        esatta.style.backgroundColor='green';
        risposta=true;
        clearInterval(intervaltempo);
        tempo.textContent='Tempo scaduto';
    }
    
}

document.addEventListener('DOMContentLoaded',function(){
    cambiaDomanda();
    tempo = document.getElementById('tempo');
    tempo.textContent=15;

    punteggio = document.getElementById('score');
    punteggio.textContent=0;

    document.getElementById('nick').textContent=sessionStorage.getItem('nick');

    // intervaltempo = setInterval('timer()',1000);
});






































