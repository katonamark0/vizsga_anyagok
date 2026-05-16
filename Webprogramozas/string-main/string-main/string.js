//console.log(string.fromcode(65, 108, 109, 97));

// 1. Írj programot, ami bekéri a felhasználó nevét, majd keresztnevén szólítva köszönti!

// let nev = prompt("Kérem adja meg a nevét!");
// 
// if(nev){
    // let felhasznalo = nev.split(" ")[1];
// 
// console.log(felhasznalo);
// }
// else{
    // console.log("Add meg a neved!");
// }

// 2. Írj programot, mely megszámolja, hogy az inputként érkező mondatban hány darab ”a”
// betű van!

// let mondat = prompt("Kérem adjon meg egy mondatot!");
// let aBetu = 0;
// 
// if (mondat) {
    // for (let index = 0; index < mondat.length; index++) {
    // if (mondat[index] === 'a'){
        // aBetu++
    // }
// }
// }
// 
// 
// console.log(aBetu);


// 3. Olvass be egy szöveget, és írd ki a betűit fordított sorrendben!

//let szoveg = prompt("Adj meg egy szöveget!");
//
//let forditottSzoveg = "";
//
//for (let i = szoveg.length - 1; i >= 0; i--) {
//    forditottSzoveg += szoveg[i];    
//}
//
//console.log(forditottSzoveg);


// 4. 5. HF

//4. Olvass be egy mondatot és egy szót! Írasd ki, hogy a szó szerepel-e a mondatban!

//let mondat = prompt("Adj meg egy mondatot!");
//let szo = prompt("Adj meg egy szót!");
//
//if (mondat.includes(szo)) {
//    console.log("A szó szerepel a mondatban!");
//}else if (mondat === "") {
//    console.log("Nem adtál meg mondatot!");
//}
//else if (szo === "") {
//    console.log("Nem adtál meg szót!");
//}
//else{
//    console.log("A szó nem szerepel a mondatban!");
//}

//5. A beolvasott mondatról döntsd el, hogy az visszafelé is ugyanazt jelenti-e! (Az ”Indul
//a görög aludni”, vagy a ”Géza kék az ég” visszafelé olvasva is ugyanazt jelenti.) Ügyelj
//a mondatvégi írásjelekre, mivel azok a mondat elején nem szerepelnek.

let mondat = prompt("Adj meg egy mondatot!");

let forditottMondat = "";

for (let i = mondat.length - 1; i >= 0; i--) {
    forditottMondat += mondat[i];
}
    if (mondat === forditottMondat) {
        console.log("A mondat visszafelé is ugyanazt jelenti!");
    }
    
    else{
        console.log("A mondat visszafelé nem ugyanazt jelenti!");
    

 console.log(`Eredeti mondat: ${mondat}`);
 console.log(`Fordított mondat: ${forditottMondat}`);  
}
