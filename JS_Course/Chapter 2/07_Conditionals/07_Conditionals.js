// IF - ELSE Statements

// let a = prompt("hey whats your age")
// // Number , String , undefined , null
// a = Number.parseInt(a) // Converting the string to a number
// console.log(typeof (a))
// if (a > 0) {
//     alert("this is a valid age");
// }
// else
// {
//     alert("this is an invalid age");
// }


//IF-ELSE-IF STATEMENTS


let a = prompt('What is your age?');
a = Number.parseInt(a);
if (a < 0) {
    alert("Please enter a valid age");
} else if (a >= 1 && a <= 18) {
    alert("you are not an adult");
} else if (a > 18) {
    alert("you are an adult")
}