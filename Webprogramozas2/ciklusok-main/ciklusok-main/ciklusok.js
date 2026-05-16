//for(let i = 1; i <= 5; i++) {
//    console.log(i);
//}

//let person = {name:"Pista", age: 40, email:"pista@email.con"};
//
//for(key in person) {
//    console.log(key + " = " + person[key]);
//}

//let cars = ["BMW", "Volkswagen", "Trabant"];
//
//for(car in cars) {
//    console.log(cars[car]);
//}


//let cars = ["BMW", "Volkswagen", "Trabant"];
//
//for(car of cars) {
//    console.log(car);
//}

//let i = 1;
//
//while(i <= 5){
//    console.log(i);
//    i++;
//}

//let i = 1;
//
//do{
//    console.log(i);
//    i++;
//}while(i <= 5);


//let i = 1;
//while (true){
//    if(i > 5) {
//        break;
//    }
//    console.log(i);
//    i++;
//    
//}

//let i = 0;
//while(i < 10) {
//    i++;
//    if(i % 2 == 1) {
//        continue;
//    }
//    console.log(i);
//}

//1. Írassuk ki 1-től 20-ig a számokat, a négyzetüket és a négyzetgyöküket táblázatos
//formában!

let i = 1;
console.log("Szám\tNégyzet\tNégyzetgyök");
while(i <= 20) {
    console.log(i + "\t" + (i*i) + "\t\t" + Math.sqrt(i));
    i++;
}
