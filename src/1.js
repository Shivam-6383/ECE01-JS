console.log("Hello World");

// var x = 10;  // var will execute in hosting phase.
// let y = 15;
// const z = 5;
// fullName ="xy z";
// y = 20;
// a = null; // this is used to avoid storing garbage values. 
// b = undefined;
// isBollean = true;
// console.log(fullName);
// console.log(typeof fullName);
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(isBollean);
// console.log(typeof isBollean);
// console.log(typeof a); // null is a object with null value
// console.log(typeof b);

let count = 0;
// document.write("starting loop" + " <br/>"); // this is similar like console.log but it directly print things over the main page not in console. 
// for (count = 0; count < 10; count++) {
//     document.write(" current count:" + count + "<br/>");
// }
// document.write("loop stopped");
// while( count < 5) {
//  console.log(count) ;
//  document.write(count + "<br/>")
//  count++ ;
// }

let person = {
    fName: "ajay",
    lName: "kumar",
    age: 25,
    gender: "male"
};
// for (let key in person) {
//     document.write( key + " : " + person[key] + "<br/>");
//     console.log(person[key]);
// }

// CONDITIONAL STATMENTS 
// let age = 25;
// if (age >= 18) {
//     document.write("<b> <i> person is eligible  <i/> <b/>")
// }
// else {
//     document.write("<b> person is NOT eligible <b/>")
// }

// SWITCH CASE 
let grade = prompt("enter grade");
switch (grade) {
    case 'A': document.write("good job <br/>");
        break;
    case 'B': document.write("preety good <br/>");
        break;
    case 'C': document.write("need to improve <br/>");
        break;
    case 'D': document.write("need work hard <br/>");
        break;
    default : "unknown entry" ;
}


