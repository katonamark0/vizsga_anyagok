//1. Írj egy JavaScript programot, amely bekér egy pozitív egész számot, majd kiszámolja és kiírja a szám számjegyeinek összegét!

//let szam = parseInt(prompt("Adj meg egy pozitív egész számot:"));
//let osszeg = 0;
//
//while (szam > 0) {
//    osszeg += szam % 10;
//    szam = Math.floor(szam / 10); 
//}
//console.log("A számjegyek összege: " + osszeg);


//2. Készíts egy egyszerű számológép programot, amely két számot és egy műveletet kér be, majd kiírja az eredményt!
let szam = parseFloat(prompt("Adj meg egy számot:"));
let szam2 = parseFloat(prompt("Adj meg egy másik számot:"));
let muvelet = prompt("Adj meg egy műveletet (+, -, *, /):");
let eredmeny;
switch (muvelet) {
    case "+":
        eredmeny = szam + szam2;
        break;
    case "-":
        eredmeny = szam - szam2;
        break;
    case "*":
        eredmeny = szam * szam2;
        break;
    case "/":
        if (szam2 !== 0) {
            console.log(eredmeny + szam / szam2);
        } else {
           console.log(eredmeny + "Hiba: nullával való osztás!");
            
        }
        break;
    default:
        console.log(eredmeny + "Hiba: érvénytelen művelet!");
        
}
console.log("Az eredmény: " + eredmeny);
