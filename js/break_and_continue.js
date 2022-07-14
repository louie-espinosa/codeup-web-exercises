{ //BYE BYE overly complicated IFFE and hello simple braces!
    "use strict";

//need to use break to stop code and ask for appropriate input
    function breakAndCont() {
        let userInput = (Number(prompt("Please pick an odd number between 1 - 50.")));
        while (isNaN(userInput)) {
            userInput = (Number(prompt("Please pick an odd number between 1 - 50.")));
            break;     //using the true statement as the condition for the while loop essentially forces the switch to run the loop continuously.
        }                               //breaks can be used to break them out of the condition that is required for entry.
        //if (userInput % 2 === 0 && userInput > 0 && userInput is <= 50) { for the else, or false,
        for (let i = 0; i <= 50; i++) {    //userInput = prompt('That is not an odd number, 'please pick an odd...'

            if (i % 2 === 0 || i === userInput) { //The AND (&&) requires Both to evaluate as true.
                continue;

            }               //if (1 % 2 === 0) {
            console.log(i)      //  continue;
            // else if--or if this is true--(i === userInput) console.log("Whoops! Skipping" + userInput);
        }

    }
}
breakAndCont();