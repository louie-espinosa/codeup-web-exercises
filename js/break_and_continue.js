"use strict";

//need to use break to stop code and ask for appropriate input
function breakAndCont() {
    let userInput = (Number(prompt("Please pick an odd number between 1 - 50.")));
    while (isNaN(userInput)) {
        userInput = (Number(prompt("Please pick an odd number between 1 - 50.")));
        break;
    }
    for(let i = 0; i <= 50; i++) {

        if (i % 2 === 0 || i === userInput) { //The AND (&&) requires Both to evaluate as true.
            continue;

            }
        console.log(i)
        }

}
breakAndCont();