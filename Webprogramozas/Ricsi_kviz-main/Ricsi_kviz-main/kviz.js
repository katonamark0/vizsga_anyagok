const parok = [
    { kerdes: "Kivel feküdnél le a társaságból, ha muszáj lenne?", 
      buntetes: "2 shot egymás után" 
    },
    { kerdes: "Kivel NEM feküdnél le soha innen?", 
      buntetes: "3 shot 1 perc alatt" 
    },
    { kerdes: "Kihez vonzódsz titokban itt?", 
      buntetes: "hosszú ital fele + 1 shot" 
    },
    { kerdes: "Ki az, akit már elképzeltél meztelenül?", 
      buntetes: "1 hosszú ital 15 mp alatt" 
    },
    { kerdes: "Kivel csókolóznál most azonnal?", 
      buntetes: "2 shot + 2 nagy korty sör" 
    },
    { kerdes: "Ki az, akivel megbánnád másnap?", 
      buntetes: "shot + shot (10 mp szünettel)" 
    },
    { kerdes: "Kinek van a legjobb teste szerinted?", 
      buntetes: "3 shot + ne ülj le 2 percig" 
    },
    { kerdes: "Kinek a személyisége vonz legjobban?", 
      buntetes: "hosszú ital + csukott szem" 
    },
    { kerdes: "Volt már, hogy itt valakire rámozdultál volna?", 
      buntetes: "shot + forogj 10x" 
    },
    { kerdes: "Ki az, aki szerinted rád mozdulna?", 
      buntetes: "2 shot + beszélj folyamatosan" 
    },

    { kerdes: "Volt már titkos kapcsolatod?", 
      buntetes: "hosszú ital + ne nevess" 
    },
    { kerdes: "Volt már egyéjszakás kalandod?", 
      buntetes: "shot + mindenki rád néz" 
    },
    { kerdes: "Küldtél már merész képet?", 
      buntetes: "3 shot + 1 perc csend" 
    },
    { kerdes: "Kaptál már olyat?", 
      buntetes: "hosszú ital + térdelve" 
    },
    { kerdes: "Volt már kínos lebukásod?", 
      buntetes: "shot + egyensúly teszt" 
    },
    { kerdes: "Ki tud rólad túl sokat?", 
      buntetes: "2 shot + állj fél lábon" 
    },
    { kerdes: "Mi a legnagyobb titkod?", 
      buntetes: "hosszú ital + tánc közben" 
    },
    { kerdes: "Mi az, amit senki nem tud rólad itt?", 
      buntetes: "shot + mondj titkot" 
    },
    { kerdes: "Mi a legdurvább dolog, amit tettél részegen?", 
      buntetes: "3 shot + válaszolj kérdésekre" 
    },
    { kerdes: "Mi volt a legnagyobb megbánásod?", 
      buntetes: "hosszú ital + 30 mp alatt" 
    },

    { kerdes: "Kit stalkoltál utoljára?", 
      buntetes: "shot + kevert ital korty" 
    },
    { kerdes: "Kire vagy féltékeny itt?", 
      buntetes: "2 shot + random ital" 
    },
    { kerdes: "Ki a legvonzóbb szerinted?", 
      buntetes: "hosszú ital + más poharából" 
    },
    { kerdes: "Ki a legkevésbé?", 
      buntetes: "3 shot + ne reagálj" 
    },
    { kerdes: "Ki az, akivel soha nem jönnél össze?", 
      buntetes: "hosszú ital + szemkontaktus" 
    },

    { kerdes: "Ki az, akivel simán összejönnél?", 
      buntetes: "2 shot + hosszú ital fele + shot" 
    },
    { kerdes: "Ki a legnagyobb red flag?", 
      buntetes: "hosszú ital + 2 shot a végén" 
    },
    { kerdes: "Ki a legártatlanabb?", 
      buntetes: "3 shot + 3 ember kérdez" 
    },
    { kerdes: "Ki a legveszélyesebb?", 
      buntetes: "hosszú ital + nem beszélhetsz" 
    },
    { kerdes: "Ki lenne a legjobb “bűntársad”?", 
      buntetes: "2 shot + csak suttogás" 
    },

    { kerdes: "Volt már tiltott crushod?", 
      buntetes: "3 shot + csak kiabálás" 
    },
    { kerdes: "Volt már, hogy barátodra mozdultál rá?", 
      buntetes: "hosszú ital + cseréld el az italod" 
    },
    { kerdes: "Megcsaltál már valakit?", 
      buntetes: "shot + valaki választ még büntetést" 
    },
    { kerdes: "Téged megcsaltak már?", 
      buntetes: "2 shot + mindenki ad 1 kortyot" 
    },
    { kerdes: "Mit titkolsz most is?", 
      buntetes: "hosszú ital + 1 perc figyelem" 
    },

    { kerdes: "Mi volt a legkínosabb üzeneted?", 
      buntetes: "3 shot + középre ülsz" 
    },
    { kerdes: "Volt már ghostolásod?", 
      buntetes: "hosszú ital + nem reagálhatsz" 
    },
    { kerdes: "Téged ghostoltak már?", 
      buntetes: "shot + mindenki mond rólad valamit" 
    },
    { kerdes: "Mi volt a leggyorsabb fellángolásod?", 
      buntetes: "2 shot + te mondasz mindenkiről" 
    },
    { kerdes: "Mi a legfurább dolog, ami bejön?", 
      buntetes: "hosszú ital + 1 perc beszéd" 
    },

    { kerdes: "Kivel mennél el most egy külön szobába?", 
      buntetes: "3 shot + 1 perc csend" 
    },
    { kerdes: "Ki néz ki legjobban részegen?", 
      buntetes: "hosszú ital + 1 perc szemkontaktus" 
    },
    { kerdes: "Ki változik meg legjobban piálva?", 
      buntetes: "shot + mondd ki amit gondolsz" 
    },
    { kerdes: "Ki lenne a legrosszabb párod?", 
      buntetes: "2 shot + mondd ki amit titkolsz" 
    },
    { kerdes: "Ki lenne a legjobb párod?", 
      buntetes: "hosszú ital + mondd ki amit nem mersz" 
    },

    { kerdes: "Ki az, akitől félnél kapcsolatban?", 
      buntetes: "3 shot + válassz “áldozatot”" 
    },
    { kerdes: "Ki az, aki összetörné a szíved?",
      buntetes: "hosszú ital + te vagy a célpont" 
    },
    { kerdes: "Ki az, akit te törnél össze?", 
      buntetes: "shot + mások döntenek helyetted" 
    },
    { kerdes: "Ki az, aki túl jó neked?", 
      buntetes: "2 shot + nincs visszautasítás" 
    },
    { kerdes: "Ki az, aki túl rossz neked?", 
      buntetes: "hosszú ital + mindenki figyel" 
    },

    { kerdes: "Mi a legdurvább gondolatod valakiről itt?", 
      buntetes: "4 shot (lassan)" 
    },
    { kerdes: "Volt már “rossz döntésed” részegen?", 
      buntetes: "2 shot + hosszú ital + shot" 
    },
    { kerdes: "Kivel feküdnél le pénzért?", 
      buntetes: "hosszú ital + 3 shot a végén" 
    },
    { kerdes: "Mit csinálnál 1 millióért?", 
      buntetes: "3 shot + 2 shot késleltetve" 
    },
    { kerdes: "Mi az, amit soha nem tennél meg?", 
      buntetes: "hosszú ital + kevert ital" 
    },

    { kerdes: "Volt már kínos randid?", 
      buntetes: "4 shot + 1 perc csend" 
    },
    { kerdes: "Mi volt a legrosszabb csókod?", 
      buntetes: "hosszú ital + 1 perc nézés" 
    },
    { kerdes: "Mi volt a legjobb csókod?", 
      buntetes: "shot + 1 perc reakció nélkül"
    },
    { kerdes: "Kit vinnél haza innen?", 
      buntetes: "2 shot + mindenki kérdez" 
    },
    { kerdes: "Kit küldenél haza innen?", 
      buntetes: "hosszú ital + mindenki beszél" 
    },

    { kerdes: "Kivel cserélnél életet?", 
      buntetes: "3 shot + mindenki rólad beszél" 
    },
    { kerdes: "Ki a legszexibb hangú?", 
      buntetes: "hosszú ital + te beszélsz mindenkiről"
    },
    { kerdes: "Ki a legjobb stílusú?", 
      buntetes: "shot + ismételd amit mondanak" 
    },
    { kerdes: "Ki a legnagyobb hazudozó?", 
      buntetes: "2 shot + ne védekezz" 
    },
    { kerdes: "Ki a legőszintébb?", 
      buntetes: "hosszú ital + fogadd el" 
    },

    { kerdes: "Ki a legféltékenyebb?", 
      buntetes: "3 shot + ne nézz félre" 
    },
    { kerdes: "Ki a legnagyobb játékos?", 
      buntetes: "hosszú ital + maradj nyugodt" 
    },
    { kerdes: "Ki az, aki mindig bajba kever?", 
      buntetes: "shot + mondj őszinte véleményt" 
    },
    { kerdes: "Ki a legnagyobb drámakirály/királynő?", 
      buntetes: "2 shot + mondj valami durvát" 
    },
    { kerdes: "Ki a legunalmasabb?", 
      buntetes: "hosszú ital + reagálj túl" 
    },

    { kerdes: "Kivel feküdnél le, de nem randiznál?", 
      buntetes: "3 shot + reagálj semmit" 
    },
    { kerdes: "Kivel randiznál, de nem feküdnél le?", 
      buntetes: "hosszú ital + szerepjáték" 
    },
    { kerdes: "Ki az, akivel titokban összejönnél?", 
      buntetes: "shot + kontrollvesztés (mások irányítanak)" 
    },
    { kerdes: "Ki az, akit nyilvánosan soha?", 
      buntetes: "2 shot + te irányítasz mindenkit" 
    },
    { kerdes: "Kinek van a legjobb kisugárzása?", 
      buntetes: "hosszú ital + teljes figyelem" 
    },

    { kerdes: "Ki a legcsábítóbb?", 
      buntetes: "4 shot + hosszú ital fele" 
    },
    { kerdes: "Ki a legkétértelműbb?", 
      buntetes: "hosszú ital + 2 shot + shot" 
    },
    { kerdes: "Ki a legperverzebb szerinted?", 
      buntetes: "3 shot + hosszú ital + shot" 
    },
    { kerdes: "Ki a legártatlanabbnak tűnik, de nem az?", 
      buntetes: "hosszú ital + mindenki beleiszik" 
    },
    { kerdes: "Ki lepne meg legjobban?", 
      buntetes: "4 shot + random keverék" 
    },

    { kerdes: "Mit gondolsz, ki akar téged?", 
      buntetes: "3 shot + 1 perc egyensúly" 
    },
    { kerdes: "Kit akarsz te?", 
      buntetes: "hosszú ital + 1 perc beszéd" 
    },
    { kerdes: "Ki az, aki túl sok?", 
      buntetes: "shot + 1 perc csend" 
    },
    { kerdes: "Ki az, aki túl kevés?", 
      buntetes: "2 shot + 1 perc figyelem" 
    },
    { kerdes: "Kivel lenne a legnagyobb dráma?", 
      buntetes: "hosszú ital + 1 perc szemkontaktus" 
    },

    { kerdes: "Kivel lenne a legjobb sztori?", 
      buntetes: "4 shot + mindenki után korty" 
    },
    { kerdes: "Ki az, akit megbánnál?", 
      buntetes: "hosszú ital + mindenki veled iszik" 
    },
    { kerdes: "Ki az, akit nem bánnál meg?", 
      buntetes: "3 shot + mindenki kérdez" 
    },
    { kerdes: "Ki a legnagyobb titokhordozó?", 
      buntetes: "hosszú ital + mindenki válaszol" 
    },
    { kerdes: "Ki pletykál a legtöbbet?", 
      buntetes: "shot + mindenki dönt" 
    },

    { kerdes: "Mi az, amit most sem mondasz el?", 
      buntetes: "4 shot + nincs megállás" 
    },
    { kerdes: "Ki az, akinek most írnál?", 
      buntetes: "hosszú ital + újratöltés" 
    },
    { kerdes: "Ki az ex, akire még gondolsz?", 
      buntetes: "3 shot + dupla büntetés" 
    },
    { kerdes: "Mi volt a legrosszabb szakításod?", 
      buntetes: "hosszú ital + te vagy a célpont" 
    },
    { kerdes: "Mi volt a legjobb?", 
      buntetes: "4 shot + te irányítasz" 
    },

    { kerdes: "Ki az, akit visszafogadnál?", 
      buntetes: "3 shot + mindenki ellened" 
    },
    { kerdes: "Ki az, akit soha?", 
      buntetes: "hosszú ital + mindenki veled" 
    },
    { kerdes: "Mit bánsz a legjobban?", 
      buntetes: "4 shot + teljes kör kontroll" 
    },
    { kerdes: "Mit csinálnál újra?", 
      buntetes: "hosszú ital + káosz kör" 
    },
    { kerdes: "Mi az, amit ma este még bevállalnál?", 
      buntetes: "💀 FINAL BOSS → 2 shot + hosszú ital + 2 shot" 
    }
];

let players = [];
let currentPlayer = 0;
let gameStarted = false;

let canvas, ctx;


let hasznalt = [];
let korSzamlalo = 0;

function addPlayer() {
    // 🔥 BIZTOSÍTÁS: ha valami felülírta
    if (!Array.isArray(players)) {
        players = [];
    }

    const input = document.getElementById("playerName");
    const name = input.value.trim();
    if (!name) return;

    players.push(name);
    input.value = "";
    renderPlayers();

    if (canvas && ctx) {
        drawWheel();
    }
}

function renderPlayers() {
    let text = "Játékosok: ";
    players.forEach((p, i) => {
        text += i === currentPlayer
            ? `👉 <span class="active-player">${p}</span> `
            : p + " ";
    });
    document.getElementById("players").innerHTML = text;
}

function startGame() {
    if (players.length === 0) {
        alert("Adj hozzá játékost!");
        return;
    }
    gameStarted = true;
    currentPlayer = 0;
    hasznalt = [];
    ujKor();
}


function ujKor() {
    if (!gameStarted) return;

    document.getElementById("card").classList.remove("flip");

    korSzamlalo++;

    // 🔥 RANDOM EVENT 5 körönként
    if (korSzamlalo % 5 === 0) {
        const events = [
            "🍻 Mindenki iszik!",
            "🔄 Csere ital a bal oldali játékossal!",
            "🎯 Valaki más válaszol helyetted!"
        ];
        alert(events[Math.floor(Math.random()*events.length)]);
    }

    if (hasznalt.length === parok.length) {
        hasznalt = [];
    }

    let index;
    do {
        index = Math.floor(Math.random() * parok.length);
    } while (hasznalt.includes(index));

    hasznalt.push(index);

    let player = players[currentPlayer];

    // 🔥 20% eséllyel dupla kör
    if (Math.random() < 0.2) {
        alert("🔥 DUPLA KÖR!");
    } else {
        currentPlayer = (currentPlayer + 1) % players.length;
    }

    const adat = parok[index];

    document.getElementById("kerdesText").innerText = player + ": " + adat.kerdes;
    document.getElementById("buntetesText").innerText = adat.buntetes;

    renderPlayers();
}


function flipKartya() {
    document.getElementById("card").classList.toggle("flip");

    const sound = document.getElementById("flipSound");
    if (sound) sound.play().catch(() => {});
}

function keveres() {
    players.sort(() => Math.random() - 0.5);
    renderPlayers();
}

function randomPlayer() {
    if (players.length === 0) return;
    const rand = Math.floor(Math.random() * players.length);
    alert("🎯 " + players[rand]);
}


//  animalt kerek
let spinAngle = 0;

function drawWheel() {
    if (!canvas || players.length === 0) return;

    const radius = canvas.width / 2;
    const angle = (2 * Math.PI) / players.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < players.length; i++) {
        ctx.beginPath();
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, i * angle, (i + 1) * angle);
        ctx.fillStyle = i % 2 === 0 ? "#1abc9c" : "#e74c3c";
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(i * angle + angle / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.fillText(players[i], radius - 10, 0);
        ctx.restore();
    }
}

function spinWheel() {
    if (players.length === 0) return alert("Adj hozzá játékosokat!");

    const duration = 3000;
    const start = Date.now();

    function animate() {
        const elapsed = Date.now() - start;
        const progress = elapsed / duration;

        if (progress < 1) {
            spinAngle = progress * Math.PI * 8;

            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.rotate(spinAngle);
            ctx.translate(-canvas.width/2, -canvas.height/2);

            drawWheel();

            ctx.restore();
            requestAnimationFrame(animate);
        } else {
            const normalized = spinAngle % (2 * Math.PI);
            const index = Math.floor(players.length - (normalized / (2 * Math.PI)) * players.length) % players.length;

            alert("🎯 Következő játékos: " + players[index]);
            currentPlayer = index;
            renderPlayers();
        }
    }

    animate();
}

// betoltes utani inicializalas
window.onload = function () {
    canvas = document.getElementById("wheel");
    ctx = canvas.getContext("2d");

    drawWheel();
};
