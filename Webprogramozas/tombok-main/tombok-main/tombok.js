// 1. Szimulálj 100 dobást hat oldalú dobókockával! Készíts statisztikát a dobásokról! Végül
// írd ki, hogy hány átlag feletti dobás volt!

// function dobokocka() {
    // let dobások = [];
    // for (let i = 0; i < 100; i++) {
        // dobások.push(Math.floor(Math.random() * 6) + 1);
    // }
    // return dobások;
// }
// 
// function statisztika(dobások) {
    // let stat = {};
    // for (let i = 1; i <= 6; i++) {
        // stat[i] = dobások.filter(dobás => dobás === i).length;
    // }
    // return stat;
// }
// 
// function atlagFeletti(dobások) {
    // let atlag = dobások.reduce((a, b) => a + b, 0) / dobások.length;
    // let atlagFelettiDobások = dobások.filter(dobás => dobás > atlag).length;
    // return atlagFelettiDobások;
// }
// 
// let dobások = dobokocka();
// let stat = statisztika(dobások);
// console.log("Statisztika:", stat);
// let atlagFelettiDobások = atlagFeletti(dobások);
// console.log("Átlag feletti dobások száma:", atlagFelettiDobások);

// 2. Tölts fel egy 100 elemű tömböt -50 és 50 közötti véletlenszámokkal!
// a. Írasd ki a tömb legnagyobb értékű elemét és annak indexét!
// b. Írasd ki a tömb elemeinek összegét!
// c. Írasd ki a páros és a páratlan elemek darabszámát!
// d. Van-e a tömbben 7-tel osztható elem?
// e. Van-e a tömbben olyan elem, amelynek mindkét szomszédja negatív?
// f. Van-e a tömben olyan elem, amely nagyobb, mint két szomszédjának összege?
// g. Írasd ki a tömb utolsó 3-mal osztható, de 5-tel nem osztható elemének indexét!
// h. Van-e a tömbben 3 egyforma szám?
// i. Van-e a tömbben egymás melletti azonos érték?
// j. Írd ki azon számok indexeit, amelyek 10 többszörösei!
// k. Háyn átlag alatti szám van a tömbben?

function randomSzamok() {
    let szamok = [];
    for (let i = 0; i < 100; i++) {
        szamok.push(Math.floor(Math.random() * 101) - 50);
    }
    return szamok;
}

let szamok = randomSzamok();

let maxErtek = Math.max(...szamok);

let maxIndex = szamok.indexOf(maxErtek);
console.log("Legnagyobb érték:", maxErtek, "Index:", maxIndex); 

let osszeg = szamok.reduce((a, b) => a + b, 0);
console.log("Összeg:", osszeg);

let paros = szamok.filter(szam => szam % 2 === 0).length;

let paratlan = szamok.filter(szam => szam % 2 !== 0).length;
console.log("Páros elemek száma:", paros);
console.log("Páratlan elemek száma:", paratlan);

let oszthato7 = szamok.some(szam => szam % 7 === 0);
console.log("Van-e 7-tel osztható elem?", oszthato7);

let szomszedNegativ = szamok.some((szam, index) => index > 0 && index < szamok.length - 1 && szamok[index - 1] < 0 && szamok[index + 1] < 0);
console.log("Van-e olyan elem, amelynek mindkét szomszédja negatív?", szomszedNegativ);

let nagyobbMintSzomszed = szamok.some((szam, index) => index > 0 && index < szamok.length - 1 && szam > szamok[index - 1] + szamok[index + 1]);
console.log("Van-e olyan elem, amely nagyobb, mint két szomszédjának összege?", nagyobbMintSzomszed);

let indexek = szamok.map((szam, index) => (szam % 3 === 0 && szam % 5 !== 0) ? index : -1).filter(index => index !== -1);
console.log("Utolsó 3-mal osztható, de 5-tel nem osztható elemek indexei:", indexek);

let egyformaSzamok = szamok.some(szam => szamok.filter(s => s === szam).length >= 3);
console.log("Van-e 3 egyforma szám?", egyformaSzamok);

let egymasMellettiAzonos = szamok.some((szam, index) => index < szamok.length - 1 && szam === szamok[index + 1]);
console.log("Van-e egymás melletti azonos érték?", egymasMellettiAzonos);

let tizesTobbszorosek = szamok.map((szam, index) => (szam % 10 === 0) ? index : -1).filter(index => index !== -1);
console.log("10 többszöröseinek indexei:", tizesTobbszorosek);

let atlag = osszeg / szamok.length;

let atlagAlatti = szamok.filter(szam => szam < atlag).length;
console.log("Átlag alatti számok száma:", atlagAlatti);

