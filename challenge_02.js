/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

<<<<<<< HEAD

let Name, age
Name = prompt ("Name eingeben!");
age = prompt("Alter eingeben!")
//  console.log(Name + "  " + age);
// console.log("Name: " + Name);
// console.log("Alter: " + age);

 if (age < 6) {
    console.log(Name + " trinkt Milch");
}
     
 if (age >= 6 && age <= 12) {
    console.log(Name + " trinkt Saft");
}

if (age < 18 && age > 12) {
    console.log(Name + " trinkt Cola");
}

if (age > 17) {
    console.log("Wein");
}

//********************************************** */
// if (age = 0-5) {
//     console.log("Milch");
// } 
// else {
//   console.log("Wein")  
// }

//******************************************** */


=======
const firstName = prompt("Bitte Namen eingeben:");
const age =  parseInt(prompt("Bitte Alter eingeben:")); // "2" --> 2

switch (true) {
    case (age >= 0) && (age <= 5) :
        console.log(firstName + " trinkt Milch");
        break;
    case (age >= 6) && (age <= 12):
        console.log(firstName + " trinkt Saft");
        break;
    case (age >= 13) && (age <= 17):
        console.log(firstName + " trinkt Cola");
        break;
    case (age >= 18) && (age <= 130):
        console.log(firstName + " trinkt Wein");
        break;   
    default:
        console.log("Bitte Tee trinken!");   
        break;
}
>>>>>>> b7be2f88ef7855925210a078ca4635eefd34d103
