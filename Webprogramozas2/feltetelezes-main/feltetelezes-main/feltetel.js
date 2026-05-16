//1. Egy beolvasott számról döntse el a program, hogy -30 és 40 között van-e!
// 
// let szam  = parseFloat(prompt("Kérek egy számot: "));
// 
// if(szam > -30 && szam < 40) {
    // console.log("A szám -30 és 40 között van.");
// }else {
    // console.log("A szám nincs -30 és 40 között.");
// }


//  2. Két beolvasott szám közül írassuk ki a nagyobbikat! Azt is írassuk ki, ha egyenlők!

// let szam1 = parseFloat(prompt("Kérek add meg az első számot: "));
// let szam2 = parseFloat(prompt("Kérek add meg a második számot: "));

// if(szam1 > szam2) {
//     console.log("A nagyobb szám: " + szam1);
// }else if(szam2 > szam1) {
//     console.log("A nagyobb szám: " + szam2);
// }else {
//     console.log("A két szám egyenlő: " + szam1);
// }

// 3. Egy beolvasott X számnak írjuk ki az előjelét (pozitív, negatív vagy nulla)!

// let szam = parseFloat(prompt("Kérek egy számot: "));

// if(szam > 0){
//     console.log("A szám pozitív.");
// }else if(szam < 0){
//     console.log("A szám negatív.");
// }else {
//     console.log("A szám nulla.");
// }

// 4. Kérjünk be egy számot és döntsük el, hogy egész szám-e! Csak ebben az esetben írassuk ki

// let szam3 = parseFloat(prompt("Kérek egy számot: "));
// 
// if(Number.isInteger (szam3)){
    // console.log("A szám egész" + szam3)
// }

//5. A program kérdezzen két számot, s utána írja ki a köztük lévő relációt. Például, ha a két
//szám 3 és -6.12, akkor az eredmény: 3 > -6.12.
// 
// let szam4 = parseFloat(prompt("Kérem az egyik számot: "))
// let szam5 = parseFloat(prompt("Kérem a másik számot: "))
//
//if(szam4 > szam5){
//    console.log(szam4 + "A nagyobb");
//}else if(szam5 > szam4){
//    console.log(szam5 + "A nagyobb");
//}else{
//    console.log("A két szám egyenlő: " + szam4);
//}


// 6. Írj programot, ami egy életkor alapján eldönti, hogy gyerek (0-6 év), iskolás (7-18),
// dolgozó (19-60), illetve nyugdíjas-e az illető!

// let eletkor = parseInt(prompt("Kérek add meg az életkorod! "))
// 
// if(eletkor <= 0 && eletkor <= 6 ){
    // console.log("Gyerek")
// }else if(eletkor <= 7 && eletkor <= 18){
    // console.log("Iskolás")
// }else if(eletkor <= 19 && eletkor <= 60) {
    // console.log("Dologzó")
// }else if(eletkor > 60 && eletkor <= 125){
    // console.log("Nyugdíjas")
// }else{
    // console.log("Valamit félrenyomtál öcsi!")
// }

// 7. Fej vagy írás? A játék célja, hogy a játékos eltalálja, hogy a feldobott pénz fej vagy írás
// lesz. A játékos adjon tippet (fej, írás), majd a gép dobjon fel egy pénzérmét és írja ki,
// hogy a játékos nyert vagy vesztett.


// let tipp = prompt("Kérlek add meg a tipped (Fej / írás)?")
// let dobas = Math.random()
// let dobasErtek = ""
// 
// if(dobas < 0.5){
    // dobasErtek = "fej"
// }else{
    // dobasErtek = "írás"
// }
// 
// if(tipp.toLowerCase() === dobasErtek) {
    // console.log("Eltaláltad!")
// }else{
    // console.log("Nem találtad el (Vége van kicsi!)");
    // 
// }

// 8. A gép dobjon dobókockával, majd két játékos tippelje meg a dobás eredményét. Az a
// játékos nyer, akinek a tippje közelebb van a kockadobás eredményéhez.

// 9. Adott egy pont, melynek bekérjük a koordinátáit. Határozzuk meg, melyik
// síknegyedben van!

// let x = parseFloat(prompt("Kérek egy kordinátát az X tengelyen: "))
// let y = parseFloat(prompt("Kérek egy kordinátát az y tengelyen: "))

// if(x == 0 && y == 0){
    // console.log("Origó");
    // 
// }else if(x > 0 && y > 0){
    // console.log("Az első negyedben van!");
// }else if(x < 0 && y > 0){
    // console.log("A második negyedben van!");
// }else if(x < 0 && y < 0){
    // console.log("A harmadik negyedben van!");
// }else if(x > 0 && y < 0){
    // console.log("A negyedik negyedben van!");
// }else if(x === 0){
    // console.log("Az x tengelyen van");
// }else if(y === 0){
    // console.log("Az y tengelyen van");
// }

// 13. Kérjünk be egy évszámot és döntsük el, hogy szökőév-e! Egy év akkor szökőév, ha az
// évszám maradék nélkül osztható 4-gyel, de nem osztható 100-zal, kivéve, ha az évszám
// osztható 400-zal.

//et szokoEv = false;
//et evszam = parseInt(prompt("Kérek egy évet: "))
//
//f(evszam % 400 === 0){
//   szokoEv = true
//   
//else if(evszam % 100 === 0){
//   szokoEv = false
//else if(evszam % 4 === 0){
//   szokoEv = true
//
//
//f (szokoEv){
//   console.log("Ez az évszám  szökőév: " + evszam);
//else{
//   console.log("Ez az évszám nem szökőév: " + evszam);
//   
//

//14. Kérjük be egy hónap sorszámát, majd írjuk ki a nevét!

//let honapSzam = parseInt(prompt("Kérem a hónap sorszámát (1-12): "));
//
//if(honapSzam === 1){
//    console.log("Január");
//}else if(honapSzam === 2){
//    console.log("Február");
//}else if(honapSzam === 3){
//    console.log("Március");
//}else if(honapSzam === 4){
//    console.log("Április");
//}else if(honapSzam === 5){
//    console.log("Május");
//}else if(honapSzam === 6){
//    console.log("Június");
//}else if(honapSzam === 7){
//    console.log("Július");
//}else if(honapSzam === 8){
//    console.log("Augusztus");
//}else if(honapSzam === 9){
//    console.log("Szeptember");
//}else if(honapSzam === 10){
//    console.log("Október");
//}else if(honapSzam === 11){
//    console.log("November");
//}else if(honapSzam === 12){
//    console.log("December");
//}else{
//    console.log("Itt valami nem jó, próbáld újra!");
//}

//15. Kérjük be egy dolgozat pontszámát 1 és 100 között és írjuk ki az érdemjegyet! 0-40:
//elégtelen, 41-55: elégséges, 56-70: közepes, 71-85: jó, 86-100: jeles.

//let pontszam = parseInt(prompt("Kérem a dolgozat pontszámát (1-100): "));
//
//if(pontszam >= 0 && pontszam <= 40){
//    console.log("Érdemjegy: elégtelen");
//}else if(pontszam >= 41 && pontszam <= 55){
//    console.log("Érdemjegy: elégséges");
//}else if(pontszam >= 56 && pontszam <= 70){
//    console.log("Érdemjegy: közepes");
//}else if(pontszam >= 71 && pontszam <= 85){
//    console.log("Érdemjegy: jó");
//}else if(pontszam >= 86 && pontszam <= 100){
//    console.log("Érdemjegy: jeles");
//}else{
//    console.log("Valamit félrenyomtál kicsi!");
//}
