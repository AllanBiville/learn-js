// // alert("Lancement JS");
// // console.log("Lancement console");
// let maVariable = "Coucou variable";
// console.log(maVariable);
// maVariable = "Variable modifié";
// console.log(maVariable);
// const prenom = "Allan";
// console.log(prenom);
// maVariable = "oui";

// let string = "Je suis une chaine";
// let number = 24;
// let boolean = true;
// let array = ["je", "suis",24, false];
// let object = {
//     prenom: "audrey",
//     age : 34,
//     ville : "Bordeaux",
// };
// console.log(typeof string);
//     console.log(typeof array);
//         console.log(typeof object);

// let arbre; //Non défini
// let arbre2 = null; //  Valeur null

// let x = 5;
// let y = 6;
// console.log(x + " et " + y);

// x < y ? console.log("True !") : console.log("false");

// function faireQuelqueChose(){
//     console.log("Function Fairequelquechose lancé");
// }
// faireQuelqueChose();

// const faireAutreChose = (tache) => {
//     console.log("je fais ça : " +  tache)
// };

// faireAutreChose('la fete');

//#################################################
// CALCULATRICE
//#################################################

let total = 0;

function addition(x){
    total += x;
    return total;
}
function soustraction(x){
    total -= x;
    return total;
}
function division(x){
    if (total === 0){
        return (total = x);
    } else {   
        total /= x;
        return total;
    }
}
function multiplication(x){
    if (total === 0){
        return (total = x);
    } else {   
        total *= x;
        return total;
    }
}
function reset(){
    total = 0;
}