console.log("Hello World");
{
    var x = 10;  // var will execute in hosting phase.
    let y = 15;
    const z = 5;
    fullName ="xy z";
    y = 20;
    a = null; // this is used to avoid storing garbage values. 
    b = undefined;
    isBollean = true;
    console.log(fullName);
    console.log(typeof fullName);
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(isBollean);
    console.log(typeof isBollean);
    console.log(typeof a); // null is a object with null value
    console.log(typeof b);
}
