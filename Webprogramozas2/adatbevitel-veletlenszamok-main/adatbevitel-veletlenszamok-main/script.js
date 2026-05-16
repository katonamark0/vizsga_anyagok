//#region 1. feladat

let a = prompt('Kérek egy számot: ', 0);

//#endregion

//#region 2. feladat

let egyikoldal = Number(prompt('Add meg a téglalap egyik oldalát: ', 0));
let masikoldal = Number(prompt('Add meg a téglalap másik oldalát: ', 0));

let teglalap_terulet = egyikoldal * masikoldal;
let teglalap_kerulet = 2 * (egyikoldal + masikoldal);

console.log(`A téglalap területe: ${teglalap_terulet}`);
console.log(`A téglalap kerülete: ${teglalap_kerulet}`);

//#endregion

//#region 3. feladat

let kor_sugar = Number(prompt('Add meg a kör sugarát: ', 0));

let kor_terulet = Math.PI * kor_sugar * kor_sugar;
let kor_kerulet = 2 * Math.PI * kor_sugar;

console.log(`A kör területe: ${kor_terulet}`);
console.log(`A kör kerülete: ${kor_kerulet}`);

//#endregion

//#region 4. feladat

let dobas = Math.floor(Math.random() * 6) + 1;
console.log(`A dobott szám: ${dobas}`);

//#endregion

//#region 5. feladat

let lottoszam = Math.floor(Math.random() * 90) + 1;
console.log(`A lottószám: ${lottoszam}`);

//#endregion

//#region 6. feladat

let inch = Number(prompt('Add meg a hosszúságot inch-ben: ', 0));
let cm = inch * 2.54;

console.log(`${inch} inch = ${cm} cm`);

//#endregion

//#region 7. feladat

let masodperc = Number(prompt('Add meg az időt másodpercben: ', 0));
let perc = Number(prompt('Add meg az időt percben: ', 0));
let ora = Number(prompt('Add meg az időt órában: ', 0));

let ossz_masodperc = masodperc + (perc * 60) + (ora * 3600);
console.log(`Összesen ennyi másodperc: ${ossz_masodperc}`);

//#endregion

//#region 8. feladat

let nap = Number(prompt('Add meg a napok számát: ', 0));
let ora2 = Number(prompt('Add meg az órák számát: ', 0));

let honap = Math.floor(nap / 30);

console.log(`Ez ${honap} hónap és ${ora2} óra.`);


//#endregion

//#region 9. feladat
let szam1 = Number(prompt('Adj meg egy számot: ', 0));
let szam2 = Number(prompt('Adj meg egy másik számot: ', 0));    
let szam3 = Number(prompt('Adj meg egy harmadik számot: ', 0));

let szamtani_kozep = (szam1 + szam2 + szam3) / 3;

console.log(`A három szám számtani közepe: ${szamtani_kozep}`);

//#endregion




