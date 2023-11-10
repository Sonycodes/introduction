
// for(i=0; i<100; i++) {
//     if(i %3==0 && i%5==0){
//         console.log(i +" > "+"Fizz Bizz")
// } else if (i % 5==0){
// console.log(i +" > "+"bizz")
// }else if(i %3==0){
// console.log(i +" > "+"Fizz")
// }else{
// }
// }


// let note = Number(prompt("entrez votre note"));
// alert(note);

// if (note == 0){
//     console.log("t'es null")
// } 
// else if (note <= 5){
//     console.log("faut travailler un peu")
// } 
// else if (note > 5 && note <= 9){
//     console.log("continue tes efforts")
// } else if (note == 10){
//     console.log("bien")
// } else if (note >= 11 && note <= 14){
//     console.log("assez bien")
// } else if (note >= 15 && note < 18){
//     console.log("tres bien")
// } 
// else if (note >= 18){
//     console.log("exellent")
// }
// else{
//     console.log("cette note n'existe pas")
// }

// if (note == 0){
//     alert("t'es null")
// } else{
//     if(note <= 5){
//         alert("faut travailler un peu")
//     } else{
//         if(note < 10){
//             console.log("continue tes efforts")
//         } else{
//             if( note == 10){
//                 console.log("bien")
//             }
//         }
//     }
// }



///mon exo 

// let nombre1 = Number(prompt("entrez nombre"))

// if(nombre1 % 2 == 0){
//     alert(nombre1 + " est pair" )
// } else{
//     alert(nombre1 + " est impair")
// }


// let nombre2 = Number(prompt("entrez nombre"))

// if(nombre2 % 2 == 0){
//     alert(nombre2 + " est pair" )
// } else{
//     alert(nombre2 + " est impair")
// }

// if (nombre1 % nombre2 == 0 || nombre2 % nombre1 == 0  ){
//     alert(nombre1 + " et " + nombre2 +" sont divisibles entre eux")
// } else{
//     alert(nombre1 + " et " + nombre2 +" ne sont pas divisibles entre eux")
// }

// refaire en imbriqué


// correction sofiane : Demander un premier nombre à l'utilisateur
// let nombre1 = Number(prompt("Entrez un nombre entier:"));

// // Vérifier si le nombre est pair ou impair
// if (nombre1 % 2 == 0) {
//   // Si le reste de la division par 2 est 0, le nombre est pair
//   alert(nombre1 + " est pair");
// } else {
//   // Sinon, le nombre est impair
//   alert(nombre1 + " est impair");
// }

// Demander un deuxième nombre à l'utilisateur
// let nombre2 = Number(prompt("Entrez un autre nombre entier:"));

// // Vérifier si le nombre est pair ou impair
// if (nombre2 % 2 == 0) {
//   // Si le reste de la division par 2 est 0, le nombre est pair
//   alert(nombre2 + " est pair");
// } else {
//   // Sinon, le nombre est impair
//   alert(nombre2 + " est impair");
// }

// // Vérifier si les deux nombres sont divisibles entre eux
// if (nombre1 % nombre2 == 0 || nombre2 % nombre1 == 0) {
//   // Si le reste de la division du premier nombre par le deuxième ou du deuxième par le premier est 0, les nombres sont divisibles
//   alert(nombre1 + " et " + nombre2 + " sont divisibles");
// } else {
//   // Sinon, les nombres ne sont pas divisibles
//   alert(nombre1 + " et " + nombre2 + " ne sont pas divisibles");
// }

// correction benoit

// let nombre = Number(prompt("Entrez un nombre:"));

// if (nombre % 2 == 0) (alert("Le nombre " + nombre + " est pair"))
// else (alert("Le nombre " + nombre + " est impair"))

// let nombre2 = Number(prompt("Entrez un nombre:"));

// if (nombre > nombre2) {
//     if (nombre % nombre2 == 0) (alert(nombre + " et " + nombre2 + " sont divisibles")) 
//     else (alert(nombre + " et " + nombre2 + " ne sont pas divisibles"))
// } else {
//     if (nombre2 % nombre == 0) (alert(nombre + " et " + nombre2 + " sont divisibles")) 
//     else (alert(nombre + " et " + nombre2 + " ne sont pas divisibles"))
// }