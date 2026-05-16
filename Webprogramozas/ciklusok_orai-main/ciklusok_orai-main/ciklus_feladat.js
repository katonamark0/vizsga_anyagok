// 2. Tetszőleges betűvel tetszőleges (1-10) sort töltsünk i képernyőn!

// let sorokSzama = 6
// let betu = "*"
// for (let i = 0; i < sorokSzama; i++) {
    // console.log(betu.repeat(i));
    // 
// }

// 3. Írassuk ki 99-től csökkenő sorrendben az összes pozitív, 3-mal osztható egész számot!

// for (let i = 99; i > 0; i--) {
    // if(i % 3 === 0){
        // console.log(i); 
    // }
// }

// 4. Írassuk ki 101-től 50-ig csökkenő sorrendben az öttel osztható számok kétszeresét!

// for (let i = 101; i > 50; i--) {
        // if(i % 5 === 0){
            // console.log(i * 2);
            // 
        // }
    // 
    // 
// }

// 5. Határozzuk meg az első N természetes szám összegét!

// let N = 10
// let osszeg = 0
// 
// for(let i = 1; i <= N; i++){  
    // osszeg += i ** 2
// }
// 
// console.log(`Az első ${N} természetes szám összege: ${osszeg}`);
// 
// 6. Írjuk ki az első N négyzetszám átlagát!
// 
// let atlag = osszeg / N
// console.log(atlag);


// 7. Számítsa ki a gép 10 tetszőleges szám összegét, szorzatát és átlagát!

// 8. Készítsünk N-es szorzótáblát (1xN, 2xN,...)!

// let N2 = 6

// for (let i = 1; i < 10; i++) {
    // console.log(`${i} x ${N2} = ${i * N2}`);
// }

// // 11. Szimuláljunk kockadobást: dobjuk fel addig a kockát, amíg hatost nem dobunk. Írjuk ki
// az egyes dobások eredményét, majd a sorozat végén a dobások átlagát is!

// let dobasokSzama = 0
// let dobasokOsszege = 0
// 
// while(true){
    // let dobas = Math.floor(Math.random() * 6) + 1
// 
    // console.log(dobas);
// 
    // dobasokSzama++
// 
    // dobasokOsszege += dobas
// 
    // if(dobas === 6){
        // break
    // }
// }
// 
// let dobasokAtlaga = dobasokOsszege / dobasokSzama
// console.log(`A dobások átlaga: ${dobasokAtlaga}`);

// 12. Szimuláljunk kockadobást: dobjuk fel addig a kockát, amíg 3 db hatost nem dobunk.
// Írjuk ki az egyes dobások eredményét, majd a sorozat végén a dobások átlagát is!

let N2 = 6
// 
for (let i = 1; i < 10; i++) {
    console.log(`${i} x ${N2} = ${i * N2}`);
}
// 
// 11. Szimuláljunk kockadobást: dobjuk fel addig a kockát, amíg hatost nem dobunk. Írjuk ki
// az egyes dobások eredményét, majd a sorozat végén a dobások átlagát is!
// 
// let dobasokSzama = 0
// let dobasokOsszege = 0
// let hatosDobasokSzama = 0
// 
// while(hatosDobasokSzama < 3){
    // let dobas = Math.floor(Math.random() * 6) + 1
// 
    // console.log(dobas);
// 
    // dobasokSzama++
// 
    // dobasokOsszege += dobas
// 
    // if(dobas === 6){
        // hatosDobasokSzama++
    // }
// }
// 
// let dobasokAtlaga = dobasokOsszege / dobasokSzama
// console.log(`A dobások átlaga: ${dobasokAtlaga}`);

// 14. Kérjen be a program számokat mindaddig, amíg 0-át nem írunk be! Ezután írja ki, hogy
// páros szám volt a beírt számok között!
let voltParos = false;

while(true){
    let szam1 = Number(prompt("Írj be egy számot (0-val kilépsz)!: "))
    
    
    if(isNaN(szam1)){
        alert("Érvénytelen bevitel, kérlek adj meg egy számot");
        continue;
    }

    console.log(szam1);
    
    if(szam1 == 0){
        break;
}

    if(szam1 % 2 === 0){
        voltParos = true;
    }


}

if(voltParos){
    console.log("Volt páros szám a beírt számok között!");
    
}else{
    console.log("Nem volt páros szám a beírt számok között!");
    
}
