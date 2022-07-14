{
    "use strict";

    function showMultiplicationTable(x) {
        for (let i = 1; i < 11; i++) {
            console.log(x + "*" + i + "=" + (i * x));
        }
    }

    showMultiplicationTable();
// Use a for loop and the code from the previous lessons 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even. For example:

    function random200() {

        for (let i = 0; i < 11; i++) {
            let twentyToTwo = Math.floor((Math.random() * 181) + 20); //plus twenty shifts the front and back end forward. So I get 20 to 201
            if (twentyToTwo % 2 === 0) {
                console.log(twentyToTwo + " is even");
            } else {
                console.log(twentyToTwo + " is odd");
            }
        }
    }

    random200();

    function halfPyramid() {                //Alternately, we can use the repeat function. Check it:
        let pattern = "";                  //for (let i = 1; i <= 9; i++) {
        for (let i = 0; i < 10; i++) {      //let iAsString = i.toString();
            for (let j = 0; j < i; j++) {  // console.log(iAsString.repeat(i));  ** For no variable, console.log(i.toString.repeat(i));
                pattern += i;
            }
            pattern += "\n";
        }
        console.log(pattern);
    }

    halfPyramid();


    for (let i = 100; i > 0; i -= 5) {
        console.log(i)
    }

}

