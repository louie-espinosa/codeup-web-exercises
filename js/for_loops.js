 "use strict";
function showMultiplicationTable(x) {
    for (let i = 1; i < 11; i++) {
    console.log(x + "*" + i + "=" + (i * x));
    }
}
// Use a for loop and the code from the previous lessons 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even. For example:

function random200() {

    for (let i = 0; i < 11; i++) {
        let twoToTwenty = Math.floor((Math.random() * 201)+ 20);
        if (twoToTwenty % 2 === 0) {
        console.log(twoToTwenty + " is even");
    } else {
        console.log(twoToTwenty + " is odd");
        }
}}
random200();

function halfPyramid() {
    let pattern = "";
    for(let i = 0; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            pattern += i;
        }
        pattern += "\n";
    }
    console.log(pattern);
}

halfPyramid();


    for(let i = 100; i>=1; i -= 5) {
        console.log(i)
    }



